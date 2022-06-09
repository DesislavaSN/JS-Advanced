function getArticleGenerator(articles) {

    const content = document.getElementById('content');
   
    return function (){

        let article = articles.shift();
        // console.log(article != undefined);
        if (article != undefined) {
            const element = document.createElement('article');
            element.textContent = article;
            content.appendChild(element);
        }
    }
}
