export const setCookie =async()=>{
    const res = await fetch(`http://localhost:3000/api/product/getCookie`,{
        method:'POST'
    });
    
    if(!res.ok){
        throw new Error('Error fetching posts');
    }

    return await res.json();
}