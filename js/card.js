function cardCreator() {
    const titleInput = document.getElementById('card-title');
    const contentText = document.getElementById('card-content');
    const addButton = document.getElementById('add-new-card');

    if(titleInput && contentText) {
        titleInput.addEventListener('click', () => {
            titleInput.placeholder = "Title";
            contentText.style.display = "flex";
            addButton.style.display="";
        }); 
    }

    if(addButton) {
        addButton.addEventListener('click', function(){
            if(titleInput.value !== '' && contentText.value !== '') {
                createNewCard(titleInput, contentText, addButton);
                clearCardContent(titleInput, contentText);
            }
        });
    }
}

cardCreator(); 