import {extend} from 'flarum/extend';
import app from 'flarum/app';

import LogInModal from 'flarum/components/LogInModal'
import SignUpModal from 'flarum/components/SignUpModal';
import ChangeEmailModal from 'flarum/components/ChangeEmailModal'

function showPassword() {
  var x = document.getElementsByName("password")[0];
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

app.initializers.add('therealsujitk/flarum-ext-show-password', () => {
  extend(LogInModal.prototype, 'fields', function (fields) {
    fields.add('therealsujitk-show-password', m('label.checkbox', [
      m('input', {
        type: 'checkbox',
        onclick: () => {showPassword()}
      }),
      app.translator.trans('therealsujitk.forum.show_password_label')]),
      20
    );
  });

  extend(SignUpModal.prototype, 'fields', function (fields) {
    fields.add('therealsujitk-show-password', m('label.checkbox[style = padding-bottom: 7px]', [
      m('input', {
        type: 'checkbox',
        onclick: () => {showPassword()}
      }),
      app.translator.trans('therealsujitk.forum.show_password_label')]),
      10
    );
  });

  extend(ChangeEmailModal.prototype, 'fields', function (fields) {
    fields.add('therealsujitk-show-password', m('label.checkbox[style = padding-bottom: 7px]', [
      m('input', {
        type: 'checkbox',
        onclick: () => {showPassword()}
      }),
      app.translator.trans('therealsujitk.forum.show_password_label')])
    );
  });
});
