
/// <reference path="../.astro/types.d.ts" />

export {};
declare global {
	interface Window {
		dataLayer: any[];
	}
	function gtag(...args: any[]): void;
}
