import app from 'flarum/app';

app.initializers.add('therealsujitk-show-password', (app) => {
    const toggleMethods = {
        "checkbox": app.translator.trans('therealsujitk.admin.show_password_checkbox'),
        "icon": app.translator.trans('therealsujitk.admin.show_password_icon')
    };

    app.extensionData.for('therealsujitk-show-password')
        .registerSetting({
            setting: 'therealsujitk-show-password.toggle_method',
            type: 'select',
            options: toggleMethods,
            default: 'checkbox',
            label: app.translator.trans('therealsujitk.admin.show_password_type')
        })
});