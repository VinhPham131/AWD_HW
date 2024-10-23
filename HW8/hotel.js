url = "https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel"
// Hàm gọi API để lấy dữ liệu sản phẩm
function getProducts(callback) {
    fetch("https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel")
        .then(response => response.json())
        .then(data => callback(null, data))
    .catch(error => callback(error, null));
}
    
// Callback function để xử lý kết quả trả về từ API
function handleProducts(error, data) {
    if (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
        const productTableBody = document.getElementById('hotelTableBody');
        data.forEach(hotel => {
            const row = `<tr>
            <td>${hotel.id}</td>
            <td><img src="${hotel.image}" width="100"></td>
            <td>${hotel.name}</td>
            <td>${hotel.price}</td>
            <td>${hotel.location}</td>
            <td>${hotel.description}</td>
            </tr>`;
            productTableBody.innerHTML += row;
        });
    }
}
    
// Gọi hàm getProducts với callback handleProducts
getProducts(handleProducts);

