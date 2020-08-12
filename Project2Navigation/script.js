var navbarbutton=document.querySelector ('.navbarbutton');
var navbarlinks=document.querySelector('.navbarlinks');
navbarbutton.addEventListener('click',function(){
    var value=navbarlinks.classList.contains('navbarlinks');

    if (value){navbarlinks.classList.remove('navbarlinks')}
    else{navbarlinks.classList.add('navbarlinks')}

})
