# Advanced Todo Item Card Component (Stage 1)

A clean, modern, and fully accessible **interactive and stateful** Todo Item Card component built with vanilla HTML, CSS, and JavaScript. This is Stage 1 of the HNG internship task—extending the basic card into a fully editable, stateful component.

## Stage 1: Interactive & Stateful Features

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
- **Semantic HTML** - Uses `<article>`, `<h2>`, `<time>`, and proper form elements
- **Full Accessibility** - WCAG AA compliant with keyboard navigation, focus states, and ARIA labels
- **Responsive Design** - Works seamlessly from mobile (320px) to desktop (1200px+)
- **Complete Data-testid Attributes** - All 25+ test identifiers for automated testing
- **Modern Styling** - Clean design with CSS custom properties and proper color contrast
- **Smart Time Remaining** - Dynamic calculation showing "Due in X days", "Due tomorrow", "Overdue by X hours"
- **Interactive Checkbox** - Toggle task completion with visual feedback (strike-through, muted colors)
- **Tag System** - Flexible tag display with proper semantic markup

### Stage 1 (Interactive & Stateful)
- **Edit Mode** - Full editing interface with form fields
- **Status Control Dropdown** - Change status: Pending → In Progress → Done
- **Priority Indicator** - Visual left-side accent bar (changes color: Red/High, Orange/Medium, Green/Low)
- **Priority Flexibility** - Edit and update priority; display updates immediately
- **Expand/Collapse Description** - Long descriptions collapse to preview, expand on demand
- **Overdue Indicator** - Red badge appears when due date passes
- **Granular Time Updates** - Shows minutes, hours, days with precision
- **Checkbox ↔ Status Sync** - Checking box → status becomes "Done", dropdown updates automatically
- **State Restoration** - Cancel edit mode → previous values restored
- **Form Validation** - Pre-fills with current values
- **Focus Management** - Focus moves to edit form, returns to Edit button after save
- **Keyboard Shortcuts** - Press Escape to cancel edit mode
- **Delete Confirmation** - Shows confirmation dialog before deleting

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
