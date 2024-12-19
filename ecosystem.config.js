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
				NEXT_SITE_URL: 'http://217.114.5.89:3000',
				NEXT_EMAIL_USERNAME: 'mark.makarov191@gmail.com',
				NEXT_EMAIL_PASSWORD: 'uvrp matt zmyd htdm',
				NEXT_PERSONAL_EMAIL: 'newvision-lg@yandex.ru',
			},
		},
	],
}
