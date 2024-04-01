const File = require("../schemas/fileSchema");
const Developer = require("../schemas/developerSchema");


module.exports.uploadFile = async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Retrieve file data from req.file
    const fileData = req.file;

    // Find the developer by id
    const developer = await Developer.findById(id);
    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }

    // Convert file buffer to base64
    const base64File = fileData.buffer.toString('base64');

    // Create a new file document and assign fileData and author
    const uploadedFile = new File({
      file: fileData,
      link: req.body.link,
      author: developer._id,
    });

    // Save the file document
    await uploadedFile.save();

    res.status(200).json({ message: "PDF file uploaded", uploadedFile, base64File });
  } catch (error) {
    let errorMessage = "Error uploading PDF file";

    if (error.name === "ValidationError") {
      // Mongoose validation error (e.g., file type validation failed)
      errorMessage = error.message;
    } else if (error.name === "MongoError" && error.code === 11000) {
      // Duplicate key error (if you have unique indexes in your schema)
      errorMessage = "File already exists";
    } else {
      // Other unexpected errors
      errorMessage = "Unexpected error occurred";
      console.error(error);
    }
    res.status(500).json({ message: errorMessage });
  }
}

module.exports.getAllFiles = async (req, res) => {
  // this find function will fetch all the abliable files
  try {
    const files = await File.find({}).populate("author");
    if (files.length === 0) {
      res.status(404).json({ message: "No files found!" });
    } else {
      res.status(200).json({ message: "Files have been sent!", files });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error!" });
  }
};
//get only link
module.exports.getAllLinks = async(req, res)=>{
  try{
    const files = await File.find({}).populate("author");
    if(files.length ===0){
      res.status(404).json({message: "No files found!"})
    }else{
      const links = files.map(file=> file.link)
      const videoIds = links.map((link)=>{
        const index = link.indexOf("v=")
        return index !== -1 ? link.substring(index + 2) : null;
      })
      res.status(200).json({message: "all links found!", links, videoIds})
    }
  }catch (error) {
    console.log(error);
    res.status(401).json({ message: "error!" });
  }
}
// getting only one file on click

module.exports.getSingleFile = async (req, res) => {
  const { id } = req.params;
  try {
    const file = await File.findById(id).populate("author");
    if (!file) {
      res.status(404).json({ message: "No file found!" });
    } else {
      res.status(200).json({ message: "File found", file });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error });
  }
};



// delete files

module.exports.deleteFile = async (req, res) => {
  const { id } = req.params;
  try {
    const file = await File.findByIdAndDelete(id);
    if (!file) {
      res.status(404).json({ message: "No file found for deletion" });
    } else {
      res.status(200).json({ message: "File deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "inernal server error", error });
  }
};
