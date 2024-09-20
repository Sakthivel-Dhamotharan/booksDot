var overlay = document.querySelector('.popup-overlay')
var pop = document.querySelector('.popup')
var add = document.getElementById('pop-button')
add.addEventListener('click',function() {
    overlay.style.display='block'
    pop.style.display='block' 
 })
 var cancel = document.getElementById('cancel-popup')
 cancel.addEventListener('click',function(event){
    event.preventDefault()
    overlay.style.display='none'
    pop.style.display='none'
 })
 var container = document.querySelector('.container')
 var addBook = document.getElementById('add-book')
 var bookTitle = document.getElementById('book-title-input')
 var bookAuthor = document.getElementById('book-author-input')
 var bookDesc = document.getElementById('book-description-input')
 
addBook.addEventListener('click',function(event){
    event.preventDefault()
    var div = document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=`<div class="book-container">
            <h2>${bookTitle.value}</h2>
            <h4>${bookAuthor.value}</h4>
            <p>${bookDesc.value}</p>
           <button onclick='deleteItem(event)'>Delete</button>
        </div`
    container.append(div)
    overlay.style.display='none'
    pop.style.display='none'
})
function deleteItem(event){
    event.target.parentElement.remove()
}