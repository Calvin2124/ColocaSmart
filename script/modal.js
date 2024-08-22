const left = document.querySelector('.left');
const containerLeft = document.querySelector('.container');
left.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log("Left button clicked");
    //changer le grid template 
    containerLeft.style.gridTemplateColumns = "80% 20%";
    // ajouter une transition
    containerLeft.style.transition = "all 0.8s";
    })

left.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log("Left button clicked");
    //changer le grid template 
    containerLeft.style.gridTemplateColumns = "50% 50%";
    })

const rigth = document.querySelector('.right');
const containerRight = document.querySelector('.container');
rigth.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log("Right button clicked");
    //changer le grid template 
    containerRight.style.gridTemplateColumns = "20% 80%";
    // ajouter une transition
    containerRight.style.transition = "all 0.8s";
    })

rigth.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log("Right button clicked");
    //changer le grid template 
    containerRight.style.gridTemplateColumns = "50% 50%";
    })
