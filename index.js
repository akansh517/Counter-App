// const countValue=document.querySelector('#counter');
// fetching can also be done by getElementById also 
const countValue=document.getElementById('counter');
// constant ek object / Element ko banaya hai  or hum jis par kam kar rahe hai vo ek value hai 
// countValue ek div vala element hai  or jo value hai jo es element ke  andar hai usko darsha rahi hai 

// using arrow fxn 
const increment=()=>{
    // get the value from ui 
    let value=parseInt(countValue.innerText); //countValue.innerText mujhe string value return krta hai usko int main krne ke liya parseInt() method use hota
    // update the value 
    value=value+1;
    // set the value on the ui 
    countValue.innerText=value;
};

// using normal fxn 
function decrement(){
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
};