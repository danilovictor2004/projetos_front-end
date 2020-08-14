function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
initScrollSuave();
