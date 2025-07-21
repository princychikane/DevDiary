
document.addEventListener("DOMContentLoaded", () => {
  const entryForm = document.getElementById("entryForm");
  const entryList = document.getElementById("entryList");

  entryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title && content) {
      const entry = document.createElement("div");
      entry.classList.add("entry");

      entry.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <span>${new Date().toLocaleString()}</span>
        <button class="delete-btn">🗑 Delete</button>
      `;

      entryList.prepend(entry);
      entryForm.reset();

      entry.querySelector(".delete-btn").addEventListener("click", () => {
        entry.remove();
      });
    }
  });
});
