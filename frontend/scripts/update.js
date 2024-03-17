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
    console.log(id);
    const formData = new FormData();
        formData.append('id', id);
        formData.append('new_title', title);
        formData.append('new_description', description);
    try {
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

// const addNews = async (title, description) => {
//     const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//     try {
//         const result = await axios.post(
//             "http://localhost/news-website/backend/create.php",
//             formData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data" 
//                 }
//             }
//             );

//         if (result.data.status == "Success")
//         {
//            container.html(container.html()+ `<div class="flex column center card secondary-bg" id="news-card">
//            <img src="./assets/channels4_profile.jpg" alt="news" />
//            <h3>${title}</h3>
//            <p>${description}</p>
//            <div class="flex gap">
//                <button class="btn">Edit</button>
//                <button class="btn">Delete</button>
//            </div>
//        </div>`) 
//         }
//         else
//         {
//             console.log("Error")
//         }
//         } catch (error) {
//             console.log(error);
//     }  };




// addNewsButton.on('click', function() {
//     const title = $("#title");
//     const description = $("#description");
//     addNews(title.val(), description.val())
   
// });




