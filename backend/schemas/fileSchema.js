const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  file: {},
  link:{
    type: String
  },
  author: { type: Schema.Types.ObjectId, ref: "Developer" },
});

fileSchema.post("findByIdAndDelete", async (doc) => {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.review,
      },
    });
  }
});

module.exports = mongoose.model("File", fileSchema);
