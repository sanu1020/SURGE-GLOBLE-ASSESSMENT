const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const registerModel = new mongoose.Schema({


  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true

  },
  DateOfBirth: {
    type: Date,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accounttype: {
    type: String,
    required: true
  }
})


registerModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


registerModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


module.exports = mongoose.model('newRegisterUsersTable', registerModel)