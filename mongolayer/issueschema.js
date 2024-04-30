import mongoose from 'mongoose';

var issues=mongoose.model('issues',new mongoose.Schema(
    {
      _id: String,
      issue: String,
      description: String,
      raisedBy: String,
      assigneTo: String,
      status: String
    }
),'issues');

export default issues;