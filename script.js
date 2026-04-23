var test = Number(prompt("Баллы за тест (0–50):"));
var homework = Number(prompt("Баллы за домашнее задание (0–30):"));
var attendance = Number(prompt("Баллы за посещаемость (0–20):"));

if (isNaN(test) || isNaN(homework) || isNaN(attendance)) {
    console.log("Ошибка: введены не числа");
} else if (test < 0 || homework < 0 || attendance < 0) {
    console.log("Ошибка: баллы не могут быть отрицательными");
} else if (test > 50) {
    console.log("Ошибка: баллы за тест не могут превышать 50");
} else if (homework > 30) {
    console.log("Ошибка: баллы за домашнее задание не могут превышать 30");
} else if (attendance > 20) {
    console.log("Ошибка: баллы за посещаемость не могут превышать 20");
} else {
    var total = test + homework + attendance;

    var grade;

    if (total >= 90) {
        grade = "Отлично";
    } else if (total >= 75) {
        grade = "Хорошо";
    } else if (total >= 60) {
        grade = "Удовлетворительно";
    } else {
        grade = "Неудовлетворительно";
    }

    console.log("Общий балл: " + total);
    console.log("Итоговая оценка: " + grade);
}