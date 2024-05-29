let aside = document.querySelector('aside');
let list = document.querySelector('.list');
let show = 'on'
list.addEventListener('click', function(){
    if (show === 'on') {
        aside.style.display = 'none';
        show = 'off';
    }
    else if (show === 'off'){
        aside.style.display = 'block';
        show = 'on';
    }
})