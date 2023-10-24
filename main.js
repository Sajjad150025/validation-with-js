function selectOption() {
    const option = prompt("Select an option: email, phone, postcode :");
    if (option === null || option.trim() === "") {
        alert("Please provide a valid option.");
    } else {
        document.getElementById('inputData').setAttribute('data-option', option);
        document.getElementById('inputData').focus();
    }
}

function submitData() {
    const option = document.getElementById('inputData').getAttribute('data-option');
    const inputData = document.getElementById('inputData').value.trim();
    let regexPattern;

    switch (option) {
        case 'email':
            regexPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            break;
        case 'phone':
            regexPattern = /^\d{11}$/; 
            break;
        case 'postcode':
            regexPattern = /^\d{4}$/;
            break;
        default:
            alert("Invalid option.");
            return;
    }

  
    const isValid = regexPattern.test(inputData);

    const resultOutput = document.getElementById('result');
    if (isValid) {
        resultOutput.innerText = 'Valid ' + option;
        resultOutput.style.color = 'green';
    } else {
        resultOutput.innerText = 'Invalid ' + option;
        resultOutput.style.color = 'red';
    }
}

inputData.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        submitData();
    }
});
