// let names = [];
// let numbers = [];

function getValue (fieldName) {
    return document.getElementById(fieldName).value;
}

function run() {
    const submitButton = document.getElementById('submitButton');
    // const bodyTable = document.getElementById('bodyTable');

    // function validate(name, number) {

    // }

    function renderTable(contacts) {
        const contactList = document.getElementById('bodyTable');
        contactList.innerHTML = "";
        contacts.forEach(
            ({ name, number }) => {
                contactList.innerHTML += 
                    `<tr>
                        <td>${name}</td>
                        <td>${number}</td>
                    </tr>`;
            }
        )
    }

    function readFormAndAddNewLine(){
        // const name = getValue('name');
        // const number = getValue('number');
        // const validationResults = validate(name, number);
        // error = { fieldName: null, message: 'Esse contato já existe'}
        // error = { fieldName: 'name', message: 'Já existe um contato com esse nome ....'}
        // // fieldName:name|null message
        // console.log({ name, number });
        const contacts = [
            {name: "João", number: "1111111"},
            {name: "Bruno", number: "22222222"},
            {name: "Paulo", number: "3333333"},
        ];
        renderTable(contacts)

    
        // document.getElementById('name').value = "";
        // document.getElementById('number').value = "";
    }
     
    //console.log(submitButton);
    submitButton.addEventListener('click', readFormAndAddNewLine)
}

run();










function printContact(names, numbers) {
    const contactList = document.getElementById('bodyTable');
    contactList.innerHTML += `<tr>
                        <td>${names[names.length - 1]}</td>
                        <td>${numbers[numbers.length -1]}</td>
                        </tr>`;
    const lastAddedContactIndex = bodyTable.children.length;
    const lastAddedContact = bodyTable.children[lastAddedContactIndex - 1];
    lastAddedContact.classList.add('lastAddedContact'); 
    const oneBeforeLastAddedContact = bodyTable.children[lastAddedContactIndex - 2];
    if (oneBeforeLastAddedContact !== undefined) {
        oneBeforeLastAddedContact.classList.remove('lastAddedContact');
    }
    return console.log(`O contato ${names[names.length - 1]} de número ${numbers[numbers.length -1]} foi adicionado com sucesso!`);
}

function getContact(names, numbers) {
    // const name = document.getElementById('name');
    // const number = document.getElementById('number');
    const errorMessage = document.getElementById('errormessage');
    switch(true) {
        // contato igual
        case names.includes(name.value) && numbers.includes(number.value):
            console.log('Esse contato já existe');
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `Esse contato já existe`;
            break;
        // nome igual e numero diferente
        case names.includes(name.value) && !numbers.includes(number.value):
            console.log(`Já existe um contato com esse nome ${name.value}`);
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `Já existe um contato com esse nome ${name.value}`;
            break;
        // nome diferente e numero igual
        case !names.includes(name.value) && numbers.includes(number.value):
            console.log(`Já existe um contato com esse número ${number.value}`);
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = `Já existe um contato com esse número ${number.value}`
            break;
        // default
        default :
            names.push(`${name.value}`);
            numbers.push(`${number.value}`);
            printContact(names, numbers);
            errorMessage.style.display = 'none';
    }
}




