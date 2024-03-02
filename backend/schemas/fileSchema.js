const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  file: {
    type: Buffer,
    validate: {
      validator: function (value) {
        return value.slice(0.5).toString("utf-8") === "%PDF-";
      },
      message: (props) => `${props.value} is not a valid PDF fiile`,
    },
  },
  author: { type: Schema.Types.ObjectId, ref: "Developer" },
});

fileSchema.post('findByIdAndDelete', async(doc)=>{
  if(doc){
      await Review.deleteMany({
          _id: {
              $in: doc.review
          }
      })
  }
})

module.exports = mongoose.model("File", fileSchema);
