const pages = document.querySelectorAll(".page");
let page_state = 0;

slide = (trans) => {
  page_state = trans/100;
  trans = -trans;
  pages.forEach(
    pages => (pages.style.transform = `translateY(${trans}%)`)
  )
}