const posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/images/avatar-vangogh.jpg",
        post: "assets/images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        id: 2,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "assets/images/avatar-courbet.jpg",
        post: "assets/images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        id: 3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "assets/images/avatar-ducreux.jpg",
        post: "assets/images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedEl = document.getElementById("feed")
const likes = document.getElementById("likes")

function displayPosts(posts) {
    for (let i = 0; i < posts.length; i++) {
        appendPostsToFeed(posts[i])
    }
}

displayPosts(posts);

function appendPostsToFeed(posts) {

    const postId = `post-${posts.id}`;
    const heartIconId = `heart-icon-${postId}`;
    const likesElementId = `likes-${postId}`;

    let newPost = `
        <div class="container" id="${postId}">
            <article class="user-wrapper">
                <img class="user-avatar avatar" src="${posts.avatar}" alt="${posts.name} avatar">
                <div class="user-info-wrapper">
                    <h4 class="user-name">${posts.name}</h4>
                    <p class="user-location">${posts.location}</p>
                </div>
            </article>
            <img class="image-post" src="${posts.post}" alt="${posts.name} selfie painting">
            
            <article class="post-icons">
                <div class="post-icons-wrapper">
                    <img class="icon" id="${heartIconId}" src="assets/images/icon-heart.png">
                    <img class="icon" src="assets/images/icon-comment.png">
                    <img class="icon" src="assets/images/icon-dm.png">
                </div>
            
                
                <p class="likes" id="${likesElementId}">${posts.likes} likes</p>
                
                <p><span class="user">${posts.username}</span> ${posts.comment}</p>
            </article>
        </div>
    `

    feedEl.insertAdjacentHTML('beforeend', newPost);

    const heartIcon = document.getElementById(heartIconId);
    const likesElement = document.getElementById(likesElementId);

    heartIcon.addEventListener('click', function () {
        posts.likes++

        likesElement.textContent = `${posts.likes} likes`
    })
}