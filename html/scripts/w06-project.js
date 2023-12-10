async function fetchQuotes() {
  const selectedFilter = document.getElementById('sortBy').value;

  let apiUrl;
  let imageUrl;

  switch (selectedFilter) {
    case 'love':
      apiUrl = 'https://api.quotable.io/random?tags=love';
      imageUrl = 'https://source.unsplash.com/featured/?love';
      break;
    case 'inspiring':
      apiUrl = 'https://api.quotable.io/random?tags=inspirational';
      imageUrl = 'https://source.unsplash.com/featured/?landscape';
      break;
    case 'random':
      apiUrl = 'https://api.quotable.io/random';
      imageUrl = 'https://source.unsplash.com/featured/?travel';
      break;
    default:
      return; // Do nothing if no valid filter selected
  }

  try {
    // Fetch a random quote based on the selected filter
    const quoteResponse = await fetch(apiUrl);
    const quoteData = await quoteResponse.json();

    // Fetch random image and set it
    const imageResponse = await fetch(imageUrl);
    const imageSrc = imageResponse.url;
    document.getElementById('nature-image').src = imageSrc;

    // Set the quote content
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `<p>${quoteData.content} - ${quoteData.author}</p>`;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Initial fetch on page load
fetchQuotes();