
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': { 
						transform: 'translateX(-20px)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateX(0)', 
						opacity: '1' 
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				},
				'pulse-soft': {
					'0%, 100%': { 
						transform: 'scale(1)' 
					},
					'50%': { 
						transform: 'scale(1.05)' 
					}
				},
				'spin-slow': {
					to: { 
						transform: 'rotate(360deg)' 
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' 
					}
				},
				'blur-in': {
					'0%': { 
						filter: 'blur(5px)', 
						opacity: '0' 
					},
					'100%': { 
						filter: 'blur(0)', 
						opacity: '1' 
					}
				},
				'bounce-soft': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-5px)' 
					}
				},
				'rotate-bounce': {
					'0%': { 
						transform: 'rotate(0deg) translateY(0)' 
					},
					'25%': { 
						transform: 'rotate(3deg) translateY(-3px)' 
					},
					'75%': { 
						transform: 'rotate(-3deg) translateY(3px)' 
					},
					'100%': { 
						transform: 'rotate(0deg) translateY(0)' 
					}
				},
				'shimmer': {
					'0%': { 
						backgroundPosition: '-500px 0' 
					},
					'100%': { 
						backgroundPosition: '500px 0' 
					}
				},
				'scale-in-out': {
					'0%, 100%': { 
						transform: 'scale(1)' 
					},
					'50%': { 
						transform: 'scale(1.05)' 
					}
				},
				'slide-in-bottom': {
					'0%': { 
						transform: 'translateY(30px)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0)', 
						opacity: '1' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'blur-in': 'blur-in 0.7s ease-out',
				'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
				'rotate-bounce': 'rotate-bounce 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'scale-in-out': 'scale-in-out 3s ease-in-out infinite',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
				'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
				'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
				'highlight': '0 0 0 2px rgba(59, 130, 246, 0.3)',
				'inner-glow': 'inset 0 0 15px rgba(59, 130, 246, 0.2)',
				'3d': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
