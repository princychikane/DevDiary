
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const entriesDiv = document.getElementById("entries");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    const entryTitle = document.createElement("h3");
    entryTitle.textContent = title;

    const entryContent = document.createElement("p");
    entryContent.textContent = content;

    entryDiv.appendChild(entryTitle);
    entryDiv.appendChild(entryContent);

    entriesDiv.prepend(entryDiv); // add to top

    // Clear inputs
    titleInput.value = "";
    contentInput.value = "";
  }
});
