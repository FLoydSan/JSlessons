/**
 * Created by Aleksandr on 6/18/2016.
 * От пользователя требуется ввести ФИО. Необходимо, чтобы сценарий проверил ввод пользователя на наличие недопустимых символов.
 * Недопустимыми символами считать любые символы, кроме букв, пробелов и точек. Эти символы можно задать в сценарии в виде строки.
 */
//Incomplete, To Be Done later

function simpleParse(mystr) {
    allowedChars = "abcdefghijklmnopqrstuvwxyz .";

    for (var i = 0; i < allowedChars.length; i++) {
        if (mystr.indexOf(allowedChars[i]) >= 0){
            continue;
        }
        else{
           break
        }
    }
}

var lastFirstName = prompt("Enter you first and last name:", "");

//if (simpleParse(lastFirstName) === true) alert("That is correct");
//else alert("Incorrect, try again");
alert(simpleParse(lastFirstName));