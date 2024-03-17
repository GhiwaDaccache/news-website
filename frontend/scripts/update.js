const editNewsButton = $("#news-edit");

$(document).on('click', '.edit-btn', function(event) {
    const buttonId = event.target.id;
    const newsId = buttonId.split('_')[1];
    
    axios.get(`http://localhost/news-website/backend/read.php?news_id=${newsId}`)
        .then(response => {
            const news = response.data.news;
            $('#edit-id').val(news[0].id);
            $('#edit-title').val(news[0].title);
            $('#edit-description').val(news[0].description);
            $('#edit-popup').removeClass('hidden');
        });
});

const editNews = async (id, title, description) => {
    const formData = new FormData();
        formData.append('id', id);
        formData.append('new_title', title);
        formData.append('new_description', description);
    try {
        console.log(formData);
        const result = await axios.post(
            "http://localhost/news-website/backend/update.php",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            }
            );

        if (result.data.status == "Success")
        {
            console.log("UPDATED")
        }
        else
        {
            console.log("Error")
        }
        } catch (error) {
            console.log(error);
    }  };




editNewsButton.on('click', function() {
    const id = $("#edit-id");
    const title = $("#edit-title");
    const description = $("#edit-description");
    editNews(id.val(), title.val(), description.val())
}); 




