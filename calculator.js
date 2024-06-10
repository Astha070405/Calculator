let btn = document.querySelectorAll('button');
let input = document.getElementById('enter');
btn.forEach(element =>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
        
        if(e.target.textContent === 'C'){
            input.innerText = " ";
        }
        else if(e.target.textContent === '='){
            input.innerText = eval(input.innerText);
        }
        else{
            input.innerText += e.target.textContent;
        }


    })
})