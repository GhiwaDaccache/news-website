const addButton = $("#add-btn");
const addNewsButton = $("#news-add");
const conatiner = $("#container");


addButton.on('click', function() {
    $('#popup').removeClass('hidden');
});

const addNews = async (title, description) => {
    const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
    try {
        const result = await axios.post(
            "http://localhost/news-website/backend/create.php",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data" 
                }
            }
            );

        if (result.data.status == "Success")
        {
           container.html(container.html()+ `<div class="flex column center card secondary-bg" id="news-card">
           <img src="./assets/channels4_profile.jpg" alt="news" />
           <h3>${title}</h3>
           <p>${description}</p>
           <div class="flex gap">
               <button class="btn">Edit</button>
               <button class="btn">Delete</button>
           </div>
       </div>`) 
        }
        else
        {
            console.log("Error")
        }
        } catch (error) {
            console.log(error);
    }  };




addNewsButton.on('click', function() {
    const title = $("#title");
    const description = $("#description");
    addNews(title.val(), description.val())
   
});




