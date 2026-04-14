# Todo Item Card Component

A clean, modern, and fully accessible Todo Item Card component built with vanilla HTML, CSS, and JavaScript.

## Features

- **Semantic HTML** - Uses `<article>`, `<h2>`, `<time>`, and proper form elements
- **Full Accessibility** - WCAG AA compliant with keyboard navigation, focus states, and ARIA labels
- **Responsive Design** - Works seamlessly from mobile (320px) to desktop (1200px+)
-  **Complete Data-testid Attributes** - All 12+ required test identifiers for automated testing
- **Modern Styling** - Clean design with CSS custom properties and proper color contrast
- **Smart Time Remaining** - Dynamic calculation showing "Due soon", "Due tomorrow", "Overdue by X hours", etc.
-  **Interactive Checkbox** - Toggle task completion with visual feedback (strike-through, opacity change)
-  **Tag System** - Flexible tag display with proper semantic markup

## Project Structure

```
index.html    - Semantic HTML structure with data-testid attributes
style.css     - Modern CSS with design tokens and responsive layout
script.js     - Interactive functionality (checkbox toggle, time updates, button handlers)
```

## What's Included

### Todo Card Elements
- Task title (with completion state visual feedback)
- Priority badge (High/Medium/Low)
- Status badge (Pending/In Progress/Done)
- Description text
- Due date (`<time>` element)
- Time remaining with live updates
- Taggable system (work, urgent, design, etc.)
- Edit & Delete action buttons
- Checkbox for task completion

### Design Features
- Max width: 480px (optimized for readability)
- Responsive padding and spacing
- CSS variables for easy theming
- Smooth transitions and hover states
- Visible focus states for keyboard users
- Proper color contrast ratios

### Interactive Features
- Checkbox toggle updates status to "Done"
- Strike-through animation on title when completed
- Edit button logs to console
- Delete button triggers alert
- Time remaining updates every 60 seconds
- Full keyboard navigation support

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
- `test-todo-card` - Root container
- `test-todo-title` - Task title
- `test-todo-complete-toggle` - Checkbox
- `test-todo-priority` - Priority badge
- `test-todo-status` - Status badge
- `test-todo-description` - Task description
- `test-todo-due-date` - Due date
- `test-todo-time-remaining` - Time remaining display
- `test-todo-tags` - Tags container
- `test-todo-tag-work` - Work tag
- `test-todo-tag-urgent` - Urgent tag
- `test-todo-edit-button` - Edit button
- `test-todo-delete-button` - Delete button

## Getting Started

Simply open `index.html` in a modern web browser. No build tools or dependencies required.

```bash
# Clone the repository
git clone <repo-url>

# Open in browser
open index.html
```

## Requirements Met

Semantic HTML structure
All data-testid attributes present and correct
Fully accessible
Responsive layout (320px - 1200px+)
Interactive checkbox with completion state
Smart time remaining calculations
Edit/Delete button handlers
Tag system with proper markup
Keyboard navigation support
