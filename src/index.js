const header = document.getElementById('header');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 450){
        header.classList.add('headerScrolledWrapper');
    }
    else header.classList.remove('headerScrolledWrapper');
})