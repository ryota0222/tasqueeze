import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4174
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	use: {
		// スクリーンショットの保存を有効にします
		screenshot: 'only-on-failure', // 'on', 'off', 'only-on-failure' から選択
		// ビデオの保存を有効にします
		video: 'retain-on-failure', // 'on', 'off', 'retain-on-failure' から選択
		// トレースの保存を有効にします
		trace: 'on-first-retry' // 'on', 'off', 'retain-on-failure', 'on-first-retry' から選択
	},
	reporter: [
		['list'], // デフォルトのレポーター
		['html', { open: 'never' }] // HTMLレポートを生成
	]
};

export default config;
