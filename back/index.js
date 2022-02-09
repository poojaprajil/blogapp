const express = require('express');
const cors = require('cors');
const ArticleInfo = require('./src/model/BlogDB');
const { userModelObj } =require('./src/model/userModel.js')

const app = express();
app.use(cors());
// Post Method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic Article Fetch Route
app.get('/api/article/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    try {
        const articleName = req.params.name;
        ArticleInfo.findOne({ name: articleName })
            .then(function (article) {
                res.status(200).json(article);
            })
    }
    catch (error) {
        res.status(500).json({ message: 'Error', eroor });
    }
});
// signup

app.post("/read", async (req, res) => {
    try {
      console.log(req.body);
      let mydata = new userModelObj(req.body);
      let result = await mydata.save();
     
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  });

  // login
  app.post("/login", async (req, res) => {
    try {
      var useremail=req.body.email
      var userpassword=req.body.password
      let result= await userModelObj.find({$and: [{email:useremail},{password:userpassword}]})
      res.json(result)
    }
     catch (error) {
      console.log(error);
    }
  });


//   Add article info
app.post("/add", async (req, res) => {
    try {
      console.log(req.body);
      let mydata = new ArticleInfo(req.body);
      let result = await mydata.save();
     
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  });
  app.post("/delete", async (req, res) => {
    try {
      let result = await rticleInfo.deleteOne({"name": req.body.name });
      console.log("deleted");
     
    } catch (error) {
      console.log(error);
    }
  });

//   view db content
app.get("/viewall", async (req, res) => {
    try {
      var result = await ArticleInfo.find();
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  });

// Upvotes Routing
app.post('/api/article/:name/upvotes', (req, res) => {
    const articleName = req.params.name;
    const filter = { name: articleName };
    const update = { $inc: { upvotes: 1 } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
        .then(function (article) {
            res.json(article);
        })
})

// Comments Routing
app.post('/api/article/:name/comments', (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    const filter = { name: articleName };
    const update = { $push: { comments: { username, text } } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
        .then(function (article) {
            res.json(article);
        })
})

// Port number
app.listen(5000, () => {
    console.log("Listening on port 5000");
})