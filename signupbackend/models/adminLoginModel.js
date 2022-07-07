const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const adminLoginModel = new mongoose.Schema({

email: {
    type: String,
    require: true

  },
  
  password: {
    type: String,
    required: true
  }
})


adminLoginModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


adminLoginModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


module.exports = mongoose.model('adminLogin', adminLoginModel)