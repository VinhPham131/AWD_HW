window.addEventListener("load", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get("bookingId");

    if (bookingId) {
        fetch(`https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Booking/${bookingId}`)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch booking data.");
                return response.json();
            })
            .then(bookingData => {
                console.log("Booking Data:", bookingData);

                // Populate billing section
                document.getElementById("arrival").textContent = bookingData.ArriveDay;
                document.getElementById("departure").textContent = bookingData.DepartDay;
                const lengthOfStay = calculateLengthOfStay(bookingData.ArriveDay, bookingData.DepartDay);
                document.getElementById("lengthOfStay").textContent = lengthOfStay + " nights";
                document.getElementById("guests").textContent = bookingData.Adult + bookingData.Children;
                document.getElementById("room").textContent = bookingData.Name;

                const additionalCharges = bookingData.Features;
                const additionalChargesTotal = calculateAdditionalCharges(additionalCharges);
                document.getElementById("additionalCharges").textContent = "$" + additionalChargesTotal;

                // Fetch room data
                return fetch(`https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Room/${bookingData.HotelID}`)
                    .then(response => {
                        if (!response.ok) throw new Error("Failed to fetch room data.");
                        return response.json();
                    })
                    .then(roomData => {
                        const price = parseFloat(roomData.price);
                        const hotelFee = price * lengthOfStay;
                        document.getElementById("hotelFee").textContent = "$" + hotelFee;

                        // Calculate and display total cost
                        const totalCost = hotelFee + additionalChargesTotal;
                        document.getElementById("totalCost").textContent = "$" + totalCost;

                    })
                    .catch(error => {
                        console.error("Error loading room data:", error);
                        alert("Error loading room data.");
                    });
            })
            .catch(error => {
                console.error("Error loading booking data:", error);
                alert("Error loading booking data.");
            });
    }
});

function calculateAdditionalCharges(features) {
    let total = 0;
    for (const key in features) {
        if (features.hasOwnProperty(key)) {
            total += parseFloat(features[key]);
        }
    }
    return total;
}

// Helper function to calculate length of stay
function calculateLengthOfStay(arrival, departure) {
    const startDate = new Date(arrival);
    const endDate = new Date(departure);
    const diffTime = Math.abs(endDate - startDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}


function submitGuestInfo() {    

    // Combine guest and billing information
    const combinedInfo = {
        Firstname: document.getElementById("firstName").value,
        Lastname: document.getElementById("lastName").value,
        Phone: document.getElementById("number").value,
        Email: document.getElementById("email").value,
        Address: document.getElementById("address1").value,
        Note: document.getElementById("note").value,
        Arriveday: document.getElementById("arrival").textContent,
        Departday: document.getElementById("departure").textContent,
        night: document.getElementById("lengthOfStay").textContent,
        room: document.getElementById("room").textContent,
        guest: document.getElementById("guests").textContent,
        roomfee: document.getElementById("hotelFee").textContent,
        charge: document.getElementById("additionalCharges").textContent,
        total: document.getElementById("totalCost").textContent
    };

    // Send combined info to API via POST method
    fetch("https://6721b76e98bbb4d93ca964e6.mockapi.io/T_Billing", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(combinedInfo)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to submit guest and billing information");
        }
    })
    .then(data => {
        console.log("Guest and billing information submitted successfully:", data);
        alert("Booking Room successfully!");

        // Clear input fields
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("number").value = '';
        document.getElementById("email").value = '';
        document.getElementById("address1").value = '';
        document.getElementById("note").value = '';

        window.location.href = "home.html";
    })
    .catch(error => {
        console.error("Error submitting guest and billing information:", error);
        alert("Error submitting guest and billing information.");
    });
}
