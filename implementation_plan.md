# Refactoring Velora Estates Homepage to Match Premium Design

The goal is to update the website to perfectly match the provided premium design mockup. This involves adjusting the color palette slightly, refining typography, adding missing sections to the homepage, and polishing the UI components.

## Proposed Changes

### 1. Theme & Global Styles
- **Color Palette**: Update the `--color-bronze` to a deeper, richer brown (`#8c7355` or similar) to match the buttons and accents in the design.
- **Buttons**: Ensure all buttons have sharp corners, exact padding, and hover states that match the premium feel.

### 2. Navbar (`src/components/layout/Navbar.tsx`)
#### [MODIFY] Navbar.tsx
- Move the hamburger menu icon to be visible on desktop as well, placed to the right of the "Enquire" button.
- Make the "Enquire" button solid bronze by default.
- Refine the logo typography to match the elegant serif in the design.

### 3. Hero Section (`src/components/home/Hero.tsx`)
#### [MODIFY] Hero.tsx
- Add left/right navigation arrows to the bottom right.
- Adjust button styles ("Explore Residences" solid bronze, "View Locations" transparent border).
- Ensure the typography layout precisely matches the image.

### 4. Featured Residence (`src/components/home/FeaturedResidence.tsx`)
#### [MODIFY] FeaturedResidence.tsx
- Add the `01 / 03` indicator to the top right.
- Update the property stats (Bedrooms, Bathrooms, Sq.ft, Price) to use a clean grid with vertical dividing lines (`border-l`).
- Add a map pin icon next to the location text.

### 5. New: Homepage Search Section (`src/components/home/SearchSection.tsx`)
#### [NEW] SearchSection.tsx
- Build the "Find a place that feels like you" section.
- Include the "Buy / Rent" toggle tabs.
- Implement the horizontal search bar with Location, Property Type, Budget, and Bedrooms dropdowns.

### 6. New: Homepage Properties Grid (`src/components/home/PropertiesGrid.tsx`)
#### [NEW] PropertiesGrid.tsx
- Build the "Exceptional homes. Remarkable lives." section.
- Create a 4-column grid of property cards.
- Add the "View All Properties ->" link on the right.

### 7. New: Homepage Locations Grid (`src/components/home/LocationsGrid.tsx`)
#### [NEW] LocationsGrid.tsx
- Build the "Live somewhere remarkable." section.
- Create a 4-column grid of horizontal location cards (Mumbai, Goa, Delhi, Bengaluru) with dark gradients and text at the bottom.

### 8. Architecture Section (`src/components/home/ArchitectureSection.tsx`)
#### [MODIFY] ArchitectureSection.tsx
- Restructure to match the design: Text on the left ("OUR PHILOSOPHY", "Architecture isn't just..."), image(s) on the right.

### 9. Page Assembly (`src/app/page.tsx`)
#### [MODIFY] page.tsx
- Reorder and include the new components to match the flow of the design image.

## Verification Plan
- Review the homepage layout against the uploaded mockup.
- Verify all responsive breakpoints for the new grids (4 columns on desktop, 1-2 on mobile).
- Ensure interactions (hover states, custom cursor) are retained and polished.
