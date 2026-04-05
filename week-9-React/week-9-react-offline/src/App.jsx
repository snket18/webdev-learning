// import { useState, useEffect } from 'react';


// export default function App() {


//   return (
//     <div style={{ backgroundColor: "#95a5a6", height: "100vh" }}>
//       <div style={{ justifyContent: "center", display: "flex" }}>
//         <div><br/><div>
//           <PostComponent />
//         </div>
// <br/>
//           <div>
//             <PostComponent />
//           </div>
//           <br/>
//           <div>
//             <PostComponent />
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }


// function PostComponent() {


//   const style = {  borderRadius: 20, backgroundColor: "white", justifyContent: "center", padding: "30px" }



//   return (
//     <div>
//       <div style={style}>
//         <div style={{
//           display: "flex",


//         }}>

//           <div>
//             <img src={'https://imgs.search.brave.com/GTeejyYs9MXeDAf74nThN6xGSqqrF9BAf3PlbtNT74Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/MzM0LzE2Ni9zbWFs/bC9jdXRlLWthd2Fp/aS1jaGliaS1hbmlt/ZS1naXJsLXN0aWNr/ZXItd2VhcmluZy1w/YWphbWEtc2ltcGxl/LWNvbG9yZnVsLWJh/Y2tncm91bmQtcGhv/dG8uanBn'} style={{
             
//               width: 30, Height: 40
//             }} />
//           </div>

//           <div>
//             <b><div>100 devs</div></b>
//             <div>23,000 followers</div>
//             <div>12m</div>
//           </div>


//         </div>


//         <div>
//           want to know how to  win big  ?
//         </div>
//       </div>

//     </div>
//   )
// }



import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

