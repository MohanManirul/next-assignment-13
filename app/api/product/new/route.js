import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {headers} from "next/headers";

//get request

export async function GET(req,res){
   return NextResponse.json(
        {},
        {
            status:401
        }
   );
}


//post request

export async function POST(req,res){
    let token = req.cookies.get('token');
    return NextResponse.json({
        token: token
    })
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