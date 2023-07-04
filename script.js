const pages = document.querySelectorAll(".page");
const about_front = document.querySelectorAll(".detail-front");
const about_back = document.querySelectorAll(".detail-back");
const about_is_shown = [false,false,false,false,false];
let page_state = 0;

slide = (trans) => {
  page_state = trans/100;
  trans = -trans;
  pages.forEach(
    pages => (pages.style.transform = `translateY(${trans}%)`)
  )
}

show_about = (index) => {
  if(!about_is_shown[index]) {
    about_front.forEach(
      (front,i) => ((i===index)?front.classList.add("hide"):'')
    )
    about_back.forEach(
      (back,i) => ((i===index)?back.classList.add("show"):'')
    )
  }
  else {
    about_front.forEach(
      (front,i) => ((i===index)?front.classList.remove("hide"):'')
    )
    about_back.forEach(
      (back,i) => ((i===index)?back.classList.remove("show"):'')
    )
  }
  about_is_shown[index] = !about_is_shown[index];
}