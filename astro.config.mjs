// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	site: 'https://docs.rocketscheduler.app',
	integrations: [
		starlight({
			favicon: 'RS-favicon.png',
			title: 'Rocket Scheduler Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			tableOfContents:false,
			sidebar: [
				{
					label: 'Discord Bot Commands',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '/my-availability', slug: 'discord-bot-commands/my-availability' },
						{ label: '/my-tier', slug: 'discord-bot-commands/my-tier' },
						{ label: '/next-matchup', slug: 'discord-bot-commands/next-matchup' },
						{ label: '/lobby', slug: 'discord-bot-commands/lobby' },
						{ label: '/report', slug: 'discord-bot-commands/report' },
					],
				},
				{	
					label: 'User Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Adding the Discord Bot', slug: 'guides/adding-discord-bot' },
						{ label: 'Setting up a League', slug: 'guides/setting-up-a-league' },
					],
				},
				
			],
		}),
	],
});
