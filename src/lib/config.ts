const CONFIG = {
	api: import.meta.env['SVELTEKIT_API'] || 'https://blog.apiki.com/wp-json/wp/v2',
	env: import.meta.env['SVELTEKIT_ENV'] || 'production',
	url: import.meta.env['SVELTEKIT_URL'] || 'not-set'
};

export { CONFIG };
