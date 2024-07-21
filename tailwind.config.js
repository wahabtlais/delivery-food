/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#30b9b2",
					100: "#00fff53c",
				},
				secondary: {
					DEFAULT: "#ffa44f",
					100: "#ffe5db",
				},
				gray: {
					DEFAULT: "#83829A",
					100: "#C1C0C8",
				},
				white: {
					DEFAULT: "#FFFFFF",
					100: "#FAFAFC", //lightWhite
					200: "#F3F4F8", //offWhite
				},
				black: {
					DEFAULT: "#000",
					100: "#1E1E2D",
					200: "#232533",
				},
				red: "#e81e4d",
				green: " #00C135",
				tertiary: "#0078a6",
			},
			fontFamily: {
				pthin: ["Poppins-Thin", "sans-serif"],
				plight: ["Poppins-Light", "sans-serif"],
				pregular: ["Poppins-Regular", "sans-serif"],
				pmedium: ["Poppins-Medium", "sans-serif"],
				psemibold: ["Poppins-SemiBold", "sans-serif"],
				pbold: ["Poppins-Bold", "sans-serif"],
				pextrabold: ["Poppins-ExtraBold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
