/**
 * Created by Aleksandr on 6/17/2016.
 * Реализовать простейший вариант теста, поочередно выдавая пользователю вопросы, требующие односложных ответов ("Да" и "Нет").
 * После прохождения теста вывести результат. Вопросы и оценки за каждый вопрос хранить в сценарии в виде массивов.
 */
var questions = new Array();
questions[0] = "Do you learn programming ?";
questions[1] = "Do you want to be a software developer ?";
questions[2] = "Are you male ?";
questions[3] = "Are you female ?";

var answers = new Array();

for (var i = 0; i < questions.length; i++) {
    if (confirm(questions[i]) == true) {
        answers[i] = "Yes";
    }
    else answers[i] = "No"
}
for (var i = 0; i < questions.length; i++) {
    document.write("<b>" + questions[i] + "</b>" + " : " + answers[i] + "<br />")
}