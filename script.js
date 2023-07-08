const pages = document.querySelectorAll(".page");
const header_element = document.querySelectorAll(".element-header");
const education_cards = document.querySelectorAll(".education-card");
const education_cards_title = document.querySelectorAll(".education-card-title");
const dots = document.querySelectorAll(".dot");
let state_page = 0;

change_page = (index) => {
  pages.forEach(
    pages => (pages.style.transform = `translateX(${-(index*100)}%)`)
  )
  dots.forEach(
    (dots,i) => ((index===i)? dots.style.background = '#2B2730': dots.style.background = 'white')
  )
  state_page = index;
  header_element.forEach(
    (head,i) => ((index===i)? head.style.textDecoration = 'underline' :  head.style.textDecoration = 'none')
  )
}

chage_education_card = (index) => {
  education_cards.forEach(
    (card,i) => ((index===i)? card.style.height = `39vh`: card.style.height = `3vh`)
  )
  education_cards_title.forEach(
    (title,i) => ((index===i)? '': title.style.fontSize = `0px`)
  )
}

defult_education_card = () => {
  education_cards.forEach(
    card => (card.style.height = `15vh`)
  )
  education_cards_title.forEach(
    title => (title.style.fontSize = `60px`)
  )
}