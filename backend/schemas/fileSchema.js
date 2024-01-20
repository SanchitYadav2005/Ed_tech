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
});

module.exports = mongoose.model("File", fileSchema);
