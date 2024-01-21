import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        required: false
    }
});

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default Message;