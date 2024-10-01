// Function to show poem lines as the mouse moves
document.addEventListener('mousemove', function(event) {
    // Get all lines of the poem
    const poemLines = document.querySelectorAll('.poemLine');

    // Loop through each line and reveal based on cursor position
    poemLines.forEach(function(line) {
        // Get the position of the current line
        const rect = line.getBoundingClientRect();

        // Check if the mouse is near the line to reveal it
        if (event.clientX > rect.left - 100 && event.clientX < rect.right + 100 &&
            event.clientY > rect.top - 100 && event.clientY < rect.bottom + 100) {
            line.style.color = 'rgba(0, 0, 0, 1)'; // Show the line
        }
    });
});

//go to next page
function BackPage(){
    window.location.href = 'index.html';
}