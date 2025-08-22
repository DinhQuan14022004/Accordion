const items=document.querySelectorAll(".container__item");
items.forEach((item) =>{

        const show= item.querySelector(".container__question");
      const answer=item.querySelector(".container__answer");
      show.addEventListener("click", () =>{
        answer.classList.toggle("show");

      })


    })
