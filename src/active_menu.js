// 계획
// 1. 모든 section태그 요소들과 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해서 모든 section들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션 :
// 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 활성화 시킨다.
// 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 센셕을 선택

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
// console.log(sectionIds);
// console.log(sections);
// console.log(navItems);

const visibleSections = sectionIds.map(() => false);

let activeNavItem = navItems[0];

const options = {
  root: null,
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.95],
};

const callback = (entries) => {
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.9;

    const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);

    selectNavItem(navIndex);

    // console.log('entry.target.id : ', entry.target.id);
    console.log('index : ', index);
    // console.log('entry.target : ', entry.target);
    // console.log('entry.isIntersecting : ', entry.isIntersecting);
    // console.log('entry.intersectionRatio : ', entry.intersectionRatio);
    // console.log('visibleSections : ', visibleSections);
    // console.log('selectLastOne : ', selectLastOne);
    // console.log('navIndex : ', navIndex);
    // console.log('-----------------------------------');
  });
};

const observer = new IntersectionObserver(callback, options);

// 모든 섹션에 대해 observer 등록
sections.forEach((section) => observer.observe(section));

function findFirstIntersecting(array) {
  const index = array.indexOf(true);
  console.log('함수의 index : ', index);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}
