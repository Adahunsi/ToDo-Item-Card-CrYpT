const DUE = new Date("2026-05-01T18:00:00Z");

// ── Time remaining ──────────────────────────────
function getTimeRemaining() {
    const diff = DUE - Date.now();
    const hours = Math.floor(Math.abs(diff) / 3_600_000);
    const days  = Math.floor(hours / 24);

    if (diff < 0)   return `Overdue by ${hours < 24 ? hours + 'h' : days + ' days'}`;
    if (hours < 1)  return "Due now!";
    if (hours < 24) return `Due in ${hours} hours`;
    if (days === 1) return "Due tomorrow";
    return `Due in ${days} days`;
}

const timeEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
timeEl.textContent = getTimeRemaining();
setInterval(() => { timeEl.textContent = getTimeRemaining(); }, 60_000);

// ── Checkbox toggle ─────────────────────────────
const checkbox  = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const titleEl   = document.querySelector('[data-testid="test-todo-title"]');
const statusEl  = document.querySelector('[data-testid="test-todo-status"]');

checkbox.addEventListener("change", () => {
    const done = checkbox.checked;
    titleEl.style.textDecoration = done ? "line-through" : "none";
    titleEl.style.opacity        = done ? "0.5" : "1";
    statusEl.textContent         = done ? "Done" : "In Progress";
});

// ── Button handlers ─────────────────────────────
function handleEdit()   { console.log("edit clicked"); }
function handleDelete() { alert("Delete clicked"); }