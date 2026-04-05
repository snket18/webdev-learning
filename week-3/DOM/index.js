   const btn = document.getElementById("main") ;
    btn.style.backgroundColor = "red" ;
    btn.style.color = "white" ;
    btn.style.padding = "10px 20px" ;
    btn.style.borderRadius = "5px" ;
    btn.style.border = "none" ;
    btn.style.cursor = "pointer" ;

    function calculate() {
        let food = document.getElementById("food").value ;
        let rent = document.getElementById("rent").value ;
        let clothes = document.getElementById("clothes").value ;
        let total = parseFloat(food) + parseFloat(rent) + parseFloat(clothes) ;
        document.getElementById("result").innerText = total ;
    }



            btn.addEventListener("click", calculate, { once: true }) ;















            

                     
 
   
   
   
   










      

        

        

   
    
  




