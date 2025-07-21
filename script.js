
const entryInput = document.getElementById("entryInput");
const addButton = document.getElementById("addButton");
const entryList = document.getElementById("entryList");

// Load entries from LocalStorage on page load
window.onload = function () {
  const savedEntries = JSON.parse(localStorage.getItem("devDiaryEntries")) || [];
  savedEntries.forEach(entry => addEntryToDOM(entry));
};

// Add new entry
addButton.addEventListener("click", () => {
  const text = entryInput.value.trim();
  if (text !== "") {
    const timestamp = new Date().toLocaleString();
    const entry = { text, timestamp };
    addEntryToDOM(entry);
    saveEntry(entry);
    entryInput.value = "";
  }
});

// Add entry to HTML
function addEntryToDOM(entry) {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${entry.timestamp}</strong><br>${entry.text}`;
  entryList.prepend(li);
}

// Save entry to LocalStorage
function saveEntry(entry) {
  const existing = JSON.parse(localStorage.getItem("devDiaryEntries")) || [];
  existing.push(entry);
  localStorage.setItem("devDiaryEntries", JSON.stringify(existing));
}
