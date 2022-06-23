// 2. Art Gallery 

class ArtGallery {
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {"picture":200, "photo":50, "item":250 };
        this.listOfArticles  = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        articleModel = articleModel.toLowerCase();
        if(!this.possibleArticles.hasOwnProperty(articleModel)){
            throw new Error("This article model is not included in this gallery!");
        }

        const article = {
            model: articleModel,
            name: articleName,
            quantity,
        }

        const foundArticle = this.listOfArticles.find(a => a.name == articleName);
        if (foundArticle != undefined && foundArticle.model == articleModel){
            foundArticle.quantity += quantity;
        } else {
            this.listOfArticles.push(article);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest (guestName, personality){

        const foundGuest = this.guests.find(g => g.guestName == guestName);
        if (foundGuest != undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;
        if (personality == 'Vip') {
            points += 500;
        } else if(personality == 'Middle'){
            points = 250;
        }

        const guestRecord = {
            guestName, 
            points, 
            purchaseArticle: 0
        }

        this.guests.push(guestRecord);
        return `You have successfully invited ${guestName}!`

    }

    buyArticle (articleModel, articleName, guestName){
        articleModel = articleModel.toLowerCase();
        const foundArticle = this.listOfArticles.find(a => a.name == articleName);
        const foundGuest = this.guests.find(g => g.guestName == guestName);

        if (foundArticle == undefined || foundArticle.model != articleModel) {
            throw new Error("This article is not found.");
        }

        if (foundArticle.quantity == 0) {
            throw new Error(`The ${articleName} is not available.`);
        }

        if (foundGuest == undefined) {
            throw new Error("This guest is not invited.");
        }

        // console.log(this.possibleArticles[articleModel]);  
        // console.log(foundGuest.points);
        if (foundGuest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        } 
       
        foundGuest.points -= this.possibleArticles[articleModel];
        foundArticle.quantity -= 1;
        foundGuest.purchaseArticle += 1;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo (criteria){
        let res = [];
        // console.log(this.listOfArticles);
        if (criteria == 'article') {
            res.push("Articles information:");
            this.listOfArticles.forEach(a => res.push(`${a.model} - ${a.name} - ${a.quantity}`));
            return res.join('\n');
        } else {
            // criteria == 'guest':
            // console.log(this.guests);
            res.push("Guests information:");
            this.guests.forEach(g => res.push(`${g.guestName} - ${g.purchaseArticle} `));
            return res.join('\n');
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
