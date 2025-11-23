# LexGrid Design System
## "Simplicity That Eliminates Risk"

---

# 1. Brand Foundation

## Core Brand Principles

1. **Precision Over Decoration**  
   Every element serves a functional purpose. No visual noise.

2. **Authority Through Restraint**  
   Confidence is shown through what we don't show, not what we add.

3. **Clarity Above All**  
   Information hierarchy is unambiguous. Users never question what's important.

4. **Institutional Trust**  
   Visual language that withstands scrutiny from regulators, auditors, and courts.

## Personality Keywords

- **Serious** — No playful elements, no casual tone
- **Precise** — Every measurement, every spacing, every color is intentional
- **Authoritative** — Commands respect through restraint
- **Confident** — Quiet power, not loud statements
- **Defensible** — Every design decision can be explained to a compliance officer

## Tone of Voice

**Written Communication:**
- Direct, declarative statements
- No marketing fluff or superlatives
- Technical accuracy over persuasion
- "We remove risk" not "We're the best at removing risk"

**Visual Communication:**
- Clean lines, no decorative flourishes
- Monochrome with strategic color accents
- Generous whitespace
- Typography that reads like legal documents (serif for authority)

## Visual Metaphor

**"The Courtroom Brief"**

Imagine a perfectly formatted legal brief:
- Crisp, serif typography
- Generous margins
- Clear hierarchy
- No unnecessary decoration
- Every element has purpose
- Professional, timeless, authoritative

## Why This System Exists

This design system exists to ensure that every interface element reinforces trust, reduces cognitive load, and eliminates ambiguity. In high-stakes environments where a single missing email can change legal outcomes, the interface must be:

- **Predictable** — Users never wonder where things are
- **Unambiguous** — Every state is clear
- **Defensible** — Design decisions can be audited
- **Timeless** — Won't look dated in 5 years

## Visual Moodboard

```
┌─────────────────────────────────────────────────────────────┐
│  MOOD 1: Institutional Authority                            │
│                                                             │
│  ████████████  Deep Navy Foundation                        │
│  ░░░░░░░░░░░░  Generous Whitespace                         │
│  ────────────  Thin, Precise Lines                        │
│  Times New Roman  Serif Authority                           │
│                                                             │
│  "Every element earns its place"                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MOOD 2: Enterprise Confidence                             │
│                                                             │
│  ╔═══════════╗  Structured Containers                      │
│  ║           ║  Clear Boundaries                           │
│  ║  Content  ║  Hierarchical Information                  │
│  ║           ║  No Decorative Elements                     │
│  ╚═══════════╝                                             │
│                                                             │
│  "Structure creates trust"                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MOOD 3: Quiet Power                                       │
│                                                             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓  Subtle Depth                                │
│  ▒▒▒▒▒▒▒▒▒▒▒▒  Layered Information                         │
│  ░░░░░░░░░░░░  Minimal Contrast                            │
│                                                             │
│  "Power through restraint"                                 │
└─────────────────────────────────────────────────────────────┘
```

---

# 2. Color System

## Brand Primary Colors

### Deep Blue (Primary)
- **Hex:** `#0B1F36`
- **RGB:** `rgb(11, 31, 54)`
- **Usage:** Primary actions, headings, key UI elements
- **Meaning:** Authority, trust, depth

```
┌─────────┐
│         │
│ #0B1F36 │
│         │
└─────────┘
```

### Accent Blue (Secondary)
- **Hex:** `#123B63`
- **RGB:** `rgb(18, 59, 99)`
- **Usage:** Secondary actions, accents, hover states
- **Meaning:** Refinement, precision

```
┌─────────┐
│         │
│ #123B63 │
│         │
└─────────┘
```

## Neutrals Set

### Gray Scale

```
Gray 100: #F4F6F8  ░░░░░░░░░░  Backgrounds, subtle fills
Gray 200: #E1E5EA  ░░░░░░░░░░  Borders, dividers
Gray 400: #C9CED6  ▒▒▒▒▒▒▒▒▒▒  Disabled states, subtle text
Gray 700: #6C717C  ▓▓▓▓▓▓▓▓▓▓  Secondary text, labels
Gray 900: #3B4250  ██████████  Body text, primary content
Soft Black: #1A1A1A  ██████████  Headings, emphasis
```

**Visual Swatch Table:**

```
┌──────┬──────────┬──────────────┬─────────────────────┐
│ Name │   Hex     │   Usage      │   Visual             │
├──────┼──────────┼──────────────┼─────────────────────┤
│ G100 │ #F4F6F8   │ Backgrounds  │ ░░░░░░░░░░░░░░░░░░ │
│ G200 │ #E1E5EA   │ Borders      │ ░░░░░░░░░░░░░░░░░░ │
│ G400 │ #C9CED6   │ Disabled     │ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ G700 │ #6C717C   │ Labels       │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ G900 │ #3B4250   │ Body Text    │ ██████████████████ │
│ Black │ #1A1A1A  │ Headings     │ ██████████████████ │
└──────┴──────────┴──────────────┴─────────────────────┘
```

## Supporting Colors

### Success
- **Hex:** `#2D5016`
- **Usage:** Success states, confirmations
- **Visual:** `██████████` (Dark green, muted)

### Warning
- **Hex:** `#8B6914`
- **Usage:** Warnings, cautions
- **Visual:** `██████████` (Dark amber, muted)

### Danger
- **Hex:** `#A33131`
- **Usage:** Errors, critical alerts
- **Visual:** `██████████` (Deep red, muted)

## Background Layers

```
Layer 0 (Base):    #FFFFFF  ░░░░░░░░░░  Pure white
Layer 1 (Subtle):  #F4F6F8  ░░░░░░░░░░  Section backgrounds
Layer 2 (Elevated): #FAFBFC  ░░░░░░░░░░  Card backgrounds
```

## Border Colors

```
Default:    #E1E5EA  ░░░░░░░░░░  Standard borders
Subtle:     #F4F6F8  ░░░░░░░░░░  Very light dividers
Emphasis:   #C9CED6  ▒▒▒▒▒▒▒▒▒▒  Stronger borders
```

## Focus/Selection Colors

```
Focus Ring:     #123B63  ██████████  Accent blue, 2px solid
Selection:      rgba(18, 59, 99, 0.1)  Light blue tint
Active State:   #0B1F36  ██████████  Deep blue
```

## CSS Variables

```css
:root {
  /* Brand Primary */
  --color-deep-blue: #0B1F36;
  --color-accent-blue: #123B63;
  
  /* Neutrals */
  --color-gray-100: #F4F6F8;
  --color-gray-200: #E1E5EA;
  --color-gray-400: #C9CED6;
  --color-gray-700: #6C717C;
  --color-gray-900: #3B4250;
  --color-soft-black: #1A1A1A;
  
  /* Supporting */
  --color-success: #2D5016;
  --color-warning: #8B6914;
  --color-danger: #A33131;
  
  /* Backgrounds */
  --color-bg-base: #FFFFFF;
  --color-bg-subtle: #F4F6F8;
  --color-bg-elevated: #FAFBFC;
  
  /* Borders */
  --color-border-default: #E1E5EA;
  --color-border-subtle: #F4F6F8;
  --color-border-emphasis: #C9CED6;
  
  /* Interactive */
  --color-focus: #123B63;
  --color-selection: rgba(18, 59, 99, 0.1);
  --color-active: #0B1F36;
}
```

---

# 3. Typography System

## Type Scale

### Display / H1
- **Font:** `"Times New Roman", "Times", serif`
- **Weight:** `700` (Bold)
- **Size:** `44px`
- **Line Height:** `52px`
- **Letter Spacing:** `-0.02em`
- **Usage:** Hero headlines, primary page titles
- **Sample:**

```
┌─────────────────────────────────────────┐
│                                         │
│  Simplicity That Eliminates Risk        │
│                                         │
└─────────────────────────────────────────┘
```

### H2
- **Font:** `"Times New Roman", "Times", serif`
- **Weight:** `700` (Bold)
- **Size:** `26px`
- **Line Height:** `32px`
- **Letter Spacing:** `0`
- **Usage:** Section headings, major content divisions
- **Sample:**

```
┌─────────────────────────────────────────┐
│                                         │
│  Built for firms that cannot afford    │
│  missing emails.                        │
│                                         │
└─────────────────────────────────────────┘
```

### H3
- **Font:** `"Times New Roman", "Times", serif`
- **Weight:** `700` (Bold)
- **Size:** `18px`
- **Line Height:** `24px`
- **Letter Spacing:** `0`
- **Usage:** Subsection headings, card titles
- **Sample:**

```
┌─────────────────────────────────────────┐
│                                         │
│  Automated by default                   │
│                                         │
└─────────────────────────────────────────┘
```

### H4
- **Font:** `"Times New Roman", "Times", serif`
- **Weight:** `600` (Semi-bold)
- **Size:** `16px`
- **Line Height:** `22px`
- **Letter Spacing:** `0`
- **Usage:** Minor headings, list titles

### Body Large
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `400` (Regular)
- **Size:** `16px`
- **Line Height:** `24px`
- **Letter Spacing:** `0`
- **Usage:** Important body text, lead paragraphs

### Body Medium
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `400` (Regular)
- **Size:** `14px`
- **Line Height:** `22px`
- **Letter Spacing:** `0`
- **Usage:** Standard body text, default content

### Body Small
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `400` (Regular)
- **Size:** `13px`
- **Line Height:** `20px`
- **Letter Spacing:** `0`
- **Usage:** Secondary content, helper text

### Caption
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `400` (Regular)
- **Size:** `12px`
- **Line Height:** `18px`
- **Letter Spacing:** `0`
- **Usage:** Image captions, metadata

### Eyebrow / Overline
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `500` (Medium)
- **Size:** `12px`
- **Line Height:** `16px`
- **Letter Spacing:** `0.16em` (Uppercase)
- **Usage:** Section labels, category headers
- **Sample:** `EMAIL INTEGRITY FOR SALESFORCE`

### UI / Nav
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `500` (Medium)
- **Size:** `12px`
- **Line Height:** `16px`
- **Letter Spacing:** `0.16em` (Uppercase)
- **Usage:** Navigation links, button labels

### Labels
- **Font:** `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`
- **Weight:** `600` (Semi-bold)
- **Size:** `11px`
- **Line Height:** `16px`
- **Letter Spacing:** `0.08em` (Uppercase)
- **Usage:** Form labels, small badges

## Typography CSS Variables

```css
:root {
  /* Display / H1 */
  --font-display-family: "Times New Roman", "Times", serif;
  --font-display-size: 44px;
  --font-display-line-height: 52px;
  --font-display-weight: 700;
  --font-display-letter-spacing: -0.02em;
  
  /* H2 */
  --font-h2-family: "Times New Roman", "Times", serif;
  --font-h2-size: 26px;
  --font-h2-line-height: 32px;
  --font-h2-weight: 700;
  
  /* H3 */
  --font-h3-family: "Times New Roman", "Times", serif;
  --font-h3-size: 18px;
  --font-h3-line-height: 24px;
  --font-h3-weight: 700;
  
  /* Body */
  --font-body-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-body-size: 14px;
  --font-body-line-height: 22px;
  --font-body-weight: 400;
  
  /* UI */
  --font-ui-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-ui-size: 12px;
  --font-ui-line-height: 16px;
  --font-ui-weight: 500;
  --font-ui-letter-spacing: 0.16em;
}
```

---

# 4. Spacing & Layout System

## Baseline Grid

**4px baseline grid** — All spacing values are multiples of 4px.

## Spacing Scale

```
4px   ░    Micro spacing, tight elements
8px   ░░   Tight spacing, icon padding
12px  ░░░  Compact spacing
16px  ░░░░ Standard spacing
20px  ░░░░░ Component padding
24px  ░░░░░░ Section padding
32px  ░░░░░░░░ Medium spacing
40px  ░░░░░░░░░ Large spacing
48px  ░░░░░░░░░░ Section gaps
64px  ░░░░░░░░░░░░░ Major spacing
80px  ░░░░░░░░░░░░░░ Hero spacing
```

## Container Widths

```
Desktop:  1120px  ┌────────────────────────────────────────┐
Tablet:   768px   ┌──────────────────────┐
Mobile:    100%   ┌──────────────────────┐
                  (with 24px padding)
```

## Page Frame

```
┌─────────────────────────────────────────────────────────┐
│  Desktop (1440px frame)                                 │
│                                                          │
│  ┌──────────────────────────────────────────┐           │
│  │  Container: 1120px                      │           │
│  │  Padding: 24px each side                 │           │
│  │                                          │           │
│  │  Content Area: 1072px                   │           │
│  └──────────────────────────────────────────┘           │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌──────────────────────────────┐
│  Tablet (768px)              │
│  ┌──────────────────────┐    │
│  │  Container: 100%     │    │
│  │  Padding: 24px       │    │
│  └──────────────────────┘    │
└──────────────────────────────┘

┌──────────────────────┐
│  Mobile (100%)       │
│  ┌────────────────┐  │
│  │  Padding: 16px │  │
│  └────────────────┘  │
└──────────────────────┘
```

## Elevation System

```
Level 0:  No shadow
          ┌─────────┐
          │ Content │
          └─────────┘

Level 1:  box-shadow: 0 1px 3px rgba(11, 31, 54, 0.05)
          ┌─────────┐
          │ Content │
          └─────────┘
          ░░░░░░░░░░

Level 2:  box-shadow: 0 4px 12px rgba(11, 31, 54, 0.08)
          ┌─────────┐
          │ Content │
          └─────────┘
          ░░░░░░░░░░░░

Level 3:  box-shadow: 0 8px 24px rgba(11, 31, 54, 0.12)
          ┌─────────┐
          │ Content │
          └─────────┘
          ░░░░░░░░░░░░░░

Level 4:  box-shadow: 0 12px 32px rgba(11, 31, 54, 0.16)
          ┌─────────┐
          │ Content │
          └─────────┘
          ░░░░░░░░░░░░░░░░
```

## Grid System

**12-column grid (conceptual, implemented with CSS Grid/Flexbox):**

```
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│ 1│ 2│ 3│ 4│ 5│ 6│ 7│ 8│ 9│10│11│12│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

Example: 2-column layout
┌──────────┬──────────┐
│   Col 1  │   Col 2  │
│  (50%)   │  (50%)   │
└──────────┴──────────┘

Example: 3-column layout
┌──────┬──────┬──────┐
│ Col1 │ Col2 │ Col3 │
│(33%) │(33%) │(33%) │
└──────┴──────┴──────┘
```

## Spacing CSS Variables

```css
:root {
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  
  /* Container */
  --container-width: 1120px;
  --container-padding: 24px;
  
  /* Elevation */
  --elevation-1: 0 1px 3px rgba(11, 31, 54, 0.05);
  --elevation-2: 0 4px 12px rgba(11, 31, 54, 0.08);
  --elevation-3: 0 8px 24px rgba(11, 31, 54, 0.12);
  --elevation-4: 0 12px 32px rgba(11, 31, 54, 0.16);
}
```

---

# 5. Components Library

## Foundations

### Button Primary

**Visual:**
```
┌─────────────────────────────┐
│  REQUEST 15-MIN DEMO        │
└─────────────────────────────┘
███████████████████████████████
```

**HTML:**
```html
<button class="btn btn-primary">REQUEST 15-MIN DEMO</button>
```

**CSS:**
```css
.btn {
  padding: 0 22px;
  height: 40px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: var(--font-ui-family);
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-accent-blue) 100%);
  border-color: var(--color-deep-blue);
  color: var(--color-bg-base);
  box-shadow: var(--elevation-2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-deep-blue) 100%);
  box-shadow: var(--elevation-3);
  transform: translateY(-1px);
}
```

**Spacing:** 16px gap between buttons

**Dos:**
- Use for primary actions
- Maximum 2 primary buttons per section
- Always uppercase text

**Don'ts:**
- Don't use more than 2 primary buttons together
- Don't use for secondary actions
- Don't use lowercase text

---

### Button Secondary

**Visual:**
```
┌─────────────────────────────┐
│  VIEW SECURITY PACKET       │
└─────────────────────────────┘
┌─────────────────────────────┐
```

**CSS:**
```css
.btn-secondary {
  background-color: var(--color-bg-base);
  border-color: var(--color-border-default);
  color: var(--color-soft-black);
}

.btn-secondary:hover {
  border-color: var(--color-accent-blue);
  color: var(--color-accent-blue);
  box-shadow: var(--elevation-1);
  transform: translateY(-1px);
}
```

---

### Input Field

**Visual:**
```
┌─────────────────────────────────────┐
│ Email Address                       │
├─────────────────────────────────────┤
│                                     │
└─────────────────────────────────────┘
```

**HTML:**
```html
<div class="input-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" placeholder="name@firm.com">
</div>
```

**CSS:**
```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.input-group label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gray-700);
}

.input-group input,
.input-group textarea {
  padding: 12px 16px;
  border: 1px solid var(--color-border-default);
  background-color: var(--color-bg-base);
  font-size: 14px;
  font-family: var(--font-body-family);
  color: var(--color-soft-black);
  transition: all 0.2s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 2px var(--color-selection);
}
```

---

### Checkbox

**Visual:**
```
☐  I agree to the terms and conditions
☑  Email me updates
```

**HTML:**
```html
<label class="checkbox">
  <input type="checkbox" name="agree">
  <span>I agree to the terms and conditions</span>
</label>
```

**CSS:**
```css
.checkbox {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
}

.checkbox input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border: 1px solid var(--color-border-default);
  cursor: pointer;
}

.checkbox input[type="checkbox"]:checked {
  background-color: var(--color-deep-blue);
  border-color: var(--color-deep-blue);
}
```

---

## Layout Components

### Section Container

**Visual:**
```
┌─────────────────────────────────────────────┐
│                                             │
│  [Content Area: 1120px max-width]          │
│  Padding: 24px each side                   │
│                                             │
└─────────────────────────────────────────────┘
```

**HTML:**
```html
<section class="section">
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

**CSS:**
```css
.section {
  padding: var(--spacing-20) 0;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}
```

---

### Card

**Visual:**
```
┌─────────────────────────────┐
│                             │
│  Card Title                 │
│                             │
│  Card content goes here...  │
│                             │
└─────────────────────────────┘
```

**HTML:**
```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-content">Card content goes here...</p>
</div>
```

**CSS:**
```css
.card {
  background: linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%);
  border: 1px solid var(--color-border-default);
  padding: var(--spacing-8);
  box-shadow: var(--elevation-2);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--elevation-3);
  transform: translateY(-2px);
}
```

---

## Navigation Components

### Header

**Visual:**
```
┌─────────────────────────────────────────────────────┐
│  [LG] LEXGRID    PRINCIPLE  SECURITY  FOR LAW FIRMS │
└─────────────────────────────────────────────────────┘
```

**HTML:**
```html
<header class="header">
  <div class="header-content">
    <div class="logo">
      <div class="logo-mark"></div>
      <div class="logo-text">LEXGRID</div>
    </div>
    <nav>
      <ul class="nav">
        <li><a href="#principle">PRINCIPLE</a></li>
        <li><a href="#security">SECURITY</a></li>
        <li><a href="#use-cases">FOR LAW FIRMS</a></li>
      </ul>
    </nav>
  </div>
</header>
```

**CSS:**
```css
.header {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border-default);
  z-index: 1000;
  padding: var(--spacing-5) 0;
  box-shadow: var(--elevation-1);
}

.header-content {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.logo-mark {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-accent-blue) 100%);
  box-shadow: var(--elevation-2);
}

.nav {
  display: flex;
  gap: var(--spacing-8);
  list-style: none;
}

.nav a {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-gray-700);
  text-decoration: none;
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--color-soft-black);
}
```

---

### Footer

**Visual:**
```
┌─────────────────────────────────────────────────────┐
│  © 2025 LexGrid Technologies.  Security · Contact   │
└─────────────────────────────────────────────────────┘
```

**HTML:**
```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-text">© 2025 LexGrid Technologies. All rights reserved.</div>
      <ul class="footer-links">
        <li><a href="#security">Security</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>
```

**CSS:**
```css
.footer {
  border-top: 1px solid var(--color-border-default);
  padding: var(--spacing-6) 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text,
.footer-links a {
  font-size: 11px;
  color: var(--color-gray-700);
}

.footer-links {
  display: flex;
  gap: var(--spacing-6);
  list-style: none;
}
```

---

## Content Components

### Hero Block

**Visual:**
```
┌─────────────────────────────────────────────────────┐
│  EMAIL INTEGRITY FOR SALESFORCE                    │
│                                                     │
│  Simplicity that eliminates risk.                  │
│                                                     │
│  We remove manual email logging...                 │
│                                                     │
│  [REQUEST DEMO]  [VIEW SECURITY]                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**HTML:**
```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-left">
        <div class="eyebrow">EMAIL INTEGRITY FOR SALESFORCE</div>
        <h1>Simplicity that eliminates risk.</h1>
        <p class="hero-subheadline">We remove manual email logging...</p>
        <div class="hero-ctas">
          <a href="#" class="btn btn-primary">REQUEST 15-MIN DEMO</a>
          <a href="#" class="btn btn-secondary">VIEW SECURITY PACKET</a>
        </div>
      </div>
      <div class="hero-right">
        <!-- Diagram or visual -->
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.hero {
  padding: var(--spacing-20) 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 50%, #F4F6F8 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
}

.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-accent-blue);
  margin-bottom: var(--spacing-4);
}
```

---

### Pillars Section (3-Column)

**Visual:**
```
┌──────────────┬──────────────┬──────────────┐
│  [Icon]      │  [Icon]      │  [Icon]      │
│  Title 1     │  Title 2     │  Title 3     │
│  Content...  │  Content...  │  Content...  │
└──────────────┴──────────────┴──────────────┘
```

**HTML:**
```html
<div class="pillars">
  <div class="pillar">
    <div class="pillar-icon"></div>
    <div class="pillar-title">Automated by default</div>
    <p class="pillar-text">No "Log to Salesforce" buttons...</p>
  </div>
  <!-- Repeat for 2 more pillars -->
</div>
```

**CSS:**
```css
.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  margin-top: var(--spacing-12);
}

.pillar {
  border-top: 1px solid var(--color-border-default);
  padding-top: var(--spacing-8);
}

.pillar-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-accent-blue) 100%);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--elevation-2);
}
```

---

### Comparison Cards

**Visual:**
```
┌──────────────────────┬──────────────────────┐
│  Typical Solutions   │  This Platform       │
│                      │                      │
│  • Item 1 [RISK]     │  • Item 1 [COMPLETE] │
│  • Item 2 [FRAGILE]  │  • Item 2 [STABLE]   │
└──────────────────────┴──────────────────────┘
```

**HTML:**
```html
<div class="comparison-cards">
  <div class="comparison-card">
    <div class="card-label">Typical solutions</div>
    <h3 class="card-title">Plugins, extensions...</h3>
    <div class="comparison-item">
      <span>Manual logging</span>
      <span class="badge badge-risk">RISK</span>
    </div>
  </div>
  <div class="comparison-card">
    <div class="card-label">This platform</div>
    <h3 class="card-title">End-to-end...</h3>
    <div class="comparison-item">
      <span>100% capture</span>
      <span class="badge badge-positive">COMPLETE</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.comparison-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
}

.comparison-card {
  background: linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%);
  border: 1px solid var(--color-border-default);
  padding: var(--spacing-10);
  box-shadow: var(--elevation-2);
}

.comparison-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-danger);
}

.comparison-card:last-child::before {
  background-color: var(--color-deep-blue);
}
```

---

### Security Strip (Dark Section)

**Visual:**
```
███████████████████████████████████████████████████
│  Security that can stand in front of a regulator │
│                                                   │
│  • AES-256-GCM encryption                         │
│  • Strict outbound allowlist                     │
│  • Immutable audit logging                       │
███████████████████████████████████████████████████
```

**HTML:**
```html
<section class="security-strip">
  <div class="container">
    <div class="security-content">
      <div>
        <h2 class="security-title">Security that can stand...</h2>
        <p class="security-body">We treat every email...</p>
      </div>
      <div>
        <ul class="security-list">
          <li>AES-256-GCM encryption</li>
          <li>Strict outbound allowlist</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.security-strip {
  background: linear-gradient(135deg, var(--color-deep-blue) 0%, #0A2845 50%, var(--color-deep-blue) 100%);
  color: var(--color-bg-base);
  padding: var(--spacing-20) 0;
}

.security-title {
  color: var(--color-bg-base);
}

.security-list li {
  color: rgba(255, 255, 255, 0.9);
  padding-left: var(--spacing-5);
  position: relative;
}

.security-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-blue);
  border: 2px solid var(--color-bg-base);
}
```

---

### Badge

**Visual:**
```
┌─────────┐
│  RISK   │
└─────────┘
```

**HTML:**
```html
<span class="badge badge-risk">RISK</span>
<span class="badge badge-positive">COMPLETE</span>
```

**CSS:**
```css
.badge {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 8px 14px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: var(--elevation-1);
}

.badge-risk {
  background: linear-gradient(135deg, var(--color-danger) 0%, #8B2525 100%);
  color: var(--color-bg-base);
}

.badge-positive {
  background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-accent-blue) 100%);
  color: var(--color-bg-base);
}
```

---

# 6. Iconography & Illustration Style

## Icon Style Guidelines

- **Stroke Width:** 1.5px (thin, precise)
- **Corner Style:** Sharp corners, no rounded edges
- **Color:** Monochrome (use brand colors)
- **Size:** 16px, 20px, 24px, 32px standard sizes
- **Style:** Line icons, minimal detail

## Icon Examples

### Icon 1: Email/Envelope

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="5" width="18" height="14" stroke="#0B1F36" stroke-width="1.5" stroke-linecap="square"/>
  <path d="M3 5L12 13L21 5" stroke="#0B1F36" stroke-width="1.5" stroke-linecap="square"/>
</svg>
```

**Visual:**
```
┌─────────────┐
│             │
│  ┌─────┐    │
│  │     │    │
│  └─────┘    │
│             │
└─────────────┘
```

---

### Icon 2: Shield/Security

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="#0B1F36" stroke-width="1.5" stroke-linecap="square"/>
  <path d="M9 12L11 14L15 10" stroke="#0B1F36" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="square"/>
</svg>
```

**Visual:**
```
     /\
    /  \
   /    \
  /      \
 /        \
 └────────┘
```

---

### Icon 3: Checkmark/Verified

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="#123B63" stroke-width="1.5" stroke-linecap="square"/>
  <path d="M8 12L11 15L16 9" stroke="#123B63" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="square"/>
</svg>
```

**Visual:**
```
    ┌───┐
    │ ✓ │
    └───┘
```

---

### Icon 4: Arrow/Flow

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#0B1F36" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="square"/>
</svg>
```

**Visual:**
```
─────────►
```

---

# 7. Sample Screens (Mini Mockups)

## Hero Section Mockup

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  EMAIL INTEGRITY FOR SALESFORCE                             │  │
│  │                                                               │  │
│  │  Simplicity that eliminates risk.                             │  │
│  │                                                               │  │
│  │  We remove manual email logging from your workflow so your   │  │
│  │  firm never has to ask: "Why is this email not in            │  │
│  │  Salesforce?" Every message, every attachment—captured      │  │
│  │  automatically, with legal-grade security.                   │  │
│  │                                                               │  │
│  │  [REQUEST 15-MIN DEMO]  [VIEW SECURITY PACKET]              │  │
│  │                                                               │  │
│  │  Designed for law firms, insurance, and financial            │  │
│  │  operations that cannot afford missing records.              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Operational Pipeline (High Level)                           │  │
│  │                                                               │  │
│  │  ┌─────────────────────┐                                    │  │
│  │  │ Outlook / M365      │                                    │  │
│  │  └─────────────────────┘                                    │  │
│  │         │ TLS 1.2+ • HMAC                                    │  │
│  │         ▼                                                     │  │
│  │  ┌─────────────────────┐                                    │  │
│  │  │ Cloudflare Edge     │                                    │  │
│  │  └─────────────────────┘                                    │  │
│  │         │ Internal queue                                     │  │
│  │         ▼                                                     │  │
│  │  ┌─────────────────────┐                                    │  │
│  │  │ Workers             │                                    │  │
│  │  └─────────────────────┘                                    │  │
│  │         │ Validated payload                                   │  │
│  │         ▼                                                     │  │
│  │  ┌─────────────────────┐                                    │  │
│  │  │ Salesforce          │                                    │  │
│  │  └─────────────────────┘                                    │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Comparison Section Mockup

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌──────────────────────────────┬──────────────────────────────┐  │
│  │ Typical solutions            │ This platform                 │  │
│  │                              │                              │  │
│  │ Plugins, extensions, and     │ End-to-end, automated,       │  │
│  │ partial capture.             │ defensible.                  │  │
│  │                              │                              │  │
│  │ Manual 'log this email'      │ 100% emails captured by      │  │
│  │ action              [RISK]   │ design            [COMPLETE] │  │
│  │                              │                              │  │
│  │ Browser extensions and        │ Attachments stored and       │  │
│  │ sidebars            [FRAGILE] │ linked automatically [COMPLETE]│
│  │                              │                              │  │
│  │ Inconsistent attachment      │ Zero plugins, zero client-   │  │
│  │ logging            [INCOMPLETE]│ side dependencies  [STABLE] │  │
│  │                              │                              │  │
│  │ Limited visibility for        │ Encrypted processing,        │  │
│  │ Operations         [BLIND SPOTS]│ auditable at each step       │  │
│  │                              │                    [DEFENSIBLE]│
│  └──────────────────────────────┴──────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Security Section Mockup

```
███████████████████████████████████████████████████████████████████████
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Security that can stand in front of a regulator.           │  │
│  │                                                             │  │
│  │ We treat every email and attachment as evidence. The       │  │
│  │ architecture follows a Zero-Trust, zero-egress model: data  │  │
│  │ only travels where it is required, and never leaves        │  │
│  │ approved boundaries.                                        │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ • AES-256-GCM encryption at rest; TLS 1.2+ in transit.   │  │
│  │ • Strict outbound allowlist: Salesforce and storage only.  │  │
│  │ • No third-party analytics, log processors, or external AI│  │
│  │ • Immutable audit logging for all processing steps.        │  │
│  │ • Per-tenant isolation, keys, and rate limiting.            │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
███████████████████████████████████████████████████████████████████████
```

## CTA Section Mockup

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ See how simplicity removes risk in your environment.        │  │
│  │                                                               │  │
│  │ We will walk through your current Outlook & Salesforce      │  │
│  │ setup, identify where emails and documents can fall out of  │  │
│  │ your record, and demonstrate how a zero-discretion pipeline  │  │
│  │ closes these gaps without adding operational burden.         │  │
│  │                                                               │  │
│  │                    [SCHEDULE CONSULTATION]                   │  │
│  │                    [DOWNLOAD SECURITY PACKET (PDF)]          │  │
│  │                                                               │  │
│  │  15 minutes · No obligation · Designed for Operations, IT,    │  │
│  │  and Risk teams.                                             │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

# 8. Export Package

## Complete Token List

### Colors

```css
/* Brand Primary */
--color-deep-blue: #0B1F36;
--color-accent-blue: #123B63;

/* Neutrals */
--color-gray-100: #F4F6F8;
--color-gray-200: #E1E5EA;
--color-gray-400: #C9CED6;
--color-gray-700: #6C717C;
--color-gray-900: #3B4250;
--color-soft-black: #1A1A1A;

/* Supporting */
--color-success: #2D5016;
--color-warning: #8B6914;
--color-danger: #A33131;

/* Backgrounds */
--color-bg-base: #FFFFFF;
--color-bg-subtle: #F4F6F8;
--color-bg-elevated: #FAFBFC;

/* Borders */
--color-border-default: #E1E5EA;
--color-border-subtle: #F4F6F8;
--color-border-emphasis: #C9CED6;

/* Interactive */
--color-focus: #123B63;
--color-selection: rgba(18, 59, 99, 0.1);
--color-active: #0B1F36;
```

### Typography

```css
/* Display / H1 */
--font-display-family: "Times New Roman", "Times", serif;
--font-display-size: 44px;
--font-display-line-height: 52px;
--font-display-weight: 700;
--font-display-letter-spacing: -0.02em;

/* H2 */
--font-h2-family: "Times New Roman", "Times", serif;
--font-h2-size: 26px;
--font-h2-line-height: 32px;
--font-h2-weight: 700;

/* H3 */
--font-h3-family: "Times New Roman", "Times", serif;
--font-h3-size: 18px;
--font-h3-line-height: 24px;
--font-h3-weight: 700;

/* Body */
--font-body-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
--font-body-size: 14px;
--font-body-line-height: 22px;
--font-body-weight: 400;

/* UI */
--font-ui-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
--font-ui-size: 12px;
--font-ui-line-height: 16px;
--font-ui-weight: 500;
--font-ui-letter-spacing: 0.16em;
```

### Spacing

```css
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;

/* Container */
--container-width: 1120px;
--container-padding: 24px;
```

### Elevation

```css
--elevation-1: 0 1px 3px rgba(11, 31, 54, 0.05);
--elevation-2: 0 4px 12px rgba(11, 31, 54, 0.08);
--elevation-3: 0 8px 24px rgba(11, 31, 54, 0.12);
--elevation-4: 0 12px 32px rgba(11, 31, 54, 0.16);
```

## Complete CSS Variables File

```css
:root {
  /* ============================================
     BRAND COLORS
     ============================================ */
  --color-deep-blue: #0B1F36;
  --color-accent-blue: #123B63;
  
  /* ============================================
     NEUTRALS
     ============================================ */
  --color-gray-100: #F4F6F8;
  --color-gray-200: #E1E5EA;
  --color-gray-400: #C9CED6;
  --color-gray-700: #6C717C;
  --color-gray-900: #3B4250;
  --color-soft-black: #1A1A1A;
  
  /* ============================================
     SUPPORTING COLORS
     ============================================ */
  --color-success: #2D5016;
  --color-warning: #8B6914;
  --color-danger: #A33131;
  
  /* ============================================
     BACKGROUNDS
     ============================================ */
  --color-bg-base: #FFFFFF;
  --color-bg-subtle: #F4F6F8;
  --color-bg-elevated: #FAFBFC;
  
  /* ============================================
     BORDERS
     ============================================ */
  --color-border-default: #E1E5EA;
  --color-border-subtle: #F4F6F8;
  --color-border-emphasis: #C9CED6;
  
  /* ============================================
     INTERACTIVE
     ============================================ */
  --color-focus: #123B63;
  --color-selection: rgba(18, 59, 99, 0.1);
  --color-active: #0B1F36;
  
  /* ============================================
     TYPOGRAPHY
     ============================================ */
  --font-display-family: "Times New Roman", "Times", serif;
  --font-display-size: 44px;
  --font-display-line-height: 52px;
  --font-display-weight: 700;
  --font-display-letter-spacing: -0.02em;
  
  --font-h2-family: "Times New Roman", "Times", serif;
  --font-h2-size: 26px;
  --font-h2-line-height: 32px;
  --font-h2-weight: 700;
  
  --font-h3-family: "Times New Roman", "Times", serif;
  --font-h3-size: 18px;
  --font-h3-line-height: 24px;
  --font-h3-weight: 700;
  
  --font-body-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-body-size: 14px;
  --font-body-line-height: 22px;
  --font-body-weight: 400;
  
  --font-ui-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-ui-size: 12px;
  --font-ui-line-height: 16px;
  --font-ui-weight: 500;
  --font-ui-letter-spacing: 0.16em;
  
  /* ============================================
     SPACING
     ============================================ */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  
  /* ============================================
     LAYOUT
     ============================================ */
  --container-width: 1120px;
  --container-padding: 24px;
  
  /* ============================================
     ELEVATION
     ============================================ */
  --elevation-1: 0 1px 3px rgba(11, 31, 54, 0.05);
  --elevation-2: 0 4px 12px rgba(11, 31, 54, 0.08);
  --elevation-3: 0 8px 24px rgba(11, 31, 54, 0.12);
  --elevation-4: 0 12px 32px rgba(11, 31, 54, 0.16);
}
```

## Figma Import Guide

### Step 1: Create Color Styles

1. Open Figma → Design → Styles → Create Color Style
2. For each color token:
   - Name: `Color/Deep Blue`
   - Value: `#0B1F36`
   - Repeat for all colors

### Step 2: Create Text Styles

1. Design → Styles → Create Text Style
2. For each typography token:
   - Name: `Text/Display/H1`
   - Font: Times New Roman
   - Size: 44px
   - Line Height: 52px
   - Weight: 700
   - Letter Spacing: -0.02em

### Step 3: Create Component Library

1. Create a new page: "Design System"
2. For each component:
   - Create a Frame
   - Build the component using styles
   - Mark as Component (Cmd/Ctrl + Alt + K)
   - Name: `Button/Primary`

### Step 4: Document Usage

1. Create documentation frames next to each component
2. Include:
   - When to use
   - When not to use
   - Spacing rules
   - Responsive behavior

## Converting to Full Figma Library

### Recommended Structure

```
📁 LexGrid Design System
  📁 Foundations
    📁 Colors
      • Brand Primary
      • Neutrals
      • Supporting
    📁 Typography
      • Display
      • Headings
      • Body
      • UI
    📁 Spacing
      • Spacing Scale
      • Grid System
  📁 Components
    📁 Buttons
      • Primary
      • Secondary
    📁 Forms
      • Input
      • Checkbox
      • Select
    📁 Navigation
      • Header
      • Footer
    📁 Content
      • Hero
      • Card
      • Badge
  📁 Patterns
    • Hero Section
    • Comparison Section
    • Security Strip
    • CTA Section
```

### Auto-Layout Setup

1. Enable Auto Layout on all components
2. Set padding using spacing tokens
3. Set gaps using spacing tokens
4. Use constraints for responsive behavior

### Variants Setup

For components with states:
- Button: Default, Hover, Active, Disabled
- Input: Default, Focus, Error, Disabled

### Naming Convention

```
Component/Category/Variant/State

Examples:
- Button/Primary/Default
- Button/Primary/Hover
- Card/Default
- Input/Text/Focus
```

---

## Design System Summary

This design system provides:

✅ **Complete visual language** aligned with "Simplicity That Eliminates Risk"  
✅ **Production-ready tokens** (colors, typography, spacing)  
✅ **Component library** with HTML/CSS examples  
✅ **Visual examples** throughout (ASCII diagrams, SVG icons)  
✅ **Figma import guidance** for design team  
✅ **Clear usage guidelines** for each component  

**Next Steps:**
1. Import tokens into Figma
2. Build component library in Figma
3. Create pattern templates
4. Document in Storybook (if using React)
5. Generate React components from design system

---

**Design System Version:** 1.0.0  
**Last Updated:** 2025  
**Maintained By:** LexGrid Design Team

