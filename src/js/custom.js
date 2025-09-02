// console.log('Source file `custom.js` processed.');

const navbar = document.querySelector('.o-header');
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
};

document.querySelectorAll('.offcanvas-body .nav-link').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const href = item.getAttribute('href');
    const { offsetTop } = document.querySelector(href);
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
    document.querySelector('#offcanvasNavbar2').classList.remove('show');
  });
});
