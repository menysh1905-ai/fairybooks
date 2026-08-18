// ==========================
// FAQ
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


// ==========================
// Кнопка "Наверх"
// ==========================

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

console.log("JavaScript загружен");
// ==========================
// Анимация секций при прокрутке
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

sections.forEach(section=>{
    observer.observe(section);
});