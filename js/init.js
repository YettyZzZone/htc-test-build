function init() {
    checkIE();
    clock();
}
//Функция, возвращающая текущее время
function clock() {
    var date = new Date();
    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
        + ' ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
        + ', ' + getWeekDay(date);
    //Находим объект clock и указываем в нем текущее время, дату и день недели
    document.getElementById('clock').innerHTML = time;
    //Устанавливаем таймаут для обновления страницы
    window.setTimeout(arguments.callee, 1000);

    //Функция для придания дню недели, получаемого из объекта Date, читаемого вида
    function getWeekDay(date) {
       var days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
       return days[date.getDay()];
    }
}
//Проверка на принадлежность браузера к IE
function checkIE() {
    var userAgent = window.navigator.userAgent;
    //Проверяем, есть ли в полученном значении userAgent значение, указывающее на IE (MSIE для старых версий, Trident для новых)
    var isIE = userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1;

    //Если браузер всё-таки IE
    if (isIE > 0) {
        alert("Вы используете не тот браузер");
        //После показа сообщения прекращаем загрузку страницы
        document.execCommand('Stop');
    }
}
