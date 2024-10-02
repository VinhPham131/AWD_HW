var hotelAdmin = function() {
    var hotel = JSON.parse(localStorage.getItem('listHotel'));
    var listHotel = "";
    for (i = 0 ; i < hotel.length; i++) {
        var data = JSON.parse(JSON.stringify(hotel[i]));
        listHotel = '<tr class = "tr_body">';
        listHotel += '<td>' + data.id + '</td>';
        listHotel += '<td>' + data.name + '</td>';
        listHotel += '<td>' + data.location + '</td>';
        listHotel += '<td><img src="../' + data.image + '" alt="" style="width: 200px;"></td>';
        listHotel += '<td class = "td_des">' + data.description + '</td>';
        listHotel += '<td>' + data.price + '</td>';
        listHotel += '<td>' + data.rating + '</td>';
        listHotel += '<td><button onclick="updateHotel(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateHotel">Edit</button>';
        listHotel += '<button onclick="deleteHotel(' + i + ')" class="btn ml-1 btn-outline-warning"</button>Delete</td>';
        listHotel += '</tr>';

        document.getElementById("tbody").innerHTML += listHotel;
    }
}

// Add Apartment
var addApartment = function () {
    var Apartment = {
        id: "AP" + parseInt(hotel.length + 1),
        name: document.getElementById("name").value,
        location: document.getElementById("location").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        rating: document.getElementById("rating").value
    }
    hotel.push(Apartment);
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    window.location.reload();
}

// Delete Apartment
var deleteHotel = function (i) {
    hotel.splice(i, 1);
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    window.location.reload();
}

// Update Apartment
var updateHotel = function (i) {
    var k = hotel[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("locationd").value = k.location;
    document.getElementById("imaged").value = k.image;
    document.getElementById("descriptiond").value = k.description;
    document.getElementById("priced").value = k.price;
    document.getElementById("ratingd").value = k.rating;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger" onclick="submitUpdate(' + i + ')">Submit</button>'
}
var submitUpdate = function (i) {
    var k = hotel[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.location = document.getElementById("locationd").value;
    k.image = document.getElementById("imaged").value;
    k.description = document.getElementById("descriptiond").value;
    k.price = document.getElementById("priced").value;
    k.rating = document.getElementById("ratingd").value;
    localStorage.setItem('listHotel', JSON.stringify(hotel));
    window.location.reload();
}
hotelAdmin();