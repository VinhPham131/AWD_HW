//Remove data from API Function
function removeDataFromAPI (url, id, callback) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error when removing data');
        }else{
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
function handleRemoveProduct(error, result) {
    if(error){
        console.error('Error when removing product:', error.message);
    }else{
        console.log('Remove product successfully:', result);
    }
}
const url = "https://67190e6d7fc4c5ff8f4c42d6.mockapi.io/hotel";
const id = "1";
removeDataFromAPI(url, id, handleRemoveProduct);