// ── Elements ──
const card = document.querySelector('[data-testid="test-todo-card"]');
const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const tdTitle = document.querySelector('[data-testid="test-todo-title"]');
const tdStatus = document.querySelector('[data-testid="test-todo-status"]');
const statusControl = document.querySelector('[data-testid="test-todo-status-control"]');

const tdTimeRem = document.querySelector('[data-testid="test-todo-time-remaining"]');
const tdOverdue = document.querySelector('[data-testid="test-todo-overdue-indicator"]');

const expandBtn = document.querySelector('[data-testid="test-todo-expand-toggle"]');
const collapsible = document.querySelector('[data-testid="test-todo-collapsible-section"]');
const description = document.querySelector('[data-testid="test-todo-description"]');

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');
const editForm = document.querySelector('[data-testid="test-todo-edit-form"]');
const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector('[data-testid="test-todo-cancel-button"]');

const editTitle = document.querySelector('[data-testid="test-todo-edit-title-input"]');
const editDesc = document.querySelector('[data-testid="test-todo-edit-description-input"]');
const editPriority = document.querySelector('[data-testid="test-todo-edit-priority-select"]');
const editDate = document.querySelector('[data-testid="test-todo-edit-due-date-input"]');

const priorityBadge = document.querySelector('[data-testid="test-todo-priority"]');
const priorityIndicator = document.querySelector('[data-testid="test-todo-priority-indicator"]');
const dueDate = document.querySelector('[data-testid="test-todo-due-date"]');

//State
let state = {
  title: tdTitle.textContent.trim(),
  description: description.textContent.trim(),
  status: "in-progress",
  priority: "high",
  due: new Date("2026-05-01T18:00:00Z"),
  completed: false
};

let previousState = { ...state };

// Time Logic
let timer;

function formatTime(diff) {
  const minutes = Math.floor(Math.abs(diff) / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (diff < 0) {
    if (hours < 1) return `Overdue by ${minutes} minutes`;
    if (hours < 24) return `Overdue by ${hours} hours`;
    return `Overdue by ${days} days`;
  }

  if (minutes < 60) return `Due in ${minutes} minutes`;
  if (hours < 24) return `Due in ${hours} hours`;
  return `Due in ${days} days`;
}

function updateTime() {
  if (state.completed) {
    tdTimeRem.textContent = "Completed";
    return;
  }

  const diff = state.due - Date.now();
  tdTimeRem.textContent = formatTime(diff);

  if (diff < 0) {
    tdOverdue.hidden = false;
    card.classList.add("overdue");
  } else {
    tdOverdue.hidden = true;
    card.classList.remove("overdue");
  }
}

function startTimer() {
  updateTime();
  timer = setInterval(updateTime, 30000);
}

startTimer();

//Status Sync
function updateStatus(newStatus) {
  state.status = newStatus;

  tdStatus.textContent =
    newStatus === "done"
      ? "Done"
      : newStatus === "pending"
      ? "Pending"
      : "In Progress";

  checkbox.checked = newStatus === "done";
  state.completed = newStatus === "done";

  card.classList.remove("done", "in-progress");

  if (newStatus === "done") {
    card.classList.add("done");
  } else if (newStatus === "in-progress") {
    card.classList.add("in-progress");
  }

  updateTime();
}

checkbox.addEventListener("change", () => {
  updateStatus(checkbox.checked ? "done" : "pending");
});

statusControl.addEventListener("change", (e) => {
  updateStatus(e.target.value);
});

// Expand / Collapse
function checkDescriptionLength() {
  if (description.textContent.length > 100) {
    expandBtn.hidden = false;
    collapsible.classList.add("collapsed");
  }
}

expandBtn.addEventListener("click", () => {
  const expanded = expandBtn.getAttribute("aria-expanded") === "true";

  expandBtn.setAttribute("aria-expanded", !expanded);
  expandBtn.textContent = expanded ? "Show more" : "Show less";

  collapsible.classList.toggle("expanded");
  collapsible.classList.toggle("collapsed");
});

checkDescriptionLength();

// Format date for display
function formatDateDisplay(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return `Due ${date.toLocaleDateString('en-US', options)}`;
}

// Edit Mode 
function enterEditMode() {
  previousState = { ...state };
  editTitle.value = state.title;
  editDesc.value = state.description;
  editPriority.value = state.priority;
  editDate.value = state.due.toISOString().slice(0, 16);
  card.classList.add("editing");
  editForm.hidden = false;
  editTitle.focus();
}

function exitEditMode() {
  card.classList.remove("editing");
  editForm.hidden = true;
  editBtn.focus();
}

function handleEdit() {
  enterEditMode();
}

function handleSave() {
  state.title = editTitle.value.trim();
  state.description = editDesc.value.trim();
  state.priority = editPriority.value;
  state.due = new Date(editDate.value);

  tdTitle.textContent = state.title;
  description.textContent = state.description;

  const priorityText = state.priority.charAt(0).toUpperCase() + state.priority.slice(1);
  priorityBadge.textContent = priorityText;
  priorityBadge.className = `badge badge-priority-${state.priority}`;
  priorityIndicator.className = `priority-indicator priority-${state.priority}`;

  // Update due date display
  dueDate.textContent = formatDateDisplay(state.due);
  dueDate.setAttribute('datetime', state.due.toISOString());

  exitEditMode();
  updateTime();
}

function handleCancel() {
  state = { ...previousState };
  exitEditMode();
}

function handleDelete() {
  if (confirm("Are you sure you want to delete this task?")) {
    card.remove();
  }
}

editBtn.addEventListener("click", handleEdit);
saveBtn.addEventListener("click", handleSave);
cancelBtn.addEventListener("click", handleCancel);
deleteBtn.addEventListener("click", handleDelete);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && card.classList.contains("editing")) {
    handleCancel();
  }
});