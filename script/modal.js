// Sélectionner les éléments
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const btnOrange = document.querySelector('.btnOrange');
const btnBlue = document.querySelector('.btnBlue');
const reset = document.querySelector('.reset');

// Fonction pour appliquer le style de grille avec transition
function applyGridTemplate(columns) {
    container.style.gridTemplateColumns = columns;
    container.style.transition = "all 0.8s";
}

// Fonction pour gérer le survol de l'élément gauche
function handleLeftMouseOver(e) {
    e.preventDefault();
    applyGridTemplate("70% 30%");
}

// Fonction pour gérer la sortie du survol de l'élément gauche
function handleLeftMouseOut(e) {
    e.preventDefault();
    applyGridTemplate("50% 50%");
}

// Fonction pour gérer le survol de l'élément droit
function handleRightMouseOver(e) {
    e.preventDefault();
    applyGridTemplate("30% 70%");
}

// Fonction pour gérer la sortie du survol de l'élément droit
function handleRightMouseOut(e) {
    e.preventDefault();
    applyGridTemplate("50% 50%");
}

function removeMouseOverRight(e) {
    e.preventDefault();
    left.removeEventListener('mouseover', handleLeftMouseOver);
    left.removeEventListener('mouseout', handleLeftMouseOut);
    right.removeEventListener('mouseover', handleRightMouseOver);
    right.removeEventListener('mouseout', handleRightMouseOut);
    container.style.gridTemplateColumns = "100% 0%";
    btnOrange.style.display = "none";
    btnBlue.style.display = "none";
    createForm();
}
function removeMouseOverLeft(e) {
    e.preventDefault();
    left.removeEventListener('mouseover', handleLeftMouseOver);
    left.removeEventListener('mouseout', handleLeftMouseOut);
    right.removeEventListener('mouseover', handleRightMouseOver);
    right.removeEventListener('mouseout', handleRightMouseOut);
    container.style.gridTemplateColumns = "0% 100%";
    btnBlue.style.display = "none";
    btnOrange.style.display = "none";
    subscribeForm();
}

function resetColumn(){
    left.addEventListener('mouseover', handleLeftMouseOver);
    left.addEventListener('mouseout', handleLeftMouseOut);
    right.addEventListener('mouseover', handleRightMouseOver);
    right.addEventListener('mouseout', handleRightMouseOut);
    container.style.gridTemplateColumns = "50% 50%";
    // mettre du délais sur le display
    setTimeout(() => {
        btnOrange.style.display = "block";
        btnBlue.style.display = "block";
    }, 180);
    // Supprimer le formulaire
    const form = document.querySelector('form');
    form.remove();

}

// Ajouter les événements de survol et de sortie aux éléments
left.addEventListener('mouseover', handleLeftMouseOver);
left.addEventListener('mouseout', handleLeftMouseOut);
right.addEventListener('mouseover', handleRightMouseOver);
right.addEventListener('mouseout', handleRightMouseOut);

btnBlue.addEventListener('click', removeMouseOverRight);
btnOrange.addEventListener('click', removeMouseOverLeft);
reset.addEventListener('click', resetColumn);

function createForm(){
    const form = document.createElement('form');
    container.position = "relative";
    form.innerHTML = `
        <h1>Rejoindre un groupe</h1>
        <div class="form-group">
            <input type="text" id="groupName" name="groupName" placeholder="Nom du groupe" required>
        </div>
        <div class="form-group">
            <input type="password" id="password" name="password" placeholder="Mot de passe" required>
        </div>
        <div class="form-group
            <button class="btnOrange" type="submit">Submit</button>
        </div>
    `;
    left.insertAdjacentElement('beforeend', form);
    styleForm();
}

function subscribeForm(){
    const form = document.createElement('form');
    container.position = "relative";
    form.innerHTML = `
        <h1>Créer un groupe</h1>
        <div class="form-group
            <input type="text" id="groupName" name="groupName" placeholder="Nom du groupe" required>
        </div>
        <div class="form-group">
            <input type="password" id="password" name="password" placeholder="Mot de passe" required>
        </div>
        <div class="form-group">
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmez votre mot de passe" required>
        </div>
        <div class="form-group">
            <button class="btnBlue" type="submit">Submit</button>
        </div>
    `;
    right.insertAdjacentElement('beforeend', form);
    styleForm();
}

function styleForm(){
    left.position = "relative";
    const form = document.querySelector('form');
    const input = document.querySelectorAll('input');
    form.style.display = "grid";
    form.style.gridTemplateColumns = "1fr";
    form.style.gap = "1rem";
    form.style.margin = "auto";
    form.style.width = "70%";
    form.style.padding = "1rem";
    form.style.backgroundColor = "transparent";
    form.style.borderRadius = "10px";
    form.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    form.style.transition = "all 0.8s";
    form.style.opacity = "0";
    form.style.height = "300px"
    input.forEach(el => {
        el.style.padding = "10px 20px";
        el.style.border = "1px solid #ccc";
        el.style.borderRadius = "5px";
        el.style.width = "85%";
        el.style.transition = "all 0.3s";
        el.style.outline = "none";
        el.style.background = "#D9D9D9";
        el.style.borderBottom = "2px solid #000";
    });
    setTimeout(() => {
        form.style.opacity = "1";
    }, 180);
    form.position = "absolute";
}