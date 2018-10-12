const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
})


app.get('/',(req,res,next)=>{
  res.send("first middleware");
})

app.get('/api/posts', (req, res, next) => {
  console.log('second middleware');
  const posts = [
    {
      _id: "saldskfj",
      title: "post 1",
      content: "post 1 content from server"
    },
    {
      _id: "kljhfafa",
      title: "post 2",
      content: "post 2 content from server"
    }
  ];

  res.status(200).json({
    message: 'Posts fetched from server successfully',
    posts: posts
  });
});

app.use((req,res,next) => {
  res.status(404).json({
    message:"resource not found"
  })
})

module.exports = app;