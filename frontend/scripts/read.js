const container = $("#container");


axios.get(`http://localhost/news-website/backend/read.php`)
  .then(response => {
    const news = response.data.news;
    container.html("");
    let cont = ""
    $.each(news, function(index, element) {
        cont += `<div class="flex column center card secondary-bg" id="news-card">
        <img src="./assets/channels4_profile.jpg" alt="news" />
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <div class="flex gap">
            <button class="btn edit-btn" id="edit_${element.id}">Edit</button>
            <button class="btn delete-btn" id="delete_${element.id}">Delete</button>
        </div>
    </div>`
    });
    
    container.html(cont);
});
