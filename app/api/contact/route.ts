import connectDB from "@/app/lib/mongodb"
import Contact from "@/app/models/contact"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const  {fullname, email, message} = await req.json()

    try {
        await connectDB()
        await Contact.create({fullname, email, message})
        
        return NextResponse.json({msg: ["Message sent succesfully"], success: true})
    } catch (error) {
      if(error instanceof mongoose.Error.ValidationError) {
        let errorlist = []
        for(let e in error.errors) {
            errorlist.push(error.errors[e].message)
        }
        console.log(errorlist);
        
        return NextResponse.json({msg: errorlist})
      } else {
        return NextResponse.json({msg: "Unable to send message."})
      }

    }
}