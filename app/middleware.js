export function middleware(){
    console.log("I'm middleware");
}

export const config={

    matcher:['/api/:path*']

}