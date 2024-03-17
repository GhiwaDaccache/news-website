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
            <button class="btn">Edit</button>
            <button class="btn">Delete</button>
        </div>
    </div>`
    });
    
    container.html(cont);
});