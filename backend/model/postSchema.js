const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
  },
  recipientAddress: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String, // You can store the image URL or path as a string
    required: false,
  },
}, { timestamps: true });

const Post = mongoose.model('Postcards', postSchema);

module.exports = Post;
