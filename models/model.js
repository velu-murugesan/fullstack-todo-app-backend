import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", modelSchema);

export default Todo;
