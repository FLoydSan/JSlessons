/**
 * Created by Aleksandr on 6/14/2016.
 * Пользуясь диалоговыми окнами, соберите о пользователе следующую информацию:
 * ФИО
 * пол
 * возраст
 * e-mail
 * Затем выведите собранную информацию в диалоговом окне "confirm" и задайте пользователю вопрос - "Все верно?":
 * Если пользователь согласен, поблагодарите его за предоставленную информацию, иначе - повторите процесс сбора информации.
 */

do {
var name = prompt('Enter your Surname and Name', 'Surname, Name');
var gender = prompt('Enter your gender', 'gender');
var age = prompt('Enter your age', 'age');
var email = prompt('Enter your e-mail', 'your@email.local');

var str = 'Your Name and Surname: '+name+'\n'+'Your gender: '+gender+'\n'+'Your age: '+age+'\n'+'Your E-mail: '+email+'\n\n'+'Is everything OK ?';
var result = confirm(str);
    
}while(!result);