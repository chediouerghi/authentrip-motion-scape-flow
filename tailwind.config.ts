
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
						transform: 'translateX(-50px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
						transform: 'scale(1.02)'
					}
				},
				'morph': {
					'0%': { 
						borderRadius: '20px',
						transform: 'rotate(0deg)'
					},
					'25%': { 
						borderRadius: '40px 20px',
						transform: 'rotate(1deg)'
					},
					'50%': { 
						borderRadius: '20px 40px',
						transform: 'rotate(-1deg)'
					},
					'75%': { 
						borderRadius: '40px 20px',
						transform: 'rotate(1deg)'
					},
					'100%': { 
						borderRadius: '20px',
						transform: 'rotate(0deg)'
					}
				},
				'reveal-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px) scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'card-hover': {
					'0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hero-fade': 'hero-fade 1.5s ease-out',
				'slide-fade': 'slide-fade 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'reveal-up': 'reveal-up 0.8s ease-out',
				'card-hover': 'card-hover 0.3s ease-out forwards'
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
