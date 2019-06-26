function setCardContent(title, content){
    this.content = {
        id: (this.content.id !== undefined? this.content.id + 1: 0 ),
        title: title,
        content: content,
    };
}

function clearCardContent(titleElement, contentElement){
    this.content = {
        id:(this.content !== undefined? this.content.id : 0 ),
        title: '',
        content: '',
    };
    titleElement.value = '';
    contentElement.value = '';
}

function cardComponent() {
    var element = document.createElement('div');
    var title = document.createElement('p');
    var content = document.createElement('p');;
    var button = document.createElement('button');;

    element.className = 'card';
    element.id = 'card-'+this.content.id;
    element.style.background = generateRandomHexa();

    title.innerHTML = this.content.title;
    title.className = 'card--text';
    
    content.innerHTML = this.content.content;
    content.className = 'card--text';

    button.innerHTML='Remover'
    button.className='button'   
    button.dataset.id='card-1';

    button.addEventListener('click', () => {
        removeCard(button.dataset.id);
    })

    element.appendChild(title);
    element.appendChild(content);
    element.appendChild(button);

    return element;
}

function createCardComponent(){
    const cardListContainer = document.getElementById('card-list');

    if(cardListContainer) {
        var element = cardComponent();
        cardListContainer.appendChild(element);
    }
}

function createNewCard(titleElement, contentElement){
    setCardContent(titleElement.value, contentElement.value);
    createCardComponent();
}
