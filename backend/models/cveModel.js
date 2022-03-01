import mongoose from 'mongoose';

const cveSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true, unique: true },
    Status: { type: String, required: true },
    Description: { type: String, required: true },
    References: { type: String, required: false },
    Phase: { type: String, required: false },
    Votes: { type: String, required: false },
    Comments: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const CVE = mongoose.model('CVE', cveSchema);
export default CVE;
