import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  status: { type: String, enum: ['Applied', 'Shortlisted', 'Rejected'], default: 'Applied' },
  appliedOn: { type: Date, default: Date.now },
});

export default mongoose.model('Application', applicationSchema);
