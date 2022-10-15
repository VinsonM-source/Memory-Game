const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, CardTwo
let disableDeck = fales;

function flipCard(e) {
    let clickedCard = e.target; //get user clicked card
    if(clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add('flip'); 
        if(!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector('img');
        cardTwoImg = cardTwo.querySelector('img');
        matchCards(cardOneImg. cardTwoImg);
    }
}

function matchCards(Img1, Img2) {
    if(Img1 === Img2) { //if two cards matched
        matchedCard++; //increment matched value by 1
        //if matched value is 52 it means user has all matched cards (52 * 2 = 104) 
        if(matchedCard == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000); //call shuffleCard after 1000ms
        }
        cardOne.removeEvenListiner("click", flipCard);
        cardTwo.removeEvenListiner("click", flipCard);
        cardOne = cardTwo = ""; //set both card value to blank
        return disableDeck = false;
    }
    //if two crdas not matched
    setTimeout(() =>{
        //add shake class to both card after 400ms
        cardOne.cardList.add("shake");
        cardTwo.cardList.add("shake");
    }, 400);
    setTimeout(() =>{
        //remove both shake and flip from both card after 1200ms
        cardOne.cardList.remove("shake", "flip");
        cardTwo.cardList.remove("shake", "flip");
        cardOne = cardTwo = ""; //set both card value to blank
        disableDeck = false;
    }, 1200);
}

function shuffleCard(){
    matchedCard = 0;
    cardOne = CardTwo = "";
    //create arry of 52 items and each item repeat twice
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    cards.sort(() => Math.random() > 0.5 ? 1 : -1); //sort array items randomly
    cards.forEach(card => { 
        card.cardList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = 
        card.addEventListener("click", flipCard);
    });
}

cards.forEach(card => { //add a click event to cards
    card.cardList.add("flip");
    card.addEventListener("click", flipCard);
});
