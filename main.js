alert('This Web Was Developed By Dev Emma')
const clickBtn = document.querySelector('#guesserBtn')
let myArray = ["You feel stressed and tired"]
myArray[1] =  ["You are in love with someone"]
myArray[2]  = ["You feel awesome today."]
myArray[3]  = ["You feel Sick!"]
myArray[4]  = ["You feel hungry"]
myArray[5]  = ["You feel horny"]
myArray[6]  = ["You feel frustrated"]
myArray[7]  = ["You feel mad about something"]
myArray[8]  = ["You feel sad"]
myArray[9]  = ["You feel exhausted"]
myArray[10] = ["You feel nervous"]
myArray[11] = ["You feel Happy"]
myArray[12] = ["You feel Grateful"]
myArray[13] = ["You feel Sober"]
function getResult(){
    let m= Math.floor(Math.random() * myArray.length)
    let myPrompt = prompt('Kindly Enter Your Name Here') + "  ";
    let myFinalResult =   confirm(myPrompt +  myArray[m]);
    if(myFinalResult=== true){
        alert("Thanks for the trial")
    }else {
         confirm("Oops my bad i failed , want me to guess again?")
}
}
clickBtn.addEventListener('click',getResult())