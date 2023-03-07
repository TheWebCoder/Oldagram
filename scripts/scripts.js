const bodyEl = document.querySelector("body")
const getPosts = document.querySelector(".get-posts")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

getPosts.addEventListener("click", function(){
    bodyEl.innerHTML = ""
    for (let i = 0; i < posts.length; i++){
        bodyEl.innerHTML += `<section>
            <div class="post">
                <img class="post-profile-pic" src="${posts[i].avatar}">
                <div>
                    <p class="post-name">${posts[i].name}</p>
                    <p class="post-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-pic" src="${posts[i].post}">
            <div>
               <img class="icons" src="images/icon-heart.png">
               <img class="icons" src="images/icon-comment.png">
               <img class="icons" src="images/icon-dm.png"> 
            </div>
            <div class="post-details">
                <p class="bold-text">${posts[i].likes} Likes</p>
                <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </section>`
    }
})



