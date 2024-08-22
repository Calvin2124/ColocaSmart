const title = document.querySelector('h1');
const modal = `
<dialog class="modal">
        <span class="close">&times;</span>
        <div class="split">
            <div class="left">
                <img src="../img/Minimalist UI illustration of couple dancing in a flat illustration style on a white background with bright color scheme, dribbble, flat vector.jpg" alt="Join Image">
                <a href="#" target="_blank" class="button">Rejoindre</a>
            </div>
            <div class="right">
                <img src="../img/Minimalist UI illustration of teacher giving a lecture in a flat illustration style on a white background with bright color scheme, dribbble, flat vector.jpg" alt="Create Image">
                <a href="#" target="_blank" class="button">Créer</a>
            </div>
        </div>
</dialog>
`;

title.addEventListener('click', () => {
    title.insertAdjacentHTML('afterend', modal);
    const dialog = document.querySelector('.modal');
    dialog.showModal(); // Opens the modal dialog
    console.log('clicked');

    // Add an event listener to the close button
    const closeButton = dialog.querySelector('.close');
    closeButton.addEventListener('click', () => {
        dialog.close(); // Closes the modal dialog
    });
});
