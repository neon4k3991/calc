let input = document.getElementById("input")
input.value = 0
let num_txt = 0
let action = ""
let answ = 0
let signplus = document.getElementById("sign_plus")
let signminus = document.getElementById("sign_minus")
let digits = document.getElementsByClassName("digit")
let eq = document.getElementById("eq")
let enter_string = document.getElementById("enter_string")

let a 
let b
eq.addEventListener("click", sign_eq)
signplus.addEventListener("click", sign_plus)
signminus.addEventListener("click", sign_minus)
for (let x of digits){
    x.addEventListener("click", pressDigitButton)
}

function pressDigitButton(e){

    if (input.value === "0"){  
            if (e.target.id[1] !== 0){     
                input.value = ""
                input.value += e.target.id[1] 
            }
        }
        else {
            input.value += e.target.id[1]

        }
    enter_string.textContent += e.target.id[1] 
    
}
document.getElementById("clear_but").addEventListener("click", clear)
function clear() {
    location.reload() 
    }


 function sign_plus(event){
    if (a === undefined){
        a = Number(input.value)
    }
    else {
        b = Number(input.value)
    }
    action = "+"
    input.value = "0"
    enter_string.textContent += " + "
    
    

}

function sign_minus(event){
    

    
    a = Number(input.value)
    

    action = "-"
    input.value = "0"
    enter_string.textContent += " - "
    
}

function sign_eq(event){
    b = Number(input.value)

    if (action === "+"){
        num_txt = a + b
    }
    else if (action === "-"){
        num_txt = a - b
    }
    input.value = num_txt
    enter_string.textContent += ` = ${num_txt}`
}
