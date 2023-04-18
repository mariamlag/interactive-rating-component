const submit = document.getElementById("button");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label")
const thank = document.getElementById("thank");
const container = document.getElementById("container");
const outputNumber = document.getElementById("number");
let check = false;


submit.addEventListener("click", () =>{
    if(!check){
        outputNumber.textContent = "0";
    }
    thank.style.display = "flex";
    container.style.display = "none"; 
 
});
inputs.forEach(input => {
    input.addEventListener("click", () => { 
        const parent = input.parentNode;
        check = true;
        console.log(check);
        labels.forEach(label => {
            if (label !== parent) {
                label.classList.remove("check-style");
            }
        });
        parent.classList.toggle("check-style", input.checked);
        if (input.checked) {
            outputNumber.textContent = input.value;
        }
        
    });
   
});





