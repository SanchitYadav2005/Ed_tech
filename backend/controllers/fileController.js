const File = require("../schemas/fileSchema");

module.exports.uploadFile = async (req, res) => {
  const { file } = req.body;
  try {
    const uploadedFile = await File.create({file});
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
