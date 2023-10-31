menu=document.querySelector('.menu')
sidebar=document.querySelector('.sidebar')
cont=document.querySelector('.container')

menu.addEventListener('click',()=>
{
    sidebar.classList.toggle('smallbar')
    menu.classList.toggle('change')
    if(menu.src.match('menu.png'))
    {
        menu.src='x.png'
    }
    else
    {
        menu.src='menu.png'
    }
    cont.classList.toggle('large-container')
})
