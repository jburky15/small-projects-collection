const searchButton = document.querySelector('#search-button')
const searchButtonContent = document.querySelector('#search-button div')

searchButton.addEventListener('click', activeButton)

function activeButton() {
    searchButtonContent.classList.toggle('loading')
}