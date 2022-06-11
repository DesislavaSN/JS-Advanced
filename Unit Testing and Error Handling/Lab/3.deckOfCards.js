function deckOfCards(cards) {

    let result = [];

  for (let cardInput of cards) {
    let face = cardInput.slice(0, -1);
    let suit = cardInput.slice(-1);
    
    try {
        let card = createCard(face, suit);
        result.push(card);
    } catch (error) {
        result = ['Invalid card: ' + cardInput];
    }
  }
  console.log(result.join(' '));

  function createCard(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (faces.includes(face) == false) {
      throw new Error("Face is incorrect! " + face);
    }

    if (!suits.hasOwnProperty(suit)) {
      throw new Error("Suit is incorrect! " + suit);
    }

    const cards = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };

    return cards;
  }
}
