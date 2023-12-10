document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.reddit.com/r/all/top.json?limit=10')
        .then(response => response.json())
        .then(data => {
            const posts = data.data.children;
            const list = document.getElementById('redditPosts');
        
            posts.forEach(post => {
                const listItem = document.createElement('li');
                const postLink = document.createElement('a');
            
                postLink.href = `https://reddit.com${post.data.permalink}`;
                postLink.textContent = post.data.title;
                postLink.target = "_blank";
            
                listItem.appendChild(postLink);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading Reddit posts:', error));
});
