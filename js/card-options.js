function removeCard(elementIdToRemove){
    const elementToRemove = document.getElementById(elementIdToRemove);

    elementToRemove.parentNode.removeChild(elementToRemove);
}
