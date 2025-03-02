module.exports = {
	apps: [
		{
			name: 'pywork',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: ['node_modules', '.next/cache'],
			env: {
				NEXT_APP_ENV: 'production',
				NEXT_SITE_URL: 'https://constructor.penalty.ru',
				NEXT_EMAIL_SMTP: 'smtp.beget.com',
				NEXT_EMAIL_USERNAME: 'constructor@penalty.ru',
				NEXT_EMAIL_PASSWORD: 'Koribla-1',
				NEXT_PERSONAL_EMAIL: 'mosyan.gurgen92@gmail.com',
			},
		},
	],
}
