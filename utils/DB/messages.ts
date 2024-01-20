import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    user: {
        type: "string",
        required: true
    },
    message: {
        type: "string",
        required: true
    }
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;