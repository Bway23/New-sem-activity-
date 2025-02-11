let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const content = event.target.closest('.content');
        const description = content.querySelector('.des');

        if (description.style.maxHeight) {
           
            description.style.maxHeight = null;
            event.target.textContent = "See More";
        } else {
           
            description.style.maxHeight = description.scrollHeight + "px";
            event.target.textContent = "See Less";
        }
    });
});

