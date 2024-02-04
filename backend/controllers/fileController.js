const File = require("../schemas/fileSchema");

module.exports.uploadFile = async (req, res) => {
  const { file } = req.body;
  try {
    const uploadedFile = await File.create({ file });
    uploadedFile.author = req.developer._id;
    res.status(200).json({ message: "pdf file uploaded", uploadedFile });
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
    const file = await File.find({});
    if (!file) {
      res.status(404).json({ message: "no files!" });
    }
    res.status(200).json({ message: "files have been sended!", file });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error!" });
  }
};

// getting only one file on click

module.exports.getSingleFile = async (req, res) => {
  const { id } = req.params;
  try {
    const file = await File.findById(id);
    if (!file) {
      res.status(404).json({ message: "No file found!" });
    }
    res.status(200).json({ message: "file founded", file });
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
      res.status(404).json({ message: "no file founded" });
    }
    res.status(200).json({ message: "file deleted" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "inernal server error", error });
  }
};
