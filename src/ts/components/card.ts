

export const mouseOverImg = function () {

  


  const cards = document.querySelectorAll(".card");
  // const searchSvgs = document.querySelectorAll(".card__search-svg");

  // cards.forEach((card) => {
  //   card.addEventListener("mouseover", () => {
  //     searchSvgs.forEach((svg) => {
  //       svg.classList.toggle("card__search-svg_visible");
  //     })
  //   });
  // });

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      cards.forEach((card) => {
        card.classList.remove('card_active');
      })

      card.classList.add("card_active");
    })
  })

  
};
