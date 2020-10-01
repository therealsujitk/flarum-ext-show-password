import SettingsModal from 'flarum/components/SettingsModal';

export default class ShowPasswordSettingsModal extends SettingsModal {
	className() {
		return 'Modal--small';
	}

	title() {
		return app.translator.trans('therealsujitk.admin.show_password_title');
	}

	form() {
		return [
			m('div[class = Form-group]', [
				m('label', app.translator.trans('therealsujitk.admin.show_password_type')),
				m('select[style = width: 100%; margin-bottom: 5px;]', {
					bidi: this.setting('therealsujitk-show-password.toggle_method')
				}, [
					m('option', {value: 'checkbox', selected: true}, app.translator.trans('therealsujitk.admin.show_password_checkbox')),
					m('option', {value: 'icon'}, app.translator.trans('therealsujitk.admin.show_password_icon'))
				]),
				m('hr'), m('div', [
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringA')), m('a', { href: 'https://therealsuji.tk', target: '_blank' }, '@therealsujitk'), 
					m('br'),
					m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringB')), m('a', { href: 'https://therealsuji.tk/donate', target: '_blank' }, 'PayPal')
				])
			])
    	];
	}
}