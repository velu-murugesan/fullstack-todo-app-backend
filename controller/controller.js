import Todo from "../models/model.js";

export const getData = async (req, res) => {
  try {
    const data = await Todo.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error getting data", error);
  }
};

export const createData = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(req.body._id);
    if (!text) {
      return res.status(400).send("Text is required");
    }
    const newData = await Todo.create({ text });
    return res.status(201).send(newData);
  } catch (error) {
    console.log("Error creating data", error);
  }
};

export const updateData = async (req, res) => {
  const { _id, text } = req.body;
  console.log("value of :" + req.body._id);

  if (!_id) {
    return res.status(400).send("Id is required");
  }

  const data = await Todo.findByIdAndUpdate({ _id }, { text }, { new: true });
  console.log(data);
  res.status(200).send(data);
};

export const deleteData = async (req, res) => {
  const { _id } = req.body;
  const data = await Todo.findByIdAndDelete({ _id });
  return res.status(200).send(data);
};
