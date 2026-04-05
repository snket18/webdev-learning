import {useState , useEffect } from "react" ;


export  function getPostTitle(){

    const [posts , setPosts] = useState({});

    async function getPosts(){
       const  response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
       const json = await response.json();

       setPosts(json);

    }


    useEffect(function(){
       getPosts();
    },[] ) // only run when mount 

    return posts.title
    
}

    export  function useFetch(url){

        const [finalData , setFinalData] = useState({});

        async function getDetails(){
            const response = await fetch(url);
            const json = await response.json();

        setFinalData(json) ;
        }  

        useEffect (() => {
            getDetails();
        } , []) // dependency array likhna bhul jata hu 

        return {
            finalData
        }
    }