document.getElementById("btn_search").addEventListener("click", () => {
    const checkin = new Date(document.getElementById("checkin").value).getTime() / 1000;
    const checkout = new Date(document.getElementById("checkout").value).getTime() / 1000;
    
    const adults = parseInt(document.getElementById("adults").value) || 0;
    const children = parseInt(document.getElementById("children").value) || 0;
    const rooms = parseInt(document.getElementById("rooms").value) || 0; 

    // Fetch data from API
    fetch('https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Room')
        .then(response => response.json())
        .then(bookings => {
            // Filter data based on criteria
            const filteredBookings = bookings.filter(booking => {
                const departDay = new Date(booking.departday).getTime() / 1000;
                const arriveDay = new Date(booking.arriveday).getTime() / 1000;
                const roomId = booking.id;
                return (    
                    (!checkin || arriveDay <= checkin) &&
                    (!checkout || departDay >= checkout) &&
                    (!adults || booking.adult >= adults) &&
                    (!children || booking.children >= children) &&
                    (!rooms || roomId == rooms)
                );
            });

            // Display results
            displayResults(filteredBookings);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

// Function to display search results in div_result
function displayResults(bookings) {
    const divResult = document.getElementById("div_result");
    divResult.innerHTML = ''; // Clear previous results

    if (bookings.length === 0) {
        divResult.innerHTML = "<p style = 'color: white'>No results found.</p>";
        return;
    }

    bookings.forEach(booking => {
        const bookingElement = document.createElement("div");
        bookingElement.classList.add("booking-card");
        bookingElement.innerHTML = `
            <h3>Booking ID: ${booking.id}</h3>
            <img src="${booking.image}" id = "search_img" />
            <h4>${booking.name}</h4>
            <p>Price: ${booking.price}</p>
            <p>Rating: ${booking.rating}</p>
            <p>Description: ${booking.description}</p>
            <p>Adults: ${booking.adult}</p>
            <p>Children: ${booking.children}</p>
            <p>Check-in Date: ${booking.arriveday}</p>
            <p>Check-out Date: ${booking.departday}</p>
            <p>Room available: ${booking.room}</p>
        `;
        divResult.appendChild(bookingElement);
    });
}
// Function to clear search fields
function clearSearch() {
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("adults").value = "";
    document.getElementById("children").value = "";
    document.getElementById("rooms").value = "0";
}