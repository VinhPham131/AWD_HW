document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.querySelector(".features-container");

    fetch("https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Room")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const features = data[0].feature; // Assuming the features are in the first object

            for (const [feature, value] of Object.entries(features)) {
                const label = document.createElement("label");
                label.innerHTML = `<input type="checkbox" id="feature_${value}" name="feature" value="${feature}"> ${feature} (${value})`;
                featuresContainer.appendChild(label);
            }
        })
        .catch(error => {
            console.error("Error fetching features:", error);
        });
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const checkInDate = new Date(document.getElementById("checkInDate").value);
    const checkOutDate = new Date(document.getElementById("checkOutDate").value);
    const numAdults = parseInt(document.getElementById("numAdults").value);
    const numChildren = parseInt(document.getElementById("numChildren").value);
    const roomSelect = document.getElementById('rooms');
    const selectedRoomValue = roomSelect.value;
    const selectedRoomName = roomSelect.options[roomSelect.selectedIndex].text;

    if (!checkInDate || !checkOutDate || isNaN(checkInDate) || isNaN(checkOutDate)) {
        alert("Invalid check-in or check-out date. Please select valid dates.");
        return;
    }
    
    if (checkInDate < new Date()) {
        alert("Check-in date must be in the future. Please select a valid check-in date.");
        return;
    }

    if (checkOutDate <= checkInDate) {
        alert("Check-out date must be after the check-in date. Please select a valid check-out date.");
        return;
    }

    if (!numAdults || !numChildren || isNaN(numAdults) || isNaN(numChildren) || numAdults < 0 || numChildren < 0) {
        alert("Invalid number of adults or children. Please enter valid numbers.");
        return;
    }

    const selectedFeatures = Array.from(document.querySelectorAll("input[name='feature']:checked")).reduce((acc, checkbox) => {
        const featureName = checkbox.value;
        const featureValue = checkbox.id.split('_')[1]; // Assuming the id is in the format "feature_value"
        acc[featureName] = featureValue;
        return acc;
    }, {});

    const bookingData = {
        ArriveDay: checkInDate.toISOString().split('T')[0], 
        DepartDay: checkOutDate.toISOString().split('T')[0],
        Adult: numAdults,
        Children: numChildren,
        HotelID: selectedRoomValue,
        Name: selectedRoomName,
        Features: selectedFeatures
    };
    fetch(`https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Room/${selectedRoomValue}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Room fetch error: ${response.statusText}`);
        }
        return response.json();
    })
    .then(room => {
        let isValid = false;
        console.log(room);

        const arrivalDate = room.arriveday ? new Date(room.arriveday).getTime()/1000 : null;
        const departureDate = room.departday ? new Date(room.departday).getTime()/1000 : null;
        const bookingArrivalDate = bookingData.ArriveDay ? new Date(bookingData.ArriveDay).getTime()/1000 : null;
        const bookingDepartureDate = bookingData.DepartDay ? new Date(bookingData.DepartDay).getTime()/1000 : null;
        if (arrivalDate <= bookingArrivalDate && 
            departureDate >= bookingDepartureDate &&
            room.adult >= bookingData.Adult && 
            room.children >= bookingData.Children && 
            room.room > 0) {
            isValid = true;
        }
        console.log(isValid);
        console.log(arrivalDate, departureDate, bookingArrivalDate, bookingDepartureDate , room.adult, room.children, bookingData.Adult, bookingData.Children, room.room);

        if (isValid) {
            return fetch("https://6720c1d298bbb4d93ca5d4f3.mockapi.io/T_Booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            });
        } else {
            alert('The selected room is not available for the selected dates or does not meet the required criteria. Please try again.');
            return Promise.reject("Invalid booking criteria");
        }
    })
    .then(response => {
        if (!response || !response.ok) {
            throw new Error('Booking creation failed.');
        }
        return response.json();
    })
    .then(result => {
        alert("Booking created successfully! Booking ID: " + result.id);
        window.location.href = `payment.html?bookingId=${result.id}`;
    })
    .catch(error => {
        console.error("Error creating booking:", error);
    });
});

// Pre-select room based on URL parameter
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("roomId");
    if (roomId) {
        document.getElementById("rooms").value = roomId;
    }
});