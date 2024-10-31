const url = 'https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Room';

// Function to get the hotel ID from the URL
function getHotelIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function fetchHotelDetails(hotelId) {
    return new Promise((resolve, reject) => {
        fetch(`${url}/${hotelId}`)
            .then(response => {
                if (!response.ok) {
                    reject("Error fetching hotel details");
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
function displayHotelDetails() {
    const hotelId = getHotelIdFromUrl();

    // Call fetchHotelDetails and handle the response with Promise chaining
    fetchHotelDetails(hotelId)
        .then(data => {
            // Create a string to hold the HTML for the features
            let featuresHtml = '';
            for (const [feature, value] of Object.entries(data.feature)) {
                featuresHtml += `<li>${feature}</li>`;
            }

            const details = `
                <div class = "div-name">
                    <h1 class = "name">${data.name}</h1>
                </div>    
                <div class = "detail">
                    <div>
                    <img src="${data.image}" alt="Hotel Image" class = "img">
                    </div>
                    <div class = "info">
                        <div class = "price-rating">
                            <p>Price: $${data.price}/night</p>
                            <p>Rating: ${data.rating}</p>
                        </div>
                        <p class = "description">Description: ${data.description}</p>
                        <div class = "div-feature">
                            <h2>Additional Features</h2>
                            <ul>${featuresHtml}</ul>
                        </div>
                    </div>
                    
                </div>
                
                
            `;
            document.getElementById('div_details').innerHTML = details;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById('div_details').innerHTML = "<p>Error loading hotel details.</p>";
        });
}

displayHotelDetails();