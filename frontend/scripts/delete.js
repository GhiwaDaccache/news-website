$(document).on('click', '.delete-btn', function(event) {
    const buttonId = event.target.id;
    const newsId = buttonId.split('_')[1];
    deleteNews(newsId);
});



const deleteNews = async (id) => {
    const result = await axios.get(
        `http://localhost/news-website/backend/delete.php?id=${id}`,
        )
        .then(response => {
            window.location.reload();
            });  
        };


