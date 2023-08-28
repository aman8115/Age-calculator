
function agecaculate(){
    let userDate = new Date( document.getElementById("dateofbirth").value);
    let subbtn = document.getElementById("btn")
    let result = document.getElementById("result")
    const today = new Date()
    const age = today.getFullYear()-userDate.getFullYear();
    const monthDIff = today.getMonth()-userDate.getMonth();
    if( monthDIff < 0 ||(monthDIff === 0 && today.getDate() < userDate.getDate)){
        result.innerHTML = " your age is: " +(age-1)+ "years old";
    } else{
        result.innerHTML = "your age is " + age + "years";
    }



}


