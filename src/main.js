// 'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션 스크롤시 opacity(투명) 스타일 적용
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const opacity = Math.max(1 - scrollY / homeHeight, 0);
  home.style.opacity = opacity;
});

// Arrow Up
const arrowUp = document.querySelector('.arrow-up');
const arrowShow = homeHeight / 2;

window.addEventListener('scroll', () => {
  if (window.scrollY > arrowShow) {
    // 스크롤 좌표가 homeHeight 절반을 넘으면
    arrowUp.style.opacity = 1;
    arrowUp.style.pointerEvents = 'auto';
  } else {
    arrowUp.style.opacity = 0;
    arrowUp.style.pointerEvents = 'none';
  }
});

// 네비게이션 토글버튼 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// 네이케이션 메뉴 클릭시 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
