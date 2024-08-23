function resizePage() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    if (width <= 768) {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "100%";
        container.style.gridTemplateRows = "50% 50%";
        left.style.gridRow = "1";
        right.style.gridRow = "2";
        left.style.backgroundPositionY = '50px';
        left.backgroundRepeat = 'no-repeat';
        
        left.addEventListener('mouseover', smallScreenMouseOver);
        left.addEventListener('mouseout', smallScreenMouseOut);
        right.addEventListener('mouseover', smallScreenMouseOver);
        right.addEventListener('mouseout', smallScreenMouseOut);
    } else {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "50% 50%";
        container.style.gridTemplateRows = "auto";
        left.style.gridRow = "auto";
        right.style.gridRow = "auto";
        
        left.removeEventListener('mouseover', smallScreenMouseOver);
        left.removeEventListener('mouseout', smallScreenMouseOut);
        right.removeEventListener('mouseover', smallScreenMouseOver);
        right.removeEventListener('mouseout', smallScreenMouseOut);
        
        left.addEventListener('mouseover', largeScreenMouseOver);
        left.addEventListener('mouseout', largeScreenMouseOut);
        right.addEventListener('mouseover', largeScreenMouseOver);
        right.addEventListener('mouseout', largeScreenMouseOut);
    }
}

function smallScreenMouseOver(e) {
    e.preventDefault();
    const container = document.querySelector('.container');
    const isLeft = e.target.classList.contains('left');
    container.style.gridTemplateRows = isLeft ? "65% 35%" : "35% 65%";
    container.style.transition = "all 0.8s";
}

function smallScreenMouseOut(e) {
    e.preventDefault();
    const container = document.querySelector('.container');
    container.style.gridTemplateRows = "50% 50%";
}

function largeScreenMouseOver(e) {
    e.preventDefault();
    const container = document.querySelector('.container');
    const isLeft = e.target.classList.contains('left');
    container.style.gridTemplateColumns = window.innerWidth <= 1124 
        ? (isLeft ? "60% 40%" : "40% 60%") 
        : (isLeft ? "80% 20%" : "20% 80%");
    container.style.transition = "all 0.8s";
}

function largeScreenMouseOut(e) {
    e.preventDefault();
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = "50% 50%";
}

resizePage();

window.addEventListener('resize', resizePage);