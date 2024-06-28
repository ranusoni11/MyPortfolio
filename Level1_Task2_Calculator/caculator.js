document.addEventListener('DOMContentLoaded', function(){
    const finalResult = document.getElementById('result');

    window.digitInput = function(digit) {
        finalResult.value += digit;
    }

    window.operatorInput = function(operator) {
        finalResult.value += '' + operator + '';
    }

    window.clearResult = function() {
        finalResult.value = '';
    }

    window.deleteDigit = function() {
        finalResult.value = finalResult.value.slice(0, -1);
    }

    window.calculate = function() {
        try {
            finalResult.value = eval(finalResult.value);
        } catch (e) {
            finalResult.value = 'Expression Error';
            setTimeout(() => {
                finalResult.value = ''
            }, 2000);
        }
    }
})
