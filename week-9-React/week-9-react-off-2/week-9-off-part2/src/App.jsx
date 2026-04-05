// import { useState, useEffect, Children } from "react";

// export default function App (){
//   const [showTimer , setShowTimer] = useState(true);


//   return <div style={{display:"flex" , backgroundColor : "grey" }}>
//     <Card>
      
//         hi there

      
//        </Card>

//      <Card>
//       <div style={{color : "red" }}> what do you want to post 
//       <input type={"text"}  placeholder="write here" /> </div>
//       </Card> 
     
    
//   </div>
// }

// function Card ({children}){

//   return <div style={{backgroundColor : "white" , borderRadius : "10"  , padding : 10 , margin : 10 , color : "green"}}>
//     {children}

//   </div>
// }




// #keys and maps 


// export default function App (){
//   const todos = [{
//     title : "go to gym" ,
//     done : false 
//   } , {
//     title : "do lectures",
//     done : true 
//   }] 

//   const todosComponents = todos.map(todo => <Todo 
//     title = {todo.title} done={todo.done} />
//   )

//   return (
//     <div>
//        {todosComponents}
//     </div>
//   )
// }

// function Todo({title , done}){
//   return <div>
//     {title} - { done ? "done !" : "not done !"}
//   </div>
// }





// #class based components and functional components


import { Component } from 'react';

export default function App (){
  return <div>
    <ClassCounter/>
  </div>
}

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
