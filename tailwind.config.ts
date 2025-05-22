
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
				},
				nature: {
					'forest': '#2D5016',
					'ocean': '#1E40AF',
					'sand': '#F4E4BC',
					'sunset': '#F59E0B',
					'earth': '#8B5A2B'
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
				'hero-fade': {
					'0%': { 
						opacity: '0',
						transform: 'scale(1.1) translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'slide-fade': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 25px rgba(245, 158, 11, 0.6)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 50px rgba(245, 158, 11, 0.9)',
						transform: 'scale(1.05)'
					}
				},
				'morph': {
					'0%': { 
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
					},
					'25%': { 
						borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%',
					},
					'50%': { 
						borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%',
					},
					'75%': { 
						borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%',
					},
					'100%': { 
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
					}
				},
				'reveal-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'card-hover': {
					'0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' }
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-500px 0'
					},
					'100%': {
						backgroundPosition: '500px 0'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'translateY(50px)',
						opacity: '0',
					},
					'60%': {
						transform: 'translateY(-10px)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(0)',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hero-fade': 'hero-fade 1.5s ease-out',
				'slide-fade': 'slide-fade 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'morph': 'morph 15s ease-in-out infinite',
				'reveal-up': 'reveal-up 1s ease-out',
				'card-hover': 'card-hover 0.3s ease-out forwards',
				'shimmer': 'shimmer 3s infinite',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
				'fade-in': 'fade-in 1s ease-out',
				'bounce-in': 'bounce-in 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
