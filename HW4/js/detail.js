// Get parameter from URL
function getQuery(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function Display detail of hotel
function displayDetail() {
    const id = getQuery('id');

    const hotelList = getHotel();
    const currentHotel = hotelList.find(hotel => hotel.id === id);

    if (currentHotel) {
        const hotelDetail = document.getElementById('div_details');
        hotelDetail.innerHTML = `
            <div class="div_img">
                <img src="${currentHotel.image}" alt="hotel" id="img">
            </div>
            <div class="div_des">
                <p class="name">${currentHotel.name}</p>
                <p class="location">${currentHotel.location}</p>
                <p>${currentHotel.description}</p>
                <p class="price">${currentHotel.price} /night</p>
                <p>Rating: ${currentHotel.rating}</p>
                <button class="button" id="btn">Book Now</button>
            </div>
        `;
    } else {
        console.log('Hotel not found');
    }
}

// Get hotel from local storage
function getHotel() {
    const hotelList = JSON.parse(localStorage.getItem('listHotel'));
    return hotelList ? hotelList : [];
}
document.addEventListener('DOMContentLoaded', displayDetail);