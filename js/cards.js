document.addEventListener("DOMContentLoaded", function() {
   console.log("I'm here")
    // Fetch the JSON data
    fetch('../json/cards.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.getElementById('cards');
        let cardsHTML = '';

        // Iterate over each card
        data.cards.forEach(card => {
            cardsHTML += `
                <div class="card">
                    <h2>${card.title}</h2>
                    <h3>${card.subtile}</h3>
                    <img src="${card.image}" alt="${card.title}">
                </div>
            `;
        });

        // Insert the generated HTML into the DOM
        cardsContainer.innerHTML = cardsHTML;
    })
    .catch(error => console.error('Error loading cards:', error)); 
});
