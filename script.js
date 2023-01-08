/**
 * RESTRICT FIELD TO NUMBERS AND ARITHMETIC OPERATORS
 */

const INPUT_FIELD = document.querySelector('#currentResult')

INPUT_FIELD.addEventListener('keydown', (e)=>{
    if (
        e.key == '0' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9' ||
        
        e.key == '/' ||
        e.key == '*' ||
        e.key == '-' ||
        e.key == '+' ||

        e.key == 'Backspace' ||
        e.key == 'Delete'
        ) {
            return
    } else {
        e.preventDefault()
    }
})

