// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@vueuse/nuxt"],

	app: {
		head: {
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
			],
			link: [{ rel: "icon", href: "/favicon.ico" }],

			htmlAttrs: {
				class: "h-full bg-white",
			},
			bodyAttrs: {
				class: "h-full bg-white",
			},
		},
		rootAttrs: {
			class: "h-full",
		},
	},

	ui: {
		safelistColors: ["pt-primary", "pt-secondary"],
		global: true,
		disableGlobalStyles: false,
	},

	colorMode: {
		disableTransition: true,
		preference: "light",
	},

	routeRules: {
		// Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
		"/": { prerender: true },
	},

	devtools: {
		enabled: true,
	},

	typescript: {
		strict: false,
	},

	future: {
		compatibilityVersion: 4,
	},

	compatibilityDate: "2024-09-04",
})
