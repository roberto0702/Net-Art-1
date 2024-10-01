


const poems = [
    "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep.",
    "Do not go gentle into that good night, Old age should burn and rave at close of day.",
    "Hope is the thing with feathers That perches in the soul, And sings the tune without the words And never stops at all.",
    "Two roads diverged in a yellow wood, And sorry I could not travel both.",
    "I carry your heart with me (I carry it in my heart).",
    "Because I could not stop for Death, He kindly stopped for me.",
    "The sun sets low, yet I still rise,A dreamer’s heart, with open skies. Each step I take, a brand new start,Adventure calls, I play my part."
];

// Get the poem container
const poemContainer = document.getElementById('poemContainer');

// Function to show a random poem
function showPoem(event) {
    // Get a random poem from the array
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    // Set the text of the poem container
    poemContainer.innerText = randomPoem;

    // Show the poem container at the click position
    poemContainer.style.left = event.pageX + "px";
    poemContainer.style.top = event.pageY + "px";
    poemContainer.style.display = 'block';
    poemContainer.style.opacity = 1;

    // Hide the poem after 3 seconds
    setTimeout(function() {
        poemContainer.style.opacity = 0;
        setTimeout(function() {
            poemContainer.style.display = 'none';
        }, 300);  // Transition fade out
    }, 4000);
}

// Add click event listener to the body
document.body.addEventListener('click', showPoem);


//go to the next page
function goToNextPage(){
    window.location.href = 'index2.html';
}

function NextPage(){
    window.location.href = 'index3.html';
}
