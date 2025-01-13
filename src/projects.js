// 'use strict';

// 프로젝트 필터링 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  //   console.log(filter);

  if (filter == null) {
    return;
  }

  handleActiveSelection(event.target);

  filterProjects(filter);
});

function handleActiveSelection(target) {
  // Active 메뉴 재설정
  const currentCategory = document.querySelector('.category--selected');
  currentCategory.classList.remove('category--selected');
  console.log(target);
  target.classList.add('category--selected');
}

// 프로젝트 필터링
function filterProjects(filter) {
  projectsContainer.classList.add('anim-out');

  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}
