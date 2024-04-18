let marker1Found = false;
let marker2Found = false;

// Обработчик для первого маркера
document.querySelector('#animated-marker1').addEventListener('markerFound', function () {
    marker1Found = true;
    checkAllMarkersFound();
});

// Обработчик для второго маркера
document.querySelector('#animated-marker').addEventListener('markerFound', function () {
    marker2Found = true;
    checkAllMarkersFound();
});

function checkAllMarkersFound() {
    if (marker1Found && marker2Found) {
        document.querySelector('#message').style.display = 'block';
        document.querySelector('#notify-sound').play();
        setTimeout(() => {
            document.querySelector('#message').style.display = 'none';
        }, 8000);
    }
}

// Обработчики потери маркера
document.querySelector('#animated-marker1').addEventListener('markerLost', function () {
    marker1Found = false;
});

document.querySelector('#animated-marker').addEventListener('markerLost', function () {
    marker2Found = false;
});
