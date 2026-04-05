document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34 30L10 30" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" />
  <path d="M34 22L10 22" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" />
  <path d="M34 14L10 14" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" />
</svg>
    `;
  
    const crossIcon = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6654 31.6666L8.33203 29.3333L17.6654 19.9999L8.33203 10.6666L10.6654 8.33325L19.9987 17.6666L29.332 8.33325L31.6654 10.6666L22.332 19.9999L31.6654 29.3333L29.332 31.6666L19.9987 22.3333L10.6654 31.6666Z" fill="#F5F5F5" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });