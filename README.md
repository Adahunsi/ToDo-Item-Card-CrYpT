# Advanced Todo Item Card Component (Stage 1)

A clean, modern, and fully accessible **interactive and stateful** Todo Item Card component built with vanilla HTML, CSS, and JavaScript. This is Stage 1 of the HNG internship task—extending the basic card into a fully editable, stateful component.

## 🎯 Stage 1: Interactive & Stateful Features

This Stage 1 build includes:
- **Full Edit Mode** - Click Edit to modify all task properties
- **Status Controls** - Interactive dropdown to change status (Pending → In Progress → Done)
- **Priority Indicators** - Visual accent bar that changes color based on priority
- **Expand/Collapse** - Long descriptions collapse and expand smoothly
- **Overdue Detection** - Smart overdue indicator when due date passes
- **Time Management** - Granular time formatting (minutes, hours, days)
- **State Synchronization** - Checkbox ↔ Status dropdown always synced
- **Keyboard Accessibility** - Full keyboard navigation including Escape to cancel edits

## Features

### Stage 0 (Core)
- ✅ **Semantic HTML** - Uses `<article>`, `<h2>`, `<time>`, and proper form elements
- ✅ **Full Accessibility** - WCAG AA compliant with keyboard navigation, focus states, and ARIA labels
- ✅ **Responsive Design** - Works seamlessly from mobile (320px) to desktop (1200px+)
- ✅ **Complete Data-testid Attributes** - All 25+ test identifiers for automated testing
- ✅ **Modern Styling** - Clean design with CSS custom properties and proper color contrast
- ✅ **Smart Time Remaining** - Dynamic calculation showing "Due in X days", "Due tomorrow", "Overdue by X hours"
- ✅ **Interactive Checkbox** - Toggle task completion with visual feedback (strike-through, muted colors)
- ✅ **Tag System** - Flexible tag display with proper semantic markup

### Stage 1 (Interactive & Stateful)
- ✅ **Edit Mode** - Full editing interface with form fields
- ✅ **Status Control Dropdown** - Change status: Pending → In Progress → Done
- ✅ **Priority Indicator** - Visual left-side accent bar (changes color: Red/High, Orange/Medium, Green/Low)
- ✅ **Priority Flexibility** - Edit and update priority; display updates immediately
- ✅ **Expand/Collapse Description** - Long descriptions collapse to preview, expand on demand
- ✅ **Overdue Indicator** - Red badge appears when due date passes
- ✅ **Granular Time Updates** - Shows minutes, hours, days with precision
- ✅ **Checkbox ↔ Status Sync** - Checking box → status becomes "Done", dropdown updates automatically
- ✅ **State Restoration** - Cancel edit mode → previous values restored
- ✅ **Form Validation** - Pre-fills with current values
- ✅ **Focus Management** - Focus moves to edit form, returns to Edit button after save
- ✅ **Keyboard Shortcuts** - Press Escape to cancel edit mode
- ✅ **Delete Confirmation** - Shows confirmation dialog before deleting

## Project Structure

```
index.html    - Semantic HTML structure with data-testid attributes
style.css     - Modern CSS with design tokens and responsive layout
script.js     - Interactive functionality (checkbox toggle, time updates, button handlers)
```

## What's Included

### Todo Card Display
- Task title (with completion state visual feedback)
- Priority indicator visual accent (colored left border)
- Priority badge (High/Medium/Low)
- Status badge (Pending/In Progress/Done)
- Status control dropdown
- Description text (collapsible if >100 characters)
- Expand/Collapse toggle with aria-expanded
- Due date (`<time>` element with semantic datetime)
- Time remaining with aria-live updates
- Overdue indicator (red badge when overdue)
- Taggable system (work, urgent, design, etc.)
- Edit & Delete action buttons
- Checkbox for task completion

### Edit Form (Hidden until Edit is clicked)
- Title input field (pre-populated with current value)
- Description textarea (pre-populated with current value)
- Priority select dropdown (Low, Medium, High)
- Due date datetime-local input
- Save button (updates all properties + visual indicators)
- Cancel button (restores previous state)

### Interactive Features
- **Edit Mode Flow:**
  - Click Edit → Form appears, card content hides
  - Form fields auto-fill with current values
  - Save → Updates card, exits edit mode, focus returns to Edit button
  - Cancel (or Escape key) → Discards changes, exits edit mode
  
- **Status Management:**
  - Checkbox toggle: checked → status = "Done"
  - Dropdown: select status → checkbox auto-updates
  - All three elements (checkbox, dropdown, display) stay synchronized
  
- **Priority Updates:**
  - Edit priority → Save → Badge color updates instantly
  - Indicator accent color matches priority level
  
- **Time Handling:**
  - Updates every 30 seconds
  - Shows: "Completed" when status = Done
  - Shows: "Overdue by X hours/days" when past due
  - Shows: "Due in X minutes/hours/days" when upcoming
  
- **Accessibility:**
  - Tab order: Checkbox → Status dropdown → Expand button → Edit → Delete → (Form fields in edit mode)
  - Escape key closes edit mode
  - All buttons have accessible names (aria-label)
  - Forms have associated labels
  - Expand button uses aria-expanded/aria-controls

### Design Features
- Max width: 480px (optimized for readability on all screens)
- Priority indicator: 6px colored left border accent
- Responsive padding and spacing
- CSS variables for easy theming
- Smooth transitions for expand/collapse
- Visible focus states for keyboard users (2px blue outline)
- Proper color contrast ratios (WCAG AA)
- Mobile-first responsive design
- Clean edit form styling

## Accessibility Highlights

- Semantic form elements (`<input type="checkbox">`)
- Associated labels with `aria-label` attributes
- Focus-visible outlines (2px blue)
- ARIA live region for dynamic time updates
- Good color contrast (WCAG AA)
- Full keyboard tab-through support
- Semantic list structure for tags

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Testing

All UI elements are marked with data-testid attributes for automated testing:

### Stage 0 (Display)
- `test-todo-card` - Root container
- `test-todo-title` - Task title
- `test-todo-complete-toggle` - Checkbox
- `test-todo-priority` - Priority badge
- `test-todo-priority-indicator` - Priority visual indicator
- `test-todo-status` - Status badge
- `test-todo-status-control` - Status dropdown
- `test-todo-description` - Task description
- `test-todo-due-date` - Due date element
- `test-todo-time-remaining` - Time remaining display
- `test-todo-overdue-indicator` - Overdue badge
- `test-todo-tags` - Tags container
- `test-todo-tag-work` - Work tag
- `test-todo-tag-urgent` - Urgent tag
- `test-todo-expand-toggle` - Expand/collapse button
- `test-todo-collapsible-section` - Collapsible description container
- `test-todo-edit-button` - Edit button
- `test-todo-delete-button` - Delete button

### Stage 1 (Edit Form)
- `test-todo-edit-form` - Edit form container
- `test-todo-edit-title-input` - Title input field
- `test-todo-edit-description-input` - Description textarea
- `test-todo-edit-priority-select` - Priority select dropdown
- `test-todo-edit-due-date-input` - Due date input field
- `test-todo-save-button` - Save button
- `test-todo-cancel-button` - Cancel button

**Total: 25+ test identifiers for comprehensive automated testing**

## Getting Started

Simply open `index.html` in a modern web browser. No build tools or dependencies required.

```bash
# Clone the repository
git clone <repo-url>

# Open in browser
open index.html
```

## 📋 Requirements Checklist

### ✅ Stage 0 (Core - All Met)
- [x] Semantic HTML structure
- [x] All Stage 0 data-testid attributes present
- [x] WCAG AA accessibility compliant
- [x] Responsive layout (320px - 1200px+)
- [x] Interactive checkbox with completion state
- [x] Smart time remaining calculations
- [x] Edit/Delete button functionality
- [x] Tag system with proper semantic markup
- [x] Full keyboard navigation support
- [x] Good color contrast ratios

### ✅ Stage 1 (Interactive & Stateful - All Met)

**Edit Mode**
- [x] Edit form container with proper data-testid
- [x] Title input field (pre-populated)
- [x] Description textarea (pre-populated)
- [x] Priority select dropdown (Low, Medium, High)
- [x] Due date datetime-local input
- [x] Save button (updates all card values)
- [x] Cancel button (restores previous state)
- [x] Form fields have `<label>` elements
- [x] Focus management (focus to form on enter, back to Edit button on exit)
- [x] Escape key closes edit mode

**Status Controls**
- [x] Status dropdown/control with data-testid
- [x] Three options: Pending, In Progress, Done
- [x] Checkbox ↔ Status dropdown synchronized
- [x] Status display updates when either control changes
- [x] Visual state changes based on status (strike-through, muted colors, borders)

**Priority Enhancements**
- [x] Priority indicator visual accent (left border)
- [x] Priority indicator changes color by level (Red/Orange/Green)
- [x] Priority badge updates when edited
- [x] Priority persists across edit cycles

**Expand/Collapse Behavior**
- [x] Toggle button with data-testid
- [x] Collapsible section with data-testid
- [x] aria-expanded attribute
- [x] aria-controls linking button to section
- [x] Auto-shows if description > 100 characters
- [x] Smooth max-height animation
- [x] Keyboard accessible

**Time Management Enhancements**
- [x] Overdue indicator with data-testid
- [x] Overdue indicator visibility toggles
- [x] Granular time formatting (minutes, hours, days)
- [x] Updates every 30 seconds
- [x] Shows "Completed" when status = Done
- [x] Time updates stop on completion
- [x] Accurate overdue detection with red styling

**Visual State Changes**
- [x] "Done" → strike-through title + muted colors
- [x] "High priority" → strong visual indicator (red accent)
- [x] "Overdue" → red accent on border
- [x] "In Progress" → blue accent on border
- [x] All transitions are smooth

**Accessibility (Stage 1)**
- [x] Edit form fields have visible labels
- [x] Status dropdown has accessible name
- [x] Expand toggle has aria-expanded and aria-controls
- [x] Collapsible section has matching id
- [x] Live time updates use aria-live="polite"
- [x] Full keyboard tab order maintained
- [x] Focus trapped in logical order

**Responsiveness**
- [x] Adapts to 320px mobile
- [x] Adapts to 768px tablet
- [x] Adapts to 1024px+ desktop
- [x] Edit form fields stack vertically on mobile
- [x] No layout breaking at any size
- [x] No horizontal overflow
- [x] Proper text wrapping for long content

**State Management**
- [x] Clean state object implementation
- [x] Previous state saved before editing
- [x] Form fields pre-fill with current values
- [x] All form inputs update state correctly
- [x] Cancel restores all previous values
- [x] Save commits all changes

### Browser Support
- [x] Chrome/Edge 90+
- [x] Firefox 88+
- [x] Safari 14+

---

## Submission Checklist for Stage 1
- [x] All Stage 0 testids still work
- [x] All Stage 1 testids implemented and functional
- [x] Edit mode fully functional
- [x] Status transitions synchronized
- [x] Expand/collapse accessible and working
- [x] Overdue logic correct
- [x] No visual overflow at any screen size
- [x] Full keyboard navigation
- [x] Time updates properly
- [x] Clean state management
- [x] README updated
- [x] Code ready for GitHub push
