"use strict";
const changeCard = () => {
    const command = document.querySelector(".cards-block");

    const changePhoto = (event) => {
        if (event.target.closest(".card")) {
            console.log(event);

        }
    };

    command.addEventListener("mouseover", evt => changePhoto(evt));

    command.addEventListener("mouseout", evt => changePhoto(evt));
};

changeCard();
