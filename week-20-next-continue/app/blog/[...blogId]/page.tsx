import axios from "axios";

export default async function Blogs({params}: any ){
    
    const postId = ( await params).blogId // params is a promise 
    // const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    // const data = response.data ;


    return <div>
        Blogs page {JSON.stringify(postId)}

        {/* <br />
        title - {data.title}
        body - {data.body} */}
    </div>
}