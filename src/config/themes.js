/**
 * Theme system for the website
 * Each theme defines a complete color scheme
 * Updated to reflect the club logo's gold, navy, and cyan aesthetic
 */

export const themes = {
  logoGold: {
    name: 'Club Logo - Gold',
    colors: {
      accent: '#D4AF37',
      accentDark: '#B8941F',
      accentBright: '#FFD700',
      accentSubtle: 'rgba(212, 175, 55, 0.15)',
      cyan: '#00CED1',
      cyanBright: '#40E0D0',
      cyanSubtle: 'rgba(0, 206, 209, 0.2)',
      muted: '#8B9BB4',
      bg: '#0A1628',
      bgGradientStart: '#1A2942',
      bgGradientEnd: '#050D1A',
      card: '#152238',
      cardHover: '#1F2F4A',
      text: '#E8F0F8',
      textBright: '#FFFFFF',
      borderSubtle: 'rgba(212, 175, 55, 0.08)',
      borderMedium: 'rgba(212, 175, 55, 0.15)',
      borderAccent: 'rgba(212, 175, 55, 0.4)',
      borderCyan: 'rgba(0, 206, 209, 0.3)',
      bgOverlay: 'rgba(212, 175, 55, 0.05)',
      bgHover: 'rgba(212, 175, 55, 0.08)',
    }
  },
  
  logoCyan: {
    name: 'Club Logo - Cyan',
    colors: {
      accent: '#00CED1',
      accentDark: '#008B8B',
      accentBright: '#40E0D0',
      accentSubtle: 'rgba(0, 206, 209, 0.15)',
      cyan: '#D4AF37',
      cyanBright: '#FFD700',
      cyanSubtle: 'rgba(212, 175, 55, 0.2)',
      muted: '#8B9BB4',
      bg: '#0A1628',
      bgGradientStart: '#1A2942',
      bgGradientEnd: '#050D1A',
      card: '#152238',
      cardHover: '#1F2F4A',
      text: '#E8F0F8',
      textBright: '#FFFFFF',
      borderSubtle: 'rgba(0, 206, 209, 0.08)',
      borderMedium: 'rgba(0, 206, 209, 0.15)',
      borderAccent: 'rgba(0, 206, 209, 0.4)',
      borderCyan: 'rgba(212, 175, 55, 0.3)',
      bgOverlay: 'rgba(0, 206, 209, 0.05)',
      bgHover: 'rgba(0, 206, 209, 0.08)',
    }
  },
  
  original: {
    name: 'Classic Red',
    colors: {
      accent: '#CC4728',
      accentDark: '#a33820',
      accentSubtle: 'rgba(204, 71, 40, 0.1)',
      muted: '#94a3b8',
      bg: '#0a1628',
      bgGradientStart: '#20314D',
      bgGradientEnd: '#0a1628',
      card: '#1a2942',
      cardHover: '#20314D',
      text: '#f0f4f8',
      textBright: '#ffffff',
      borderSubtle: 'rgba(255, 255, 255, 0.06)',
      borderMedium: 'rgba(255, 255, 255, 0.08)',
      borderAccent: 'rgba(204, 71, 40, 0.2)',
      bgOverlay: 'rgba(32, 49, 77, 0.4)',
      bgHover: 'rgba(255, 255, 255, 0.03)',
    }
  },
  
  navyOrange: {
    name: 'Deep Navy',
    colors: {
      accent: '#CC4728',
      accentDark: '#a33820',
      accentSubtle: 'rgba(204, 71, 40, 0.08)',
      muted: '#94a3b8',
      bg: '#071024',
      bgGradientStart: '#0f172a',
      bgGradientEnd: '#050d1a',
      card: '#20314D',
      cardHover: '#2a3f5f',
      text: '#e6eef8',
      textBright: '#ffffff',
      borderSubtle: 'rgba(255, 255, 255, 0.08)',
      borderMedium: 'rgba(255, 255, 255, 0.10)',
      borderAccent: 'rgba(204, 71, 40, 0.25)',
      bgOverlay: 'rgba(32, 49, 77, 0.3)',
      bgHover: 'rgba(255, 255, 255, 0.04)',
    }
  },
  
  deepBlue: {
    name: 'Modern Dark',
    colors: {
      accent: '#CC4728',
      accentDark: '#a33820',
      accentSubtle: 'rgba(204, 71, 40, 0.12)',
      muted: '#a0aec0',
      bg: '#0d1520',
      bgGradientStart: '#1a2942',
      bgGradientEnd: '#0d1520',
      card: '#1f2d44',
      cardHover: '#253548',
      text: '#f0f4f8',
      textBright: '#ffffff',
      borderSubtle: 'rgba(255, 255, 255, 0.06)',
      borderMedium: 'rgba(255, 255, 255, 0.08)',
      borderAccent: 'rgba(204, 71, 40, 0.3)',
      bgOverlay: 'rgba(32, 49, 77, 0.35)',
      bgHover: 'rgba(255, 255, 255, 0.05)',
    }
  },
  
  light: {
    name: 'Clean Light',
    colors: {
      accent: '#CC4728',
      accentDark: '#a33820',
      accentSubtle: 'rgba(204, 71, 40, 0.06)',
      muted: '#64748b',
      bg: '#ffffff',
      bgGradientStart: '#f8fafc',
      bgGradientEnd: '#ffffff',
      card: '#f8fafc',
      cardHover: '#f1f5f9',
      text: '#0f172a',
      textBright: '#020617',
      borderSubtle: 'rgba(15, 23, 42, 0.06)',
      borderMedium: 'rgba(15, 23, 42, 0.10)',
      borderAccent: 'rgba(204, 71, 40, 0.2)',
      bgOverlay: 'rgba(32, 49, 77, 0.02)',
      bgHover: 'rgba(32, 49, 77, 0.04)',
    }
  },
  
  blueLight: {
    name: 'Soft Blue',
    colors: {
      accent: '#CC4728',
      accentDark: '#a33820',
      accentSubtle: 'rgba(204, 71, 40, 0.05)',
      muted: '#64748b',
      bg: '#f0f7fb',
      bgGradientStart: '#e6f2f8',
      bgGradientEnd: '#f5f9fc',
      card: '#ffffff',
      cardHover: '#f8fbfd',
      text: '#0a1628',
      textBright: '#050d1a',
      borderSubtle: 'rgba(32, 49, 77, 0.08)',
      borderMedium: 'rgba(32, 49, 77, 0.12)',
      borderAccent: 'rgba(204, 71, 40, 0.25)',
      bgOverlay: 'rgba(32, 49, 77, 0.03)',
      bgHover: 'rgba(32, 49, 77, 0.05)',
    }
  }
}

// Default theme
export const DEFAULT_THEME = 'original'

// Get current theme from localStorage or use default
export function getCurrentTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME
  return localStorage.getItem('theme') || DEFAULT_THEME
}

// Set theme and save to localStorage
export function setTheme(themeName) {
  if (typeof window === 'undefined') return
  
  const theme = themes[themeName] || themes[DEFAULT_THEME]
  
  // Apply CSS variables
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase()
    root.style.setProperty(cssVarName, value)
  })
  
  // Save to localStorage
  localStorage.setItem('theme', themeName)
}

// Initialize theme on page load
export function initTheme() {
  const themeName = getCurrentTheme()
  setTheme(themeName)
}
