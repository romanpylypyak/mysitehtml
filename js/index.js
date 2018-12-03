setInterval( updateClock, 1000);
function updateClock() {
    const clock = document.getElementById('clock');
    clock.innerText = (new Date()).toLocaleTimeString();
}    