//get the values from UI
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
   
    if(Number.isInteger(startValue)&& Number.isInteger(startValue)){
        //calls createNumbers
    let numbers= createNumbers(startValue,endValue);
     //Calls the displayNumber Functions
    displayNumbers(numbers);
    }
    else{
        alert("You must enter integer!")
    }
    

}
//generate numbers from start value to the end value
function createNumbers(sValue, eValue){
    let numbers = [];
    for(let i=sValue; i<=eValue;i++ ){
       numbers.push(i);
    }
    return numbers;
}
//display the numbers and bold the even numbers
function displayNumbers(numbers){
    let templateRows = [];
    for(let i=0; i<numbers.length;i++ ){
       let number = numbers[i];
       if(number%2==0){
       templateRows += `<tr><td><b>${number}</b></td></tr>`;
       }
       else{
        templateRows += `<tr><td>${number}</td></tr>`;
       }
    }
    document.getElementById("results").innerHTML = templateRows;
}