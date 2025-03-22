
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0F0E17',
        'cyber-dark': '#1A1A2E',
        'cyber-blue': '#0A84FF',
        'cyber-purple': '#8A2BE2',
        'cyber-green': '#00FF9D',
        'cyber-pink': '#FF2E63',
        'cyber-light': '#FFFFFE',
      },
      fontFamily: {
        'sans': ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        'cyber': ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme("colors.cyber-blue"), 0 0 20px theme("colors.cyber-blue")',
        'neon-purple': '0 0 5px theme("colors.cyber-purple"), 0 0 20px theme("colors.cyber-purple")',
        'neon-green': '0 0 5px theme("colors.cyber-green"), 0 0 20px theme("colors.cyber-green")',
        'neon-pink': '0 0 5px theme("colors.cyber-pink"), 0 0 20px theme("colors.cyber-pink")',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        'text-glow': {
          '0%, 100%': { 
            'text-shadow': '0 0 10px theme("colors.cyber-blue"), 0 0 20px theme("colors.cyber-blue")',
          },
          '50%': { 
            'text-shadow': '0 0 5px theme("colors.cyber-blue"), 0 0 15px theme("colors.cyber-blue")',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'flicker': 'flicker 5s linear infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'cyber-grid': "url('/images/cyber-grid.png')",
        'tech-pattern': "linear-gradient(to right, rgba(10, 132, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10, 132, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
