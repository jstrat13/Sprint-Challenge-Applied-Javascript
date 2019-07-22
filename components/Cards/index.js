// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function createCard() { 
    let card = document.createElement('div');
        card.classList.add('card');
      
        let headline = document.createElement('div');
            headline.classList.add('headline');
            headline.textContent = '{Headline of article}';
            card.appendChild(headline);

        let author = document.createElement('div');
            author.classList.add('author');
            card.appendChild(author);

                let imgC = document.createElement('div');
                imgC.classList.add('img-container');
                author.appendChild(imgC);

                    let pic = document.createElement('img');
                    pic.src = '{url of authors image}';
                    imgC.appendChild(pic);

        let autName = document.createElement('span');
        autName.textContent = 'By {authors name}';
        card.appendChild(autName);


        
            
        return card;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then ((axiosData) => {
        console.log('axiosData: ', axiosData.data);
        new Card(axiosData)
    })
    .catch((err) => {
        console.log('error: ', err);
    })

console.log(createCard())