
// Sidebar Functionality

let menuIcon = document.querySelector('#menu-icon');

let sideNav = document.querySelector('#sidenav');

let trigger = document.querySelector('#inner-menu-trigger');

let oldMenu = document.querySelector('#list-1');

let newMenu = document.querySelector('#list-2');

let back = document.querySelector('.back');

function removeNavClasses() {
    oldMenu.classList.remove('hide');

    newMenu.classList.remove('shown');

    back.classList.remove('shown');

}

menuIcon.addEventListener('click', () => {

    menuIcon.classList.toggle('open');

    sideNav.classList.toggle('shown');

    // If Nav Is Open

    if (menuIcon.classList.contains('open') && window.innerWidth < 802) {

        document.body.style.position = 'fixed';

    } else {

        document.body.style.position = 'static';

    }

    removeNavClasses();

});

trigger.addEventListener('click', () => {

    oldMenu.classList.add('hide');

    newMenu.classList.add('shown');

    back.classList.add('shown')

})

back.addEventListener('click', removeNavClasses);

let topnav = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    const scrollTop = window.pageYOffset;

    if (scrollTop >= 100) {

        topnav.classList.add('contract');

    } else {

        topnav.classList.remove('contract');

    }

})

function openCarModal(name) {
    let carModal = document.querySelector('#car-modal');
    let title = document.querySelector('#modal-title');
    let img = document.querySelector('#modal-img');
    let carUrl = `https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/${name}.png`;

    if (name === "Audi-A3") {
        carUrl = carUrl.replace(name, `${name}_2`);
    }

    if (name === "Audi-SQ7" || name === "Audi-Q7" || name === "Audi-RS3") {
        carUrl = carUrl.replace(name, `${name}_0`)
    }

    if (name === "Audi-Q8") {
        carUrl = carUrl.replace(name, 'Audi-q8-1')
    }

    carModal.classList.add('shown');

    let newName = name.replace('-', ' ');
    title.innerHTML = newName;
    img.setAttribute('src', carUrl);
    img.setAttribute('alt', `${newName} Vehicle`)
}

let exploreBtns = Array.from(document.querySelectorAll('.explore-btn'));

exploreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let car = btn.getAttribute('data-car');

        openCarModal(car);
    })
})

function closeCarModal() {
    let carModal = document.querySelector('#car-modal');

    carModal.classList.remove('shown');
}

document.querySelector('#close-icon') &&
    document.querySelector('#close-icon').addEventListener('click', closeCarModal);