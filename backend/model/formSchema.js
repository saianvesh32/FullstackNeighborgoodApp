const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    address: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
    },
    interests: {
      type: [String],
      required: false,
    },
}, { timestamps: true });

const forms = mongoose.model('interestforms', formSchema);

module.exports = forms;
