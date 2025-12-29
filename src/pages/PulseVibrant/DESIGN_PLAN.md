# Pulse Vibrant - Design Plan

## Design Philosophy
A data-rich, visually engaging personal finance dashboard that celebrates information through color, charts, and visual hierarchy. Inspired by modern fintech apps like Stripe and Mercury, this design uses gradients, colorful data visualization, and layered surfaces to create depth and engagement.

## Theme & Inspiration
- **Primary Inspiration**: Stripe Dashboard (data-dense, beautiful charts)
- **Secondary Inspiration**: Mercury (modern banking, colorful cards)
- **Design Principles**:
  - Data is beautiful: Embrace charts and visualizations
  - Color communicates: Use color purposefully for categories
  - Depth through layers: Cards, shadows, and elevation
  - Playful but professional
  - Information density without clutter

## Color Palette
- **Background Gradient**: Subtle purple-to-blue gradient (#FAFAFF to #F8F9FF)
- **Dark Mode Background**: Deep navy gradient (#0A0B1F to #121428)
- **Accent Palette** (for categories and data):
  - Primary: #6366F1 (Indigo)
  - Secondary: #8B5CF6 (Purple)
  - Tertiary: #06B6D4 (Cyan)
  - Quaternary: #10B981 (Emerald)
  - Alert: #F59E0B (Amber)
  - Danger: #EF4444 (Red)
- **Surface Colors**:
  - Cards: White with subtle purple tint (#FEFEFF)
  - Elevated: Pure white with larger shadows
  - Dark cards: #1A1B2E with subtle glow
- **Gradients**:
  - Primary button: Linear purple to indigo
  - Chart overlays: Subtle gradient fills
  - Category cards: Unique gradient per category

## Typography
- **Font Family**:
  - Display: Clash Display (for numbers and titles)
  - Body: Inter (for content)
- **Scale**:
  - Hero Numbers: 48px, 700 weight (balance, key metrics)
  - Page Title: 32px, 700 weight
  - Section Heading: 20px, 600 weight
  - Card Title: 16px, 600 weight
  - Body: 15px, 400 weight
  - Caption: 13px, 500 weight
- **Line Height**: 1.5 for body, 1.2 for headings

## Spacing System
- Base unit: 8px
- Scale: 8, 12, 16, 24, 32, 40, 48, 64, 80px
- Dense layouts with clear visual separation through shadows/color
- Content max-width: 1440px

## Layout Structure

### Desktop Layout
- **Left Sidebar** (280px):
  - Gradient background (subtle)
  - Logo with icon at top
  - Navigation with icons + labels
  - Active state: Colorful pill background
  - Bottom: User profile card with avatar
  - Not collapsible (always visible)

- **Main Content Area**:
  - Top bar (64px): Breadcrumbs, search, notifications, theme toggle
  - Content: 32px padding, grid-based layout
  - Background: Subtle gradient

- **Right Panel** (Optional, 320px):
  - Quick insights sidebar
  - Recent notifications
  - Upcoming bills widget
  - Collapsible

### Mobile Layout
- **Bottom Tab Bar**:
  - 5 items with icons and labels
  - Active: Gradient background + icon color shift
  - Fixed bottom with safe area padding
- **Top Bar**:
  - Hamburger menu (opens drawer)
  - Logo center
  - Notification bell right
- **Content**:
  - Full width with 16px margins
  - Stacked cards

## Page Elements

### Dashboard View
1. **Hero Balance Card**:
   - Large card spanning full width
   - Gradient background (purple to indigo)
   - White text
   - Total Balance (48px, centered or left)
   - Quick action buttons (Send, Request, Add)
   - Month-over-month change with sparkline

2. **Spending Insights Row**:
   - 3 colorful metric cards
   - Each with unique gradient background
   - Icon, label, value, mini chart/trend indicator
   - Cards: This Month, vs Last Month, Top Category

3. **Visual Spending Chart**:
   - Large card with donut/pie chart
   - Category breakdown with colors
   - Interactive: Hover shows details
   - Legend on the side with percentages
   - Animated on load

4. **Category Cards Grid**:
   - 2-3 columns
   - Each category gets a unique color/gradient
   - Shows: Icon, Name, Spent/Budget, Progress bar
   - Hover: Lift + glow effect

5. **Recent Transactions List**:
   - Card with table/list
   - Row hover: Highlight background
   - Category badges in color
   - Transaction icons (colored circles)
   - Amount in bold

6. **Upcoming Bills Timeline**:
   - Visual timeline showing next 30 days
   - Bills plotted with colored dots
   - Hover shows bill details
   - Line connecting chronological items

### Subscriptions Page
- **Grid View** (default):
  - Cards with service logos
  - Colorful category tags
  - Large price display
  - Billing cycle badge
  - 3-4 columns on desktop

- **Visual Calendar View**:
  - Monthly calendar showing billing dates
  - Color-coded dots for subscriptions
  - Click date to see details
  - Total for month displayed

- **Category Breakdown**:
  - Horizontal bar chart by category
  - Stacked bars for individual subscriptions
  - Interactive tooltips

### Analytics Page
- **Multi-chart Dashboard**:
  - Income vs Expenses (Area chart with gradient fill)
  - Category Trends (Multi-line chart, each category a color)
  - Spending Heatmap (Calendar-style visualization)
  - Subscription Growth (Bar chart over time)
- **Date Range Selector**:
  - Prominent at top
  - Animated transitions between periods
- **Export Options**:
  - Colorful download buttons

## Component Specifications

### Gradient Card
- Background: White with subtle tint or gradient
- Border radius: 16px (larger than minimal design)
- Padding: 24-32px
- Box shadow:
  - Default: 0 4px 12px rgba(99, 102, 241, 0.08)
  - Hover: 0 8px 24px rgba(99, 102, 241, 0.15)
- Transition: transform 200ms, shadow 200ms
- Hover: translate-y(-4px)

### Button
- **Primary**: Gradient background, white text, 10px radius
- **Secondary**: White background, colored border, gradient text
- **Sizes**:
  - Small: 32px height
  - Medium: 40px height
  - Large: 48px height
- Padding: 16px 32px
- Font: 15px, 600 weight
- Hover: Brightness increase, slight scale (1.02)
- Shadow on hover

### Input
- Border: 2px solid with subtle color
- Border radius: 10px
- Height: 44px
- Padding: 0 16px
- Focus: Gradient border animation
- Placeholder: Lighter text with icon
- Background: White/surface color

### Chart Components
- Use gradient fills for area charts
- Colorful, distinct lines for multi-line charts
- Animated on load (smooth transitions)
- Tooltips with gradient backgrounds
- Grid lines: Subtle, dotted
- Interactive hover states

### Category Badge
- Pill shape (24px height)
- Gradient background matching category color
- White text, 12px, 600 weight
- Small icon prefix
- Subtle shadow

### Progress Bar
- Height: 8px
- Border radius: 4px (fully rounded)
- Background: Light gray
- Fill: Gradient matching category
- Animated width transition
- Glow effect on fill

## Micro-interactions
- **Transitions**: 250ms ease-in-out (slightly longer than minimal)
- **Hover States**: Pronounced (lift, glow, scale)
- **Loading**: Shimmer skeleton screens with gradient animation
- **Success**: Colorful confetti animation or checkmark with bounce
- **Page Transitions**: Smooth slide/fade (200ms)
- **Focus**: Glowing ring with category color
- **Data Updates**: Number counting animations
- **Chart Entry**: Staggered animations for bars/lines

## Unique Features
1. **Smart Insights Panel**: AI-generated insights about spending patterns
2. **Gesture Support**: Swipe on mobile to navigate between views
3. **Color-Coded Everything**: Categories have consistent colors throughout
4. **Animated Charts**: All data visualization animates on render
5. **Quick Actions**: Floating action button with radial menu
6. **Visual Budget Warnings**: Glowing borders on cards approaching limits
7. **Celebration Animations**: Confetti when savings goals met

## Dark Mode
- Deep navy/purple gradient background
- Cards: Dark with subtle glow
- Text: Off-white with good contrast
- Gradients: More vibrant/neon
- Charts: Brighter colors against dark background
- Shadows become glows

## Data Visualization Approach
- Always use color meaningfully
- Category colors consistent across all views
- Gradients for backgrounds, solid for data points
- Tooltips show full details with icons
- Accessible color combinations (WCAG AA)
- Alternative patterns for colorblind users
- Export charts as images

## Implementation Notes
- Use Chart.js or Recharts for visualizations
- Framer Motion for animations
- Gradient generator for category colors
- Icon library: Lucide (already available)
- Responsive charts that adapt to container
- Performance: Virtualize long lists
- Optimize gradient rendering
- Use CSS transforms for smooth animations
