import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				sans: ["MuseoModerno", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"pt-primary": {
					"50": "#faf5ff",
					"100": "#f4e8ff",
					"200": "#ebd5ff",
					"300": "#dab4fe",
					"400": "#c184fc",
					"500": "#a855f7",
					"600": "#9133ea",
					"700": "#7a22ce",
					"800": "#6621a8",
					"900": "#531c87",
					"950": "#370764",
				},
				"pt-secondary": {
					"50": "#f3ffe6",
					"100": "#e5fec9",
					"200": "#cbfd99",
					"300": "#a4f755",
					"400": "#89ed2e",
					"500": "#68d30f",
					"600": "#4ea907",
					"700": "#3d800b",
					"800": "#32650f",
					"900": "#2c5512",
					"950": "#133003",
				},
			},
		},
	},
}
