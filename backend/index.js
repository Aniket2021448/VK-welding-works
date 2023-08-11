const express = require("express"); //to make express app
const cors = require("cors"); //to handle cross port requests
const mongoose = require("mongoose"); //to manage mongo db database
// const Customproduct = require("../frontend/src/page/Customproduct");
const dotenv = require("dotenv").config();
const path = require("path"); // Add this line to import the 'path' module

const app = express(); //initialise express app
app.use(cors()); //make the app use cors platform to handle cross port requests
app.use(express.json());

const PORT = process.env.PORT || 8080;

//MONGODB connection

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

//user Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,
  },
});

//product schema

const customProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    // require:true
  },
  // price:{
  //   type: String,
  //   require:true
  // },
  image: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
});

//models
const userModel = mongoose.model("user", userSchema);
const customProductModel = mongoose.model("customProduct", customProductSchema);

//API
app.get("/", (req, res) => {
  //by default API. sending this text.
  res.send("Server is running");
});

// Serve the main index.html for all routes
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"), (err) => {
//     if (err) {
//       res.status(500).send("Error loading index.html");
//     }
//   });
// });

//sign up
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

// ... (Rest of your route handlers)

// custom product API
app.post("/customproduct", async(req, res)=>{
  // console.log(req.body)
  const data = await customProductModel(req.body)
  const saveData = await data.save()
  res.send({message:"Request sent successully"})

})  

//fetch products

app.get("/products", async(req, res)=>{
  const data = await customProductModel.find({})
  res.send(JSON.stringify(data))

  // console.log("data")
})


app.listen(PORT, ()=>console.log("server is running at PORT: "+PORT))