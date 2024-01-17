const mongoose = require("mongoose");

const { Schema } = mongoose;

const Todo = new Schema(
  {
    title: String, // String is shorthand for {type: String}
    content: String,
    status: Number,
    created_date: Date,
    updated_date: Date,
  },
  { versionKey: false }
);

module.exports = mongoose.model("todos", Todo);
