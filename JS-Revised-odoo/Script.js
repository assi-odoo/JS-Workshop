let butn = document.getElementById("btn");
rand = Math.floor(Math.random() *11);
let output = document.querySelector('#out');
console.log(rand);
let left=0;
let chance = 5;

element = document.createElement('p');


    butn.addEventListener("click", () =>{
        --chance;
        console.log(chance);
        left++;
        let data = document.querySelector('#data').value;

        if(!data){ 
            alert("must enter number");
        }
        else if(data>rand){
            output.textContent = "Wrong.. its more less";
        }
        else if(data<rand){
            output.textContent = "Wrong.. it's greater than this number";
        }
        else{
            output.textContent = `Congrats it's ${rand}, guess it in ${left} attempts`;
        }

        let left_chance =document.getElementById('left_chance').textContent = `${chance} attempts Left`;
        
        if(chance==0){
            output.textContent = "you have exceed your limit  YOU LOSE";
            butn.disabled = true;
        }
    });
