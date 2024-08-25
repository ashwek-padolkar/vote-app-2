const express =  require('express');
const router = express.Router();
const User = require('../models/user');
const {jwtAuthMiddleware} = require('../jwt');
const Candidate = require('../models/candidate');

// Chech that whoever using this route is admin.
const checkAdminRole = async (userId) => {
  try{
    const user = await User.findById(userId);
    
    if(user.role === 'admin') {
      return true;
    }
  }
  catch(err) {
    return false;
  }
}

// POST route to add a candidate
router.post('/', jwtAuthMiddleware, async (req, res) => {
  try {
    // req.user contains the authenticated user information. It was stored in 'jwt.js'
    // req.user.id: means the token that is sent from the request, from that token, extract the user.id means ObjectId(_id) provided by MongoDB.
    if(!(await checkAdminRole(req.user.id))) {
      return res.status(403).json({ message: 'you are not an admin' });
    }

    const data = req.body;   // Assuming the request body contains the candidate data.

    // Create a new User document using the Mongoose model.
    const newCandidate = new Candidate(data);

    // Save the new User to the database.
    const response = await newCandidate.save();
    console.log('data saved');

    res.status(200).json({ response: response });
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// GET route to get list of candidates
router.get('/', async (req, res) => {
  try {
    const data = await Candidate.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// Update Candidate
router.put('/:candidateId', jwtAuthMiddleware, async (req, res) => {
  try {
    if(!(await checkAdminRole(req.user.id))) {
      return res.status(403).json({ message: 'user does not have admin role' });
    }

    const candidateId = req.params.candidateId;       // Extract the candidateId from the URL parameter.
    const updatedCandidateData = req.body;            // Update the data from the candidate.

    const response = await Candidate.findByIdAndUpdate(candidateId, updatedCandidateData, {
      new: true,            // Return the updated statement
      runValidators: true,  // Run mongoose validator
    });

    if(!response) {
      return res.status(404).json({error: 'Candidate not found'});
    }

    console.log('Candidate data updated');
    res.status(200).json(response);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// Delete Candidate
router.delete('/:candidateId', jwtAuthMiddleware, async (req, res) => {
  try {
    if(!(await checkAdminRole(req.user.id))) {
      return res.status(403).json({ message: 'user does not have admin role' });
    }

    const candidateId = req.params.candidateId;       // Extract the candidateId from the URL parameter.

    const response = await Candidate.findByIdAndDelete(candidateId);

    if(!response) {
      return res.status(404).json({error: 'Candidate not found'});
    }

    console.log('Candidate deleted');
    res.status(200).json(response);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Voting
router.post('/vote/:candidateId', jwtAuthMiddleware, async (req, res) => {
  // no admin can vote
  // user can vote only once

  const candidateId = req.params.candidateId;
  const userId = req.user.id;

  try {
    // Find the Candidate document with the specified candidate
    const candidate = await Candidate.findById(candidateId);

    if(!candidate) {
      return res.status(404).json({error: 'Candidate not found'});
    }

    // Find the User document with the specified user
    const user = await User.findById(userId);

    if(!user) {
      return res.status(404).json({error: 'User not found'});
    }

    // Check if the user has already voted
    if(user.isVoted) {
      return res.status(400).json({error: 'You have already voted'});
    }

    // Check if the role is admin, if yes then do not allow admin to vote because admins are not allowed to vote.
    if(user.role == 'admin') {
      return res.status(400).json({error: 'admin is not allowed to vote'});
    }

    // Update the Candidate document to record the vote
    candidate.votes.push({user: userId});
    candidate.voteCount++;
    await candidate.save();

    // Update the user document
    user.isVoted = true;
    await user.save();

    res.status(200).json({message: 'Vote recorded successfully'});
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// Vote count
router.get('/vote/count', async (req, res) => {
  try {
    // Find all candidates and sort them by voteCount in descending order
    const candidate = await Candidate.find().sort({voteCount: 'desc'});

    // Map the candidates to only return their name and voteCount
    const voteRecord = candidate.map((data) => {
      return {
        party: data.party,
        count: data.voteCount
      }
    });

    return res.status(200).json(voteRecord);
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

module.exports = router;