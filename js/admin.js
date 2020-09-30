import app from 'flarum/app';
import ShowPasswordSettingsModal from './components/ShowPasswordSettingsModal';

app.initializers.add('therealsujitk/flarum-ext-show-password', () => {
	app.extensionSettings['therealsujitk-show-password'] = () => app.modal.show(new ShowPasswordSettingsModal());
});