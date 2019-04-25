document.getElementById("computeInput").onclick = displayOutput;

function displayOutput() {
    let number = document.getElementById("number").value;
    let noun = document.getElementById("noun").value;
    let nounExceptions = [{
        one: 'sheep',
        many: 'sheep'
    }, {
        one: 'goose',
        many: 'geese'
    }, {
        one: 'fish',
        many: 'fish'
    }, {
        one: 'hippopotamus',
        many: 'hippopotami'
    }, {
        one: 'jellyfish',
        many: 'jellyfish'
    }, {
        one: 'fox',
        many: 'fox'
    }, {
        one: 'elk',
        many: 'elk'
    }, {
        one: 'person',
        many: 'people'
    }];

    console.log(`Passed number is: ${number}\nPassed noun is: ${noun}`);
    if (isNaN(number) || !isNaN(noun)) {
        alert('The input is wrong.');
    } else {
        number = Number.parseInt(number);

        if (number < 0) {
            alert('The input is wrong.');
            return;
        } else if (number !== 1) {
            let nounExceptionCheck = false;
            for (let i = 0; i < nounExceptions.length; i++) {
                if (nounExceptions[i].one === noun) {
                    nounExceptionCheck = true;
                    noun = nounExceptions[i].many;
                    break;
                }
            }
            if (!nounExceptionCheck) {
                noun +='s';
            }
        }
        document.getElementById('output').innerHTML = `${number} ${noun}`;
    }
}



















