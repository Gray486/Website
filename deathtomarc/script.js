const axe = document.getElementById('axe');
const marc = document.getElementById('marc');
var axeTop

document.addEventListener('mousemove', (event) => {

        axe.style.position = "absolute";

        axe.style.top = event.clientY - 10;
        axe.style.left = event.clientX - 50;
        axeTop = parseInt(axe.style.top)
        axeLeft = parseInt(axe.style.left)

        if((axeTop < 275)&&(axeTop > 200)&&(axeLeft < 270)&&(axeLeft > 150)) {
                document.getElementById('blood').style.display = "block"
        } else {
                document.getElementById('blood').style.display = "none"
        }
});