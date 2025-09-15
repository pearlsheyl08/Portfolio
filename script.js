 //header
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });




//circles
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    let dots = parseInt(elem.getAttribute("data-dots"));
    let marked = parseInt(elem.getAttribute("data-percent"));
    let percent = Math.floor((dots * marked) / 100);
    let rotate = 360 / dots;
    let points = "";

    for (let i = 0; i < dots; i++) {
        if (i < percent) {
            points += `<div class="points active" style="--i:${i}; --rot:${rotate}deg"></div>`;
        } else {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
    }

    // insert points *before* the center text
    elem.innerHTML = points + elem.innerHTML;
});
