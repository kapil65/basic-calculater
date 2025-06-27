
let input = document.getElementById('inputbox');
    let buttons = document.querySelectorAll('button');
    let string = "";

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerText;

            if (value === '=') {
                try {
                    string = eval(string);
                } catch (error) {
                    string = "Error";
                }
                input.value = string;
            } else if (value === 'AC') {
                string = "";
                input.value = string;
            } else if (value === 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                // Prevent multiple operators in a row
                if (['+', '-', '*', '/', '%', '.'].includes(value)) {
                    if (string === "" && value !== '-') return; // Only allow '-' at start
                    let lastChar = string[string.length - 1];
                    if (['+', '-', '*', '/', '%', '.'].includes(lastChar)) {
                        string = string.slice(0, -1);
                    }
                }
                string += value;
                input.value = string;
            }
        });
    });
