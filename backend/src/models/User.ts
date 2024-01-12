import mongoose, {model, Schema} from "mongoose";

const schema = new Schema({
  userName: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true}
})

export default model("User", schema)