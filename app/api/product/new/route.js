import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {headers} from "next/headers";

//get request

export async function GET(req,res){
   
}


//post request

export async function POST(req,res){
    const headerList = headers();
    const apiKey = headerList.get('api-key');
    return NextResponse.json({
        msg : apiKey
    });
}


//put request

export async function PUT(req,res){
   
}


//patch request

export async function PATCH(){
   
}


//delete request

export async function DELETE(){
   
}