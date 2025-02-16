AOS.init();
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".banner-mockup", { ...scrollRevealOption });
ScrollReveal().reveal(".banner-title", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".banner-des", { ...scrollRevealOption, delay: 700 });
ScrollReveal().reveal(".banner-container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".dress-item", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".dress-item:nth-child(2)", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".dress-item:nth-child(3)", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".dress-item:nth-child(4)", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".dress-item:nth-child(5)", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".dress-item:nth-child(6)", {
  ...scrollRevealOption,
  delay: 3500,
});
Fancybox.bind("[data-fancybox]", {});
var swiper1 = new Swiper(".album-slide", {
  effect: "coverflow",
  grabCursor: !0,
  centeredSlides: !0,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: !0,
  },
  autoplay: { delay: 3000 },
});
// $(".toggleAudio").on("click", function () {
//   $(this).find("i").toggleClass("ri-volume-up-fill");
//   audio = $("#audio");
//   audio[0].paused ? audio[0].play() : audio[0].pause();
// });
