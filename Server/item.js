import mongoose from 'mongoose';

// Define the Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true ,
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export the User model based on the schema
const User = mongoose.model('User', userSchema);
export default User;
