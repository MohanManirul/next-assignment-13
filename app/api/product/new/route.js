import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {headers} from "next/headers";

//get request

export async function GET(req,res){
  const {searchParams} =  new URL(req.url);
  let id = searchParams.get('id');
  let name = searchParams.get('name');
  let city = searchParams.get('city');
    return NextResponse.json({
        id : id,
        name : name,
        city : city
    });
}


//post request

export async function POST(req,res){
   const reqBody =  await req.json();
    return NextResponse.json({
        id : reqBody['id'],
        name : reqBody['name'],
        city : reqBody['city']
    })
}


//put request

export async function PUT(req,res){
    let Data = await req.formData(); // this is not a json object , its a  key value pair
    let name = Data.get('name');
    let city = Data.get('city');
    let postCode = Data.get('postCode');
    return NextResponse.json({
        name : name,
        city : city,
        postCode : postCode,
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