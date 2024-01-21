import { connectToDB } from "@/utils/mongoose";
import Message from "@/utils/DB/messages";
import { NextResponse } from "next/server";

export const POST = async(req: Request, res: Response) =>{
    try{
        await connectToDB();
        const { name, message } = await req.json();
        const newMessage = new Message({ user:name, message });
        await newMessage.save();
        return NextResponse.json({ status: 200, message: "Message sent"});
    }
    catch(err) {
        return NextResponse.json({ status: 500, message: "Internal Server Error"});
    }
}

export const GET = async(req: Request, res: Response) => {
    try{
        await connectToDB();
        const messages = await Message.find({});
        return NextResponse.json({ status: 200, messages });
    }
    catch(err) {
        return NextResponse.json({ status: 500, message: "Internal Server Error"});
    }
}