function getPrevious(){
    return document.getElementById("previous-operand").innerText;
}

function printHistory(num){
    document.getElementById("previous-operand").innerText = num;
}

function getOutput(){
    return document.getElementById("current-operand").innerText;
}

function printOutput(num){
    document.getElementById("current-operand").innerText = num;
}

let operators = document.getElementsByClassName("red");
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            let output = getOutput().toString();
            if(output.length > 0){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }else{
            let output=getOutput();
            let previous=getPrevious();
            if(output!=''){
                previous += output;
                if(this.id == "="){
                    let result=eval(previous);
                    printOutput(result);
                    printHistory("");
                }else{
                    previous=previous+this.id;
                    printHistory(previous);
                    printOutput("");
                }
            }
        }
    });
}

let numbers = document.getElementsByClassName("number");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        let output = getOutput();
        if(output!=NaN){
            output += this.innerText;
            printOutput(output);
        }
    });
}
