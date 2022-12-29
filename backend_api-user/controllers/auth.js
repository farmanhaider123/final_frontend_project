const bcrypt = require("bcrypt");

const { User, validateUser } = require("./../models/user");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { AUTH_TOKEN, ADMIN } = require("../constants");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "farmanhaider240@gmail.com",
    pass: "srjxfghezmkienjf",
  },
});
transporter.use(
  "compile",
  hbs({
    viewEngine: "nodemailer-express-handlebars",
    viewPath: "emailTemplates/",
  })
);
async function signIn(req, res) {
  const { email, password } = req.body;
 
  let user = await User.findOne({ email });

  if (!user) {
    return res.send({"err":1,"msg":"This email has not been registered!"});
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.send({"err":1,"msg":"Invalid Credentials!"});
  }

  const token = jwt.sign(
    {
      _id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      isAdmin: user.role === "admin",
    },
    "1@3456Qw-"
  );
 
  res.send({
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    isAuthenticated: true,
    token:token,
    err:0
  });
}

async function signUp(req, res) {
  console.log(req.body);

  let user = await User.findOne({ email: req.body.email });
  
  if (user) {
     
    return res
     .send({"err":"1","msg":"Try any other email, this email is already registered!"});
  }

  let userPhone = await User.findOne({ contactNumber: req.body.contactNumber });

  if (userPhone) {
    return res.send({"err":"1","msg":"Number Already exists"});
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const user = new User({
      ...req.body,
      password: await bcrypt.hash(req.body.password, salt),
    });
    const response = await user.save();
     let mailOptions = {
            from: "farmanhaider240@gmail.com",
            to: req.body.email,
            subject: "Testing Mail",
            template: "mail",
            context: {
              uname: req.body.firstName,
              email:req.body.email,
            },
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Mail send : " + id);
            }
          });
    res.send({"err":0,"msg":"User Registered"});
  } catch (ex) {
    res.status(400).send(ex.message);
  }
}
function getuserById(req, res, next) {
  let pid = req.params.id;
  console.log(pid);
User
    .findOne({ email: pid }) //findAndModify
    .then((result) => {
      console.log(`result${result}`);
      res.send(result);
    })
    .catch((err) => console.log(err));
}

module.exports = {
  signUp,
  signIn,
 getuserById,
};
