# Pulse Minimal - Design Plan

## Design Philosophy
A minimalist personal finance dashboard inspired by Linear's clean aesthetic and Notion's content-first approach. The design emphasizes whitespace, typography hierarchy, and subtle interactions over visual flourishes.

## Theme & Inspiration
- **Primary Inspiration**: Linear (clean, minimal, sophisticated)
- **Secondary Inspiration**: Notion (content-focused, subtle UI)
- **Design Principles**:
  - Less is more: Remove everything non-essential
  - Typography as primary design element
  - Generous whitespace creates breathing room
  - Monochromatic with single accent color
  - Micro-interactions that feel purposeful, not decorative

## Color Palette
- **Base**: Pure black text on pure white (light mode)
- **Dark Mode**: Off-white text (#E8E8E8) on deep charcoal (#0F0F0F)
- **Accent**: Single purple accent (#6366F1) for key actions and highlights
- **Grays**:
  - Borders: #E5E5E5 (light) / #2A2A2A (dark)
  - Secondary text: #737373 (light) / #A3A3A3 (dark)
  - Muted text: #A3A3A3 (light) / #737373 (dark)
- **Status Colors** (used sparingly):
  - Success: #10B981
  - Warning: #F59E0B
  - Error: #EF4444

## Typography
- **Font Family**: Inter (sharp, clean, professional)
- **Scale**:
  - Page Title: 28px, 700 weight, -0.02em tracking
  - Section Heading: 16px, 600 weight
  - Body: 14px, 400 weight
  - Caption: 12px, 500 weight
  - Numbers: Tabular figures for alignment
- **Line Height**: 1.6 for readability

## Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 48, 64px
- Content max-width: 1280px
- Generous vertical spacing between sections: 48px

## Layout Structure

### Desktop Layout
- **No traditional sidebar**: Top navigation bar instead
- **Top Nav** (72px height):
  - Logo left
  - Main navigation center (Dashboard, Subscriptions, Analytics, Settings)
  - Search + Profile right
  - Minimal, borderless, floats above content
- **Main Content**:
  - Single column, centered, max-width 1280px
  - 48px padding top/bottom
  - 32px padding left/right
  - Content breathes with generous whitespace

### Mobile Layout
- **Sticky Top Bar**: Logo + hamburger menu
- **Bottom Sheet Navigation**: Slides up when menu tapped
- **Single Column**: Full-width cards with minimal padding

## Page Elements

### Dashboard View
1. **Header Section**:
   - "Dashboard" title (28px)
   - Current date in muted text below
   - Quick actions in top-right (subtle icon buttons)

2. **Key Metrics Row** (horizontal cards):
   - 4 minimal cards showing: Total Balance, Monthly Spend, Active Subscriptions, Savings Rate
   - Each card: Label (12px muted), Value (32px bold), Change (12px with arrow)
   - Cards separated by subtle vertical dividers, not borders
   - Hover: subtle background shift

3. **Recent Activity Section**:
   - Simple heading "Recent Activity"
   - List view (not table) with clean rows
   - Each row: Date (left, muted), Description (main), Amount (right, bold)
   - Divider lines between rows (1px, subtle)
   - No alternating row colors

4. **Subscriptions Overview**:
   - "Active Subscriptions" heading
   - Grid of subscription items (2-3 columns on desktop)
   - Each item: Small icon/logo, Name, Amount, Next billing
   - Minimal card treatment with subtle border
   - Hover: lift effect (subtle shadow)

### Subscriptions Page
- List view with excellent typography
- Group by category with collapsible sections
- Each subscription: Icon, Name, Billing cycle, Amount, Actions
- Add button: Floating action (bottom right, desktop) or fixed top (mobile)

### Analytics Page
- Minimal charts (line charts primarily)
- Single accent color for data
- Grid background for reference
- No heavy chart furniture
- Clean axis labels
- Tooltips on hover (subtle)

## Component Specifications

### Minimal Card
- Background: white (light) / #1A1A1A (dark)
- Border: 1px solid #E5E5E5 (light) / #2A2A2A (dark)
- Border radius: 8px
- Padding: 24px
- Box shadow: none (use border only)
- Hover: translate-y(-2px) + subtle shadow

### Button
- **Primary**: Purple accent, white text, 8px radius, 36px height
- **Secondary**: Transparent, border, accent text
- **Ghost**: No border, muted text, hover shows background
- Padding: 12px 24px
- Font: 14px, 500 weight
- Hover: opacity 0.9 or background shift
- No heavy shadows

### Input
- Border: 1px solid border color
- Border radius: 6px
- Height: 40px
- Padding: 0 12px
- Focus: Purple ring (2px)
- No background color in light mode
- Placeholder: muted text

### Navigation Items
- Text only, no backgrounds
- Active state: Purple text + subtle underline
- Hover: opacity change
- No pills or heavy highlighting

### List Items
- Clean rows with dividers
- Padding: 16px 0
- Hover: subtle background (5% black/white)
- No alternating colors
- Actions appear on hover only

## Micro-interactions
- **Transitions**: 150ms ease-out for everything
- **Hover States**: Subtle (opacity, small position shifts)
- **Loading**: Simple spinner (no skeleton screens)
- **Success**: Brief checkmark, then fade
- **Page Transitions**: Instant (no animations)
- **Focus**: Clean ring (2px, accent color)

## Unique Features
1. **Command Palette**: Cmd+K to open search/actions (Linear-style)
2. **Keyboard Shortcuts**: Display hints on hover
3. **Inline Editing**: Click text to edit directly (where appropriate)
4. **Smart Grouping**: Automatic grouping by time/category with minimal headers
5. **Contextual Actions**: Actions appear on hover, not always visible

## Dark Mode
- True dark: #0F0F0F background
- Avoid pure black
- Reduce contrast slightly (off-white text)
- Accent color stays bright
- Borders more subtle

## Implementation Notes
- Use CSS Grid for layouts (not complex flexbox)
- Minimal use of ShadCN components (override styles heavily)
- Custom fonts loaded properly
- All interactions have reduced motion alternatives
- Mobile-first responsive design
