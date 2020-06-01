const nav = document.getElementById('NavBarMain');

nav.addEventListener('click', (e) => {
    const menuOptions = document.querySelectorAll('.menuOptions');
    const menu = e.target.innerHTML;
    switch (menu) {
        case 'Inicio':
            menuOptions[0].classList.add('active');
            menuOptions[1].classList.remove('active');
            menuOptions[2].classList.remove('active');
            menuOptions[3].classList.remove('active');
            menuOptions[4].classList.remove('active');
            break;
        case 'Conocenos':
            menuOptions[0].classList.remove('active');
            menuOptions[1].classList.add('active');
            menuOptions[2].classList.remove('active');
            menuOptions[3].classList.remove('active');
            menuOptions[4].classList.remove('active');
            break;
        case 'Importaciones':
            menuOptions[0].classList.remove('active');
            menuOptions[1].classList.remove('active');
            menuOptions[2].classList.add('active');
            menuOptions[3].classList.remove('active');
            menuOptions[4].classList.remove('active');
            break;
        case 'Tecnología':
            menuOptions[0].classList.remove('active');
            menuOptions[1].classList.remove('active');
            menuOptions[2].classList.remove('active');
            menuOptions[3].classList.add('active');
            menuOptions[4].classList.remove('active');
            break;
        case 'Contacto':
            menuOptions[0].classList.remove('active');
            menuOptions[1].classList.remove('active');
            menuOptions[2].classList.remove('active');
            menuOptions[3].classList.remove('active');
            menuOptions[4].classList.add('active');
            break;
        default:
            console.error('No encuentra la opción seleccionada');
            break;
    }
});
