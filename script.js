function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function operate(expression) {
    let math_form_expression = expression
    math_form_expression = math_form_expression.replaceAll('÷', '/')
    math_form_expression = math_form_expression.replaceAll('x', '*')

    return new Function('return ' + math_form_expression)();
}

const numbers = document.querySelectorAll('body > div > div > div > button')

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        switch (number.value) {
            case '=':
                const expression = document.getElementById('calc-field').value
                document.getElementById('calc-field').value = operate(expression)
                break
            case 'C':
                document.getElementById('calc-field').value = '0'
                break
            case 'larr':
                const field_length = document.getElementById('calc-field').value.length

                if (field_length === 1) {
                    document.getElementById('calc-field').value = '0'
                }
                else if (document.getElementById('calc-field').value !== '0') {   
                    document.getElementById('calc-field').value = document.getElementById('calc-field').value.substring(0, field_length - 1)     
                }
                break
            default:
                if (document.getElementById('calc-field').value === '0') {
                    document.getElementById('calc-field').value = number.value
                }
                else {         
                    document.getElementById('calc-field').value += number.value 
                }
        }
    })
})

