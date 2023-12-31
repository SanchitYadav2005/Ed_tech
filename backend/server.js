require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const staticRoutes = require('./routes/staticRoutes')

app.use(express.static("assets"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/api/user/", userRoutes);

app.get('/',(req, res)=>{
  const responseData = {
    videos: '/assests/videos.jpg',
    notes: '/assests/notes.jpg',
    community: '/assests/community.jpg',
    interaction: '/assests/interaction.jpg',
    growth: '/assests/growth.jpg',
    programmer: '/assests/Programmer.gif',
    videosText:
      "Our video collection isn't just about quantity; it's about quality. Carefully curated, these videos complement your learning, providing dynamic explanations and visual demonstrations that bring theories to life. From engaging animations to real-world applications, each video is chosen to reinforce your understanding and make learning enjoyable. 🎬✨📚",
    notesText:
      "Our notes aren't just summaries; they're your roadmap to academic excellence. Comprehensive, yet easy to digest, they break down intricate subjects into bite-sized, understandable chunks. With visuals, examples, and organized structures, these notes cater to various learning styles, ensuring you grasp concepts effectively. 📝📚🌟🎨",
    communityText:
      "Dezire isn't just a platform; it's a community buzzing with energy! Connect with fellow learners, mentors, and educators who share your enthusiasm for knowledge. Exchange ideas, seek guidance, and collaborate on projects. Engage in forums, live discussions, and workshops that foster a culture of mutual support and growth. 🌐🤝📚🚀✨",
    interactionText:
      "Learning is a collaborative journey at Dezire. Join live study sessions, interactive quizzes, and engaging webinars hosted by subject matter experts. Participate in group challenges or create study circles to tackle complex topics together. Engage in healthy debates that broaden perspectives and deepen your understanding. 🎓📚🤝🌐🧠",
    growthText:
      "At Dezire, we believe in nurturing lifelong learners. Access resources beyond conventional textbooks, such as blogs, podcasts, and research papers, curated to spark curiosity and inspire intellectual growth. Develop critical thinking skills and embrace a growth mindset that extends far beyond the classroom. 📚🔍🎙️📝🌱🧠",
  };
  res.status(200).json(responseData)
})

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to server and atlas on port:- ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
