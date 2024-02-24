const File = require("../schemas/fileSchema");
const Developer = require("../schemas/developerSchema");

module.exports.uploadFile = async (req, res) => {
  const { file } = req.body;
  const { id } = req.params;
  try {
    const uploadedFile = await File.create({ file });
    const developer = await Developer.findById(id);
    uploadedFile.author = developer._id;
    res.status(200).json({ message: "pdf file uploaded", uploadedFile});
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
};

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
