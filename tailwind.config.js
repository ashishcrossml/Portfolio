/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			primary: 'hsl(var(--primary))',
  			'primary-foreground': 'hsl(var(--primary-foreground))',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
