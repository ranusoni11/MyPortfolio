document.addEventListener('DOMContentLoaded', function () {

    const porgressBarValues = [
        {
            className: '.c .animation-content',
            widths: ["60px", "60px", "40px"]

        },
        {
            className: '.cpp .animation-content',
            widths: ["60px", "60px", "40px"]

        },
        {
            className: '.java .animation-content',
            widths: ["60px", "60px", "0px"]

        },
        {
            className: '.python .animation-content',
            widths: ["60px", "60px", "10px"]

        },
        {
            className: '.html .animation-content',
            widths: ["60px", "60px", "50px"]

        },
        {
            className: '.css .animation-content',
            widths: ["60px", "60px", "30px"]

        },
        {
            className: '.js .animation-content',
            widths: ["60px", "60px", "20px"]

        },
        {
            className: '.react .animation-content',
            widths: ["60px", "60px", "10px"]

        },
        {
            className: '.bootstrap .animation-content',
            widths: ["60px", "60px", "10px"]

        },
        {
            className: '.git .animation-content',
            widths: ["60px", "60px", "0px"]

        },
        {
            className: '.github .animation-content',
            widths: ["60px", "60px", "0px"]

        },
        {
            className: '.dsa .animation-content',
            widths: ["60px", "60px", "0px"]

        },
    ]

    let btnLeft = document.getElementById('bl');
    let btnRight = document.getElementById('br');
    let cards = document.querySelectorAll('.card-details');
    let frontCard = 5;

    const btnDisabled = () => {
        btnLeft.style.display = "block";
        btnRight.style.display = "block";
        if (frontCard <= 0) {
            btnLeft.style.display = "none";
        } else if (frontCard >= cards.length - 1) {
            btnRight.style.display = "none";
        }
    }

    const updateProgressBars = (frontCard) => {
        const activeCard = porgressBarValues[frontCard];

        const progressBarElement = document.querySelectorAll(activeCard.className + ' .level-points');

        progressBarElement.forEach((element, value) => {
            element.style.setProperty('--progress-width', '0px');

            void element.offsetWidth;

            element.style.setProperty('--progress-width', activeCard.widths[value]);
        })
    }
    const scroleCardItem = (frontCard) => {
        var flag = 0;

        cards.forEach((card) => {
            card.style.transform = "";
            card.style.zIndex = "";
            card.style.filter = "";
            card.style.opacity = "";
            card.style.backgroundColor = "";
        });

        cards[frontCard].style.transform = "none";
        cards[frontCard].style.zIndex = 1;
        cards[frontCard].style.filter = "blur(0px)";
        cards[frontCard].style.opacity = 1;
        cards[frontCard].style.background = "linear-gradient(45deg, rgba(233, 171, 219, 1) 0%, rgba(0, 9, 85, 1) 100%)";

        for (let i = frontCard + 1; i < cards.length; i++) {
            flag++;
            cards[i].style.transform = `translateX(${135 * flag}px) scale(${1 - 0.1 * flag}) perspective(16px) rotateY(-1deg)`;
            cards[i].style.zIndex = -flag;
            cards[i].style.filter = "blur(3px)";
            cards[i].style.opacity = flag > 2 ? 0 : 0.6;
            cards[i].style.backgroundColor = "transperant";
        }

        flag = 0;

        for (let i = frontCard - 1; i >= 0; i--) {
            flag++;
            cards[i].style.transform = `translateX(${-135 * flag}px) scale(${1 - 0.1 * flag}) perspective(16px) rotateY(1deg)`;
            cards[i].style.zIndex = -flag;
            cards[i].style.filter = "blur(5px)";
            cards[i].style.opacity = flag > 2 ? 0 : 0.6;
            cards[i].style.backgroundColor = "transperant";
        }

        updateProgressBars(frontCard);
        btnDisabled();
    }


    scroleCardItem(frontCard);

    btnLeft.onclick = function () {
        frontCard = frontCard - 1 < 0 ? 0 : frontCard - 1;
        scroleCardItem(frontCard);
    }

    btnRight.onclick = function () {
        frontCard = frontCard + 1 >= cards.length ? cards.length - 1 : frontCard + 1;
        scroleCardItem(frontCard);
    }

    btnDisabled();
});

