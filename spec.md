# Kashnoor – Categorized Product Catalogs

## Current State
The Shop section displays all products in a single flat grid with no categorization. Products include earrings, bracelets, chains, and handmade pieces mixed together.

## Requested Changes (Diff)

### Add
- Five category sections within the Shop: Earrings, Rings, Bracelets, Chains, Handmade Jewellery
- Each category has its own heading, divider, and product grid
- Each product card has an "Order on WhatsApp" button (instead of just "View Details")
- Nav includes category tabs/anchors to jump to each section
- Rings section shows a "Coming Soon" or empty state since no ring products exist yet

### Modify
- ShopSection: replace single flat grid with per-category grouped sections
- Product data: assign each product to a category
- ProductCard: replace "View Details" link with a proper "Order on WhatsApp" button styled prominently

### Remove
- Flat unsorted product grid

## Implementation Plan
1. Add `category` field to each product in the products array, mapping to: earrings, rings, bracelets, chains, handmade
2. Create `CATEGORIES` array defining order and display names
3. Refactor `ShopSection` to render a section per category with heading and filtered product grid
4. Update `ProductCard` to show a WhatsApp CTA button with green accent
5. Add horizontal category pill navigation at top of shop section for quick scroll
6. Rings section renders a graceful empty/coming-soon state
