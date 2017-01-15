var elements;
var LAST_ONE_EMPTY = 'empty';
var lastOne = LAST_ONE_EMPTY;

calculate = function (a1, a2, b1, b2) {
    var valued = '';

    if (a1 != '') { valued += '1'; }
    if (a2 != '') { valued += '2'; }
    if (b1 != '') { valued += '3'; }
    if (b2 != '') { valued += '4'; }

    if (lastOne !== LAST_ONE_EMPTY) {
        valued = lastOne;
    }

    if (valued.length > 2 && valued !== '1234') {
        switch (valued) {
            case '123':
                elements.B2.value = b1 * a2 / a1;
                break;
            case '124':
                elements.B1.value = b2 * a1 / a2;
                break;
            case '134':
                elements.A2.value = a1 * b2 / b1;
                break;
            case '234':
                elements.A1.value = a2 * b1 / b2;
                break;
        }
        lastOne = valued;
    }
};

initCalculation = function() {
    var clear = document.getElementById('delete');
    elements = {
        A1: document.getElementById('type-a-top'),
        A2: document.getElementById('type-a-bottom'),
        B1: document.getElementById('type-b-top'),
        B2: document.getElementById('type-b-bottom')
    };

    clear.onclick = function () {
        elements.A1.value = '';
        elements.A2.value = '';
        elements.B1.value = '';
        elements.B2.value = '';
        lastOne = LAST_ONE_EMPTY;
    };

    document.querySelector('body').onkeyup = function() {
        calculate(
            elements.A1.value,
            elements.A2.value,
            elements.B1.value,
            elements.B2.value
        );
    };
};

// Start the functions.
window.onload = function() {
    initCalculation();
};