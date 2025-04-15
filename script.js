//your code here
let draggedDiv = null;

document.querySelectorAll('.draggable').forEach(div => {
  div.addEventListener('dragstart', function (e) {
    draggedDiv = e.target;
  });

  div.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  div.addEventListener('drop', function (e) {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.target) {
      // Swap background images
      let temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
