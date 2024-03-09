var displayValue=document.getElementById('value');
var getValue=document.querySelectorAll('.btn');

for(item of getValue){
    item.addEventListener('click',function(e){
        let text=e.target.innerHTML;
        displayValue.value+=text;
    });
};
function backspace(){
    displayValue.value=displayValue.value.substr(0,displayValue.value.length-1);
};
function factorial(){
    var i,num,f;
    f=1;
    num=displayValue.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    displayValue.value=f;
};
function clearInput(){
    displayValue.value = '';
};

function sin(){
    displayValue.value=Math.sin(displayValue.value);
};
function pi(){
    displayValue.value=3.14159;
};
function cos(){
    displayValue.value=Math.cos(displayValue.value);
};
function log(){
    displayValue.value=Math.log(displayValue.value);
};
function tan(){
    displayValue.value=Math.tan(displayValue.value);
};
function sqrt(){
    displayValue.value=Math.sqrt(displayValue.value);

};
function e(){
    displayValue.value=2.718281;
};
function squre(){
    displayValue.value=Math.pow(displayValue.value,2);
};
function equal(){
    displayValue.value=eval(displayValue.value);
};
function radian(){
    var radian=displayValue.value;
    var answer=radian*(3.14/180);
    displayValue.value=answer;
};
function degree() {
    // Get the value from the input field
    var degree = parseFloat(displayValue.value);

    // Check if the input is a valid number
    if (isNaN(degree)) {    
        alert("Please enter a valid number");
        return;
    }

    // Perform the conversion to degrees
    var answer = degree * (180 / Math.PI);

    // Update the input field with the result
    displayValue.value = answer;
}

