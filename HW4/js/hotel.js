var hotel = [
    {
        id : "AP1",
        image: 'img/hotel1.png',
        name: 'Park',
        location: 'Hyderabad',
        description: 'The Park Hotel is a 5-star hotel in Hyderabad, India. Located in the heart of the city, the hotel is in close proximity to the city’s business and shopping centres.',
        price: "$500",
        rating: 4.5,
    },
    {
        id : "AP2",
        image: 'img/hotel2.png',
        name: 'Taj',
        location: 'Mumbai',
        description: 'The Taj Mahal Palace Hotel is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba region of Mumbai, Maharashtra, India, situated next to the Gateway of India.',
        price: "$600",
        rating: 4.8,
    },
    {
        id : "AP3",
        image: 'img/hotel3.png',
        name: 'Oberoi',
        location: 'Delhi',
        description: 'The Oberoi, New Delhi is an iconic luxury hotel in New Delhi. It is located in Dr. Zakir Hussain Marg, close to the city center, and is a member of Leading Hotels of the World.',
        price: "$700",
        rating: 4.9,
    }   
    
];

// Save hotel to local storage
function Save(){
    localStorage.setItem('listHotel',JSON.stringify(hotel))
}
// Load hotel
function load(){
    hotel = JSON.parse(localStorage.getItem('listHotel'));
}
if (localStorage.getItem("listHotel") != null) {
    load();
}
Save();
var listLocal = function(){
    var card = document.getElementById('card');
    for(i = 0; i < hotel.length; i++) {
        var currentHotel = JSON.parse(JSON.stringify(hotel[i]));
        card.innerHTML += `
        <div class = "div_hotel">
            <img src="${currentHotel.image}" alt="hotel" id = "img">
            <p class = "name">${currentHotel.name}</p>
            <p class = "location">${currentHotel.location}</p>
            <p>${currentHotel.description}</p>
            <p class = "price">${currentHotel.price} /night</p>
            <p>Rating: ${currentHotel.rating}</p>
            <button class = "button" id = "btn">Book Now</button>
            <a href = "detail.html?id=${currentHotel.id}"><button class = "button" id = "btn_view"> View Detail</button></a>
        </div>
        `
    }
}
listLocal();

