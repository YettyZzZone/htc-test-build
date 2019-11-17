function validate(emailId, passwordId) {
	//счетчик количества ошибок
	var errorCount = 0;

	var email = getElementValue(emailId);
	validateEmail(email);

	var password = getElementValue(passwordId);
	validatePassword(password);

	if (errorCount) {
		return false;
	}
	return true;

	//Функция для получения элементов
	function getElementValue(id) {
		return document.getElementById(id).value;
	}
	//Функция для проверки e-mail
	function validateEmail(email) {
		var errorText = 'Введите корректный e-mail';
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(email) == false) {
			showError('error_email', errorText);
			errorCount++;
		}
	}
	//Функция для проверки пароля
	function validatePassword(password) {
		text = "Ошибка входа:<br>";

		var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
		var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
		var digits = "0123456789"; // Цифры
		var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
		var is_s = false; // Есть ли в пароле буквы в нижнем регистре
		var is_b = false; // Есть ли в пароле буквы в верхнем регистре
		var is_d = false; // Есть ли в пароле цифры
		var is_sp = false; // Есть ли в пароле спецсимволы

		//Проверяем длину пароля
		if (password.length < 6) {
			text += "\n - Длина пароля меньше 6 символов<br>";
			errorCount++;
		}

		for (var i = 0; i < password.length; i++) {
			// Проверяем каждый символ пароля на принадлежность к тому или иному типу
			if (s_letters.indexOf(password[i]) != -1) is_s = true;
			if (b_letters.indexOf(password[i]) != -1) is_b = true;
			if (digits.indexOf(password[i]) != -1) is_d = true;
			if (specials.indexOf(password[i]) != -1) is_sp = true;
		}
		//Конкатенируем текст ошибки в зависимости от того, какому условию не соответствует пароль
		if (is_s == false || is_b == false || is_d == false || is_sp == false) {
			if (is_s==false) text += "\n - В пароле отсутствуют буквы в нижнем регистре<br>"; //QWERTY1$
			if (is_b==false) text += "\n - В пароле отсутствуют буквы в верхнем регистре<br>"; //qwerty1$
			if (is_d==false) text += "\n - В пароле отсутствуют цифры<br>"; //qwertY$
			if (is_sp==false) text += "\n - В пароле отсутствуют спецсимволы<br>"; //qwertY1
			errorCount++;
		}
		if (errorCount) {
			showError('error_password', text);
		}
	}
	//Функция для вывода ошибок
	function showError(elementId, text) {
		var elMessage = document.getElementById(elementId);
		elMessage.innerHTML = text;
		elMessage.setAttribute('class', 'error');
	}
}
