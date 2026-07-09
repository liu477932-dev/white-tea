const pans = document.querySelectorAll(".pan,.yikuai,.syasinn1,.syasinn2,.tea-text4,.tea-text5,.tea-text6,.tea-text7");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            // 进入画面
            entry.target.classList.add("show");
        } else {
            // 离开画面
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});


pans.forEach(pan => {
    observer.observe(pan);
});




