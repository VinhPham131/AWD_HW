const apiUrl = 'https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel'; 

        // Function to save product (add new or update) with a callback
        function saveHotel() {
            const image = document.getElementById('image').value;
            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const location = document.getElementById('location').value;
            const description = document.getElementById('description').value;

            const hotelData = {
                img: image,
                name,
                price,
                location,
                description,
            };

            // Send data to API
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hotelData)
            })
            .then(response => response.json())
            .then(data => {
                handleAddHotelCallback(null, data)
            })
            .catch(error => {
                handleAddHotelCallback(error, null)
            });
        }

        // Callback function to handle adding a Hotel
        function handleAddHotelCallback(error, data) {
            if (error) {
                console.error('Error adding hotel:', error);
            } else {
                console.log('Hotel added:', data);
                // addHotelToTable(data);
                $('#exampleModal').modal('hide');
                clearForm();  
            }
        }

        // Function to add Hotel data to the table dynamically
        // function addHotelToTable(hotel) {
        //     const tableBody = document.getElementById('hotelTableBody');
        //     const row = `
        //         <tr>
        //             <td>${hotel.id}</td>
        //             <td><img src="${hotel.img}" alt="${hotel.name}" width="50"></td>
        //             <td>${hotel.name}</td>
        //             <td>${hotel.price}</td>
        //             <td>${hotel.location}</td>
        //             <td>${hotel.description}</td>
        //         </tr>
        //     `;
        //     tableBody.innerHTML += row;
        // }

        // Function to clear the form after submission
        function clearForm() {
            document.getElementById('id').value = '';
            document.getElementById('image').value = '';
            document.getElementById('name').value = '';
            document.getElementById('price').value = '';
            document.getElementById('location').value = '';
            document.getElementById('description').value = '';
        }
        