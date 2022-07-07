const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const studentNotesModelCopy = require('../models/studentNotesModel')
const registerModel = require('../models/registerModel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken.js')
const adminLoginModel = require('../models/adminLoginModel')


//insert student notes
router.post('/', async (req, res) => {
  console.log(req.body)
  var data = new studentNotesModelCopy({
    title: req.body.title,
    description: req.body.description,
    notes: req.body.notes
  })
  await data.save()
  res.json()
})

//retrieve the student notes
router.get('/', async (req, res) => {
  var findData = await studentNotesModelCopy.find()
  res.json(findData)
})

//update student note


router.patch("/:id",async(req,res)=>{

  
  

  try {
      const {id} = req.params;

      const updatednotes = await studentNotesModelCopy.findByIdAndUpdate(id,req.body,{
          new:true
      });

      console.log(updatednotes);
      res.status(201).json(updatednotes);

  } catch (error) {
      res.status(422).json(error);
  }
})

//delete student note
router.delete('/:id/delete', async (req, res) => {

  const { id = '' } = req.params

  if (!id.trim()) {
    return res.status(400).json({ errors: ['You have to provide a id'] })
  }

  try {
    const record = await studentNotesModelCopy.findById(id)

    if (!record) {
      return res.status(400).json({ errors: ['Please provide a valid id'] })
    } else {
      studentNotesModelCopy.findByIdAndRemove(id)
        .then(() => res.status(200).json({ message: 'User deleted successfully' }))
        .catch(error => console.log(error))
    }

  } catch (error) {
    if (error.name == "CastError") {
      return res.status(400).json({ errors: ['Please provide a valid id'] })
    }
  }



})


//insert a new user
router.post('/userRegister', async (req, res) => {
  console.log(req.body)
  var data = new registerModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    DateOfBirth: req.body.DateOfBirth,
    mobile: req.body.mobile,
    status: req.body.status,
    password: req.body.password,
    accounttype: req.body.accounttype

  })
  await data.save()
  res.json()


})


//insert a registered user
router.post('/userLogin', async (req, res) => {
  const { email, password } = req.body;

  const user_email = await registerModel.findOne({ email });

    if (!user_email) {
      return res.status(400).json({ errors: ['You have to provide a registered email','you have to provide a valid password'] })
    }

  try {
    
    
     if (user_email && !((await user_email.matchPassword(password)))) {

        return res.status(400).json({ errors: ['You have to provide a registered email','you have to provide a valid password'] })
      } else {

        
        return res.status(200).json({ message: 'Logged in successfully' })
        
      }
    }catch (error) {
      if (error.name == "CastError") {
        return res.status(400).json({ errors: ['You have to provide a registered email','you have to provide a valid password']  })
      }

   
  }});

//retrieve user detail
router.get('/userData', async (req, res) => {
  var findUserData = await registerModel.find()
  res.json(findUserData)
})

//insert a new admin
router.post('/adminregister', async (req, res) => {
  console.log(req.body)
  var data = new adminLoginModel({

    email: req.body.email,
    password: req.body.password
  })
  await data.save()
  res.json()
})

//insert an admin
router.post('/adminlogin', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminLoginModel.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,

      email: admin.email,
      token: generateToken(admin._id),


    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }

}));

//retrieve a user data by id

router.get("/userdetails/:id", (req, res) => {
  const id = req.params._id;
  console.log(id)

  registerModel.findById(id).then(result => {
    res.status(200).json({
      data: result
    })
  })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })


});









module.exports = router