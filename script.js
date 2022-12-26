/**
 * Operation function
 */

let operator //declaring operator as a variable

const operate = (num1, num2) => { //num1 and num2 gets evaluated and returned according to operator
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    
    if(isNaN(num1) || isNaN(num2)){
        return 'Please enter a number'
    }

    switch (operator) {
        case 'division':
            return num1 / num2

        case 'product':
            return num1 * num2
        
        case 'addition':
            return num1 + num2
        case 'substraction':
            return num1 - num2
        default:
            return 'Please choose a correct operation'
    }
}