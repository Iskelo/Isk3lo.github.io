document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		var error = formValidate(form);

		var formDate = new FormDate(form);

		if (error === 0) {
			form.classList.add('_sending');
			var response = await fetch('sendmail.php', {
				method: 'POST',
				body:  formDate
			});
			if (response.ok) {
				var result = await response.json();
				alert("result.message");
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert('ERROR!');
				form.classList.remove('_sending');
			}
		} else {
			alert("Error!");
		}
	}

	function formValidate(form) {
		var error = 0;
		var formReq = document.querySelectorAll('._req');
		for (var index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);


			if (input.classList.contains('_email')) {
				if (testEmail(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;

			} else {
				if (input.value == '') {
					formAddError(input);
					error++;
				}
			}

		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function testEmail(input) {
		return !/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});