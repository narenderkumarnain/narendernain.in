/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          light: '#121212',
          lighter: '#1a1a1a',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#a3a3a3',
          subtle: '#636363',
        },
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        border: '#2a2a2a',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground.muted'),
            maxWidth: 'none',
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.hover'),
              },
              textDecoration: 'none',
            },
            h1: {
              color: theme('colors.foreground.DEFAULT'),
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              color: theme('colors.foreground.DEFAULT'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              color: theme('colors.foreground.DEFAULT'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h4: {
              color: theme('colors.foreground.DEFAULT'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            blockquote: {
              color: theme('colors.foreground.muted'),
              borderLeftColor: theme('colors.border'),
              fontStyle: 'normal',
              fontWeight: '400',
              paddingLeft: '1em',
            },
            code: {
              color: theme('colors.foreground.muted'),
              backgroundColor: theme('colors.background.lighter'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            pre: {
              backgroundColor: theme('colors.background.lighter'),
              color: theme('colors.foreground.muted'),
              borderRadius: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              '&::before': {
                content: 'none',
              },
              '&::after': {
                content: 'none',
              },
            },
            strong: {
              color: theme('colors.foreground.DEFAULT'),
              fontWeight: '600',
            },
            hr: {
              borderColor: theme('colors.border'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            ul: {
              li: {
                '&::marker': {
                  color: theme('colors.primary.DEFAULT'),
                },
                marginTop: '0.5em',
                marginBottom: '0.5em',
              },
            },
            ol: {
              li: {
                '&::marker': {
                  color: theme('colors.primary.DEFAULT'),
                },
                marginTop: '0.5em',
                marginBottom: '0.5em',
              },
            },
            table: {
              width: '100%',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              thead: {
                borderBottomColor: theme('colors.border'),
                th: {
                  color: theme('colors.foreground.DEFAULT'),
                  fontWeight: '600',
                  padding: '0.75em',
                  textAlign: 'left',
                },
              },
              tbody: {
                tr: {
                  borderBottomColor: theme('colors.border'),
                  td: {
                    padding: '0.75em',
                  },
                },
              },
            },
            img: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              borderRadius: '0.5rem',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.foreground.muted'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.hover'),
              },
            },
            h1: {
              color: theme('colors.foreground.DEFAULT'),
            },
            h2: {
              color: theme('colors.foreground.DEFAULT'),
            },
            h3: {
              color: theme('colors.foreground.DEFAULT'),
            },
            h4: {
              color: theme('colors.foreground.DEFAULT'),
            },
            blockquote: {
              color: theme('colors.foreground.muted'),
              borderLeftColor: theme('colors.border'),
            },
            strong: {
              color: theme('colors.foreground.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 