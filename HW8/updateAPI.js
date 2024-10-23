//Update data to API Function
function updateDataToAPI(url, id, data, callback) {
    fetch(`${url}/${id}`, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
    .then(response =>{
        if(!response.ok){
            throw new Error('Error when updating data');
        }else {
            return response.json();
        }
    })
    .then(result => {
        callback(null, result);
    })
    .catch(error => {
        callback(error, null);
    });
}
function handleUpdateProduct(error, result) {
    if(error){
        console.error('Error when updating product:', error.message);
    }else{
        console.log('Update product successfully:', result);
    }
}
const url = "https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel";
const id = "2";
const updateData = {
    img: "https://www.upsieutoc.com/images/2020/07/14/1.jpg",
    name: "Muong Thanh",
    price: "$10120/night",
    location: "Hanoi",
    description: "Hotel 2 description",
};
updateDataToAPI(url, id, updateData, handleUpdateProduct);