window.addEventListener('scroll', e => {
    let btn = document.getElementById('button').classList;
    let active_class = 'button_scrolled';

    if(scrollY > 0) btn.add(active_class);
    else btn.remove(active_class);
})