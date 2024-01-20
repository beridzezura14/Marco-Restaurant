const btn = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.mobile-menu')
const navItems = document.querySelector('.nav-item')
function showMenu(){
    if(navItems.style.transform = 'scale(0)'){
        navItems.style.transform = 'scale(1)'
        btn.style.display = 'none'
        close.style.display = 'block'
    }
}
function hideMenu(){
    navItems.style.transform = 'scale(0)'
    btn.style.display = 'block'
    close.style.display = 'none'
}
btn.addEventListener('click', showMenu)
close.addEventListener('click', hideMenu)

// start choice section 

// name value
const nameActive = document.querySelector('#name-active')
const nameBreak = document.querySelector('#name-break')
const nameLunch = document.querySelector('#name-lunch')
const nameDinner = document.querySelector('#name-dinner')
// product value
const cap = document.querySelectorAll('.cap')
const breakf = document.querySelectorAll('.breakf')
const lunch = document.querySelectorAll('.lunch')
const dinner = document.querySelector('.dinner')

function showActive(){
    nameActive.style.backgroundColor = '#f42f2c'
    nameActive.style.color = 'white'
    nameBreak.style.backgroundColor = 'white'
    nameBreak.style.color = '#3b3b3b'
    nameLunch.style.backgroundColor = 'white'
    nameLunch.style.color = '#3b3b3b'
    nameDinner.style.backgroundColor = 'white'
    nameDinner.style.color = '#3b3b3b'
    cap.forEach(element =>{
        element.style.display = 'block'
    })
}
function showBreakf(){
    nameActive.style.backgroundColor = 'white'
    nameActive.style.color = '#3b3b3b'
    nameBreak.style.backgroundColor = '#f42f2c'
    nameBreak.style.color = 'white'
    nameLunch.style.backgroundColor = 'white'
    nameLunch.style.color = '#3b3b3b'
    nameDinner.style.backgroundColor = 'white'
    nameDinner.style.color = '#3b3b3b'
    breakf.forEach(element =>{
        element.style.display = 'block'
    })
    lunch.forEach(element =>{
        element.style.display = 'none'
    })
    dinner.forEach(element =>{
        element.style.display = 'none'
    })

    
}
function showLunch(){
    nameActive.style.backgroundColor = 'white'
    nameActive.style.color = '#3b3b3b'
    nameBreak.style.backgroundColor = 'white'
    nameBreak.style.color = '#3b3b3b'
    nameLunch.style.backgroundColor = '#f42f2c'
    nameLunch.style.color = 'white'
    nameDinner.style.backgroundColor = 'white'
    nameDinner.style.color = '#3b3b3b'
    breakf.forEach(element =>{
        element.style.display = 'none'
    })
    lunch.forEach(element =>{
        element.style.display = 'block'
    })
    dinner.forEach(element =>{
        element.style.display = 'none'
    })
}
function showDinner(){
    nameActive.style.backgroundColor = 'white'
    nameActive.style.color = '#3b3b3b'
    nameBreak.style.backgroundColor = 'white'
    nameBreak.style.color = '#3b3b3b'
    nameLunch.style.backgroundColor = 'white'
    nameLunch.style.color = '#3b3b3b'
    nameDinner.style.backgroundColor = '#f42f2c'
    nameDinner.style.color = 'white'
    breakf.forEach(element =>{
        element.style.display = 'none'
    })
    lunch.forEach(element =>{
        element.style.display = 'none'
    })
    dinner.forEach(element =>{
        element.style.display = 'block'
    })
}
nameActive.addEventListener('click', showActive)
nameBreak.addEventListener('click', showBreakf)
nameLunch.addEventListener('click', showLunch)
nameDinner.addEventListener('click', showDinner)



