const form = document.querySelector('form'); 
const removeBtn = document.querySelector('#remove'); 
const gifsContainer = document.querySelector('#container ul'); 

async function searchGiphy(searchTerm) {
  try {
    // Make the AJAX request to the Giphy API using Axios
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=s0V1ROZprFXbQ2OhvUoVueRu0kX7jC1s&q=${searchTerm}&limit=1`);
    console.log(response);
    // Extract the first gif from the response data
    const gifUrl = response.data.data[0].images.downsized_medium.url;

    // Create the img element and append it to the list
    const gifImg = document.createElement('img');
    gifImg.setAttribute('src', gifUrl);
    const gifItem = document.createElement('li');
    gifItem.appendChild(gifImg);
    gifsContainer.appendChild(gifItem);
  } catch (error) {
    alert('Error please try again!');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const searchTerm = document.getElementById('submit').value; 
  searchGiphy(searchTerm);
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  removeBtn.addEventListener('click', () => {
    // Remove all the list items from the unordered list
    gifsContainer.innerHTML = '';
  });
});


