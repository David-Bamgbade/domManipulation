const buttonValue = document.querySelector(".button-num")
const inputValue = document.getElementById("input-c")

const buttonValues = document.querySelectorAll('.button-num')

buttonValues.forEach((stuff)=>{
    stuff.addEventListener('click', (option)=> {
             inputValue.value += option.target.textContent
        if(stuff.innerHTML === "del"){
            inputValue.value -= option.target.textContent
        }

        if(stuff.innerHTML === "+"){
            
           
        }       

       
     })
  

})


   