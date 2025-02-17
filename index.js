document.getElementById("create-btn").addEventListener("click", function () {
  const note = document.createElement("div");
  note.innerHTML = `
  <textarea class="w-full p-2 border rounded" cols="30" rows="10"></textarea>
  <button class="btn btn-error removeNote w-16 h-12">Remove</button>
  `;
  document.getElementById("notes-container").appendChild(note);

  note.querySelector(".removeNote").addEventListener("click", function () {
    note.remove();
  });
});
