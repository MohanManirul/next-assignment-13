import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


//get request

export async function GET(req,res){
    return NextResponse.json({
        msg : "I'm GET Response"
    });
}


//post request

export async function POST(){
    return NextResponse.json({
        msg : "I'm POST Response"
    });
}


//put request

export async function PUT(){
    return NextResponse.json({
        msg : "I'm PUT Response"
    });
}


//patch request

export async function PATCH(){
    return NextResponse.json({
        msg : "I'm PATCH Response"
    });
}


//delete request

export async function DELETE(){
    return NextResponse.json({
        msg : "I'm DELETE Response"
    });
}