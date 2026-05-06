---
name: Midnight & Champagne
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#b6c6ed'
  on-tertiary: '#20304f'
  tertiary-container: '#061836'
  on-tertiary-container: '#7282a5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6ed'
  on-tertiary-fixed: '#091b39'
  on-tertiary-fixed-variant: '#374767'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 40px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is engineered for high-net-worth wealth management, where the UI must act as a silent partner to expertise. The brand personality is authoritative yet discreet, blending the heritage of traditional private banking with the precision of modern fintech. 

The aesthetic follows a **Minimalist-Premium** style. It utilizes high contrast between deep backgrounds and metallic accents to create a sense of exclusivity. Every pixel is intentional, favoring generous whitespace to reduce cognitive load, ensuring the advisor can focus on critical financial data without distraction. The emotional response is one of absolute security, institutional trust, and calm under market volatility.

## Colors

The palette is anchored by **Midnight Blue**, used as the primary canvas to establish depth and stability. **Champagne Gold** is reserved for high-value interactions, signaling success and guiding the eye to key performance indicators. 

- **Primary (#0A192F):** The foundational dark mode background.
- **Secondary (#C5A059):** Used for "Hero" actions, active states, and data highlights.
- **Tertiary (#112240):** A lighter navy for surface layering and card containers.
- **Accent (Success/Warning):** Emerald Green (#4ADE80) and Ruby (#FB7185) are used sparingly for market trends, desaturated to maintain the premium feel.
- **Neutrals:** Slate Grays are used for secondary text to ensure the gold accents remain the focal point.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Manrope** is used for headlines to provide a refined, modern architectural feel. **Inter** is utilized for body copy and data tables due to its exceptional legibility at small sizes and high "trust" factor.

For financial data, tabular lining figures should be enabled to ensure columns of numbers align perfectly. Use the `label-caps` style for section headers to evoke the feel of high-end editorial layouts.

## Layout & Spacing

The layout follows a **Fixed-Width Central Grid** (1440px max-width) to maintain control over line lengths and visual density. A strict 8px spatial grid governs all dimensions.

Generous padding is the hallmark of this design system; data is never "crammed." Use `stack-lg` to separate major logical sections (e.g., Portfolio Overview vs. Client List). Components within sections should use `stack-sm` or `stack-md` to maintain a tight, precise relationship.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than heavy shadows. 
- **Level 0 (Base):** Midnight Blue (#0A192F).
- **Level 1 (Cards/Panels):** Tertiary Blue (#112240) with a subtle 1px border (#1E2D48).
- **Level 2 (Popovers/Modals):** A slightly lighter blue with an **Ambient Shadow**: `0 20px 40px rgba(0,0,0,0.4)`.

Avoid high-glow effects. A subtle "inner glow" on primary buttons using a 10% opacity white border can simulate the sheen of high-quality material.

## Shapes

The design system utilizes **Soft** geometry. A 4px (0.25rem) base radius ensures the interface feels approachable without losing its professional, "engineered" edge. Large containers like main dashboard cards may use up to 8px (0.5rem), but never more. This restraint reinforces the precision required in financial services, avoiding the "bubbly" look of consumer social apps.

## Components

### Buttons
- **Primary:** Champagne Gold background with Midnight Blue text. No border.
- **Secondary:** Transparent background with a 1px Champagne Gold border and Gold text.
- **Ghost:** White text at 70% opacity, moving to 100% on hover.

### Cards
Cards are the primary container. They must feature a subtle top-border (2px) in Champagne Gold only if they represent "Summary" or "Total" metrics. Standard cards use the Tertiary Blue fill.

### Input Fields
Inputs should be "Minimalist-Underline" or fully enclosed with a dark stroke (#1E2D48). On focus, the border transitions to Champagne Gold with a very soft, 2px gold outer glow.

### Data Tables
Tables are high-density but clear. Use `label-caps` for headers. Rows should have a subtle hover state (#162744) to help the eye track across long data lines. No vertical grid lines; use horizontal dividers only.

### Performance Indicators
Sparklines and trend graphs should use a thin 2pt stroke. The "Gold" accent can be used for the current day's data point to highlight the "Now."