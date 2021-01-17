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
                    oncreate: function(vnode) {
                        var x = document.getElementById("therealsujitk-show-password");
                        if(typeof x == "undefined") {
                            node.style.display = 'none';
                            return;
                        }

                        var toggleMethod = app.forum.attribute('therealsujitk-show-password.toggle_method');
                        if (toggleMethod === null || toggleMethod === '' || toggleMethod === 'checkbox') {
                            return;
                        }

                        var y = x.parentElement;
                        if(y.tagName.toLowerCase() == "label") {
                            y.style.display = "none";
                        }

                        var node = document.createElement('div');
                        node.innerHTML = '<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                        node.style = 'width: 50px; height: inherit; margin-left: -50px; padding: 0px; border: none; background: none; cursor: pointer;';
                        node.addEventListener("click", function(e) {
                            e.preventDefault();

                            if(x.checked == true) {
                                node.innerHTML = '<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                                x.checked = false;
                            } else {
                                node.innerHTML = '<i class="fas fa-eye" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                                x.checked = true;
                            }
                            
                            showPassword();
                        });
                        document.getElementsByName('password')[0].parentNode.style.display = '-webkit-box';
                        document.getElementsByName('password')[0].parentNode.append(node);

                        showPassword();
                    },
                    onclick: () => { showPassword(); }
                }),
            app.translator.trans('therealsujitk.forum.show_password_label')]),
            20
        );
    });

    extend(SignUpModal.prototype, 'fields', function (fields) {
        fields.add('therealsujitk-show-password',
            m('label.checkbox', [
                m('input', {
                    type: 'checkbox',
                    id: 'therealsujitk-show-password',
                    oncreate: function(vnode) {
                        var x = document.getElementById("therealsujitk-show-password");
                        if(typeof x == "undefined") {
                            node.style.display = 'none';
                            return;
                        }

                        var toggleMethod = app.forum.attribute('therealsujitk-show-password.toggle_method');
                        if (toggleMethod === null || toggleMethod === '' || toggleMethod === 'checkbox') {
                            return;
                        }

                        var y = x.parentElement;
                        if(y.tagName.toLowerCase() == "label") {
                            y.style.display = "none";
                        }

                        var node = document.createElement('div');
                        node.innerHTML = '<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                        node.style = 'width: 50px; height: inherit; margin-left: -50px; padding: 0px; border: none; background: none; cursor: pointer;';
                        node.addEventListener("click", function(e) {
                            e.preventDefault();

                            if(x.checked == true) {
                                node.innerHTML = '<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                                x.checked = false;
                            } else {
                                node.innerHTML = '<i class="fas fa-eye" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>';
                                x.checked = true;
                            }
                            
                            showPassword();
                        });
                        document.getElementsByName('password')[0].parentNode.style.display = '-webkit-box';
                        document.getElementsByName('password')[0].parentNode.append(node);

                        showPassword();
                    },
                    onclick: () => { showPassword(); }
                }),
            app.translator.trans('therealsujitk.forum.show_password_label')]),
            10
        );
    });
});
