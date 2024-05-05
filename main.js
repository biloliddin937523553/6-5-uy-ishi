let link = 'https://fakestoreapi.com/products?limit=10'
let fetchDate = fetch(link)
.then((res) => (res.json()))
.then((data)=> render(data));

let cards = document.querySelector('#cards')

function render(a) {
    console.log(a);
    
    a.forEach(e => {
        console.log(e);

        const card = document.createElement('div');
        const title = document.createElement('h1');
        const price = document.createElement('p');
        const category = document.createElement('p');
        const id = document.createElement('p');
        const rate = document.createElement('p');
        const count = document.createElement('p');
        const description = document.createElement('p');
        const image = document.createElement('img');

        title.textContent = '' + e.title;
        price.textContent = 'Price: '+ e.price;
        category.textContent = 'Category: '+e.category;
        id.textContent = 'Id: '+e.id;
        rate.textContent = 'Rate: '+e.rating.rate;
        count.textContent = 'Count: '+e.rating.count;
        description.textContent = 'Description: '+e.description;
        image.src = e.image;



        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(rate);
        card.appendChild(count);
        card.appendChild(image);
        // card.appendChild(h1)

        cards.appendChild(card);

    });
}

