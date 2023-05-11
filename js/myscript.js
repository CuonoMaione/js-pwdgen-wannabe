const userName = (prompt('Insert your Name'));

const userSurname = (prompt('Insert your surname'));

const userColor = (prompt("Insert your favorite color"))

const userCredentials = userName + userSurname + userColor + "21";

document.getElementById('credentials-content').innerHTML = userCredentials;