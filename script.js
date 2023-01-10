/**
 * RESTRICT FIELD TO NUMBERS AND ARITHMETIC OPERATORS
 */

const INPUT_FIELD = document.querySelector('#currentResult')

INPUT_FIELD.addEventListener('keydown', (e)=>{
    e.preventDefault()
})

/**
 * MAKING UI BUTTONS FUNCTIONALS
 */

let operatorPressed = false
let byMinusOne = false
let operationLength = 0

const NUMBER_BTN = Array.from(document.querySelectorAll('.numberBtn'))
const CLEAR_BTN = document.querySelector('#clear')    
const MISTERY = document.querySelector('#mistery')

NUMBER_BTN.forEach(btn => 
    btn.addEventListener('click', (e)=>{
        if (operationLength < 24) {
            INPUT_FIELD.value += `${e.target.dataset.value}`
            operatorPressed = false
            operationLength++
        }
    })
    )
    
    const OPERATOR_BTN = Array.from(document.querySelectorAll('.aOperators'))
    
    OPERATOR_BTN.forEach(btn => 
        btn.addEventListener('click', (e)=>{
            if (operationLength < 24) {
                if (!operatorPressed) {
                    INPUT_FIELD.value += `${e.target.dataset.value}`
                    operatorPressed = true
                    operationLength++
                } else{
                    INPUT_FIELD.value = INPUT_FIELD.value.substring(0, INPUT_FIELD.value.length - 1);
                    INPUT_FIELD.value += `${e.target.dataset.value}`
                }
                setCaretPosition(INPUT_FIELD, INPUT_FIELD.value.length);
            }
        })
        
        )
        
        const ALL_CLEAR_BTN = document.querySelector('#ac')    
        
ALL_CLEAR_BTN.addEventListener('click', ()=>{
    INPUT_FIELD.value = ''
    operationLength = 0
})

CLEAR_BTN.addEventListener('click', ()=>{
    INPUT_FIELD.value = INPUT_FIELD.value.substring(0, INPUT_FIELD.value.length - 1);
    operationLength--
})

MISTERY.addEventListener('click', ()=>{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})

/**
 * OPERATE NOW
 */