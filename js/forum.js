import {extend} from 'flarum/extend';
import app from 'flarum/app';

import LogInModal from 'flarum/components/LogInModal';
import SignUpModal from 'flarum/components/SignUpModal';

function showPassword() {
	var x = document.getElementsByName("password")[0];
	var y = document.getElementById("therealsujitk-show-password");

	if(typeof x == "undefined" || typeof y == "undefined") {
		if(typeof y != "undefined") {
			var z = y.parentElement;
			if(z.tagName.toLowerCase() == "label") {
				z.style.display = "none";
			}
		}
		return;
	}

	if (y.checked == true) {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

app.initializers.add('therealsujitk/flarum-ext-show-password', () => {
	extend(LogInModal.prototype, 'fields', function (fields) {
		fields.add('therealsujitk-show-password',
			m('label.checkbox', [
				m('input', {
					type: 'checkbox',
					id: 'therealsujitk-show-password',
					config: () => {showPassword();},
					onclick: () => {showPassword();}
				}),
			app.translator.trans('therealsujitk.forum.show_password_label')]),
			20
		);
	});

	extend(SignUpModal.prototype, 'fields', function (fields) {
		fields.add('therealsujitk-show-password',
			m('label.checkbox[style = padding-bottom: 7px]', [
				m('input', {
					type: 'checkbox',
					id: 'therealsujitk-show-password',
					config: () => {showPassword();},
					onclick: () => {showPassword();}
				}),
			app.translator.trans('therealsujitk.forum.show_password_label')]),
			10
		);
	});
});
