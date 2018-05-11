(function() {
  console.log('downloaded!');

  function fetchBlogPost(dateID) {
    return fetch(`/posts/${dateID}.html`);
  }

  async function getBlogPosts(){
    const today = new Date();
    let blogPostText;

    blogPostText = fetchBlogPost(10052018);
    console.log(blogPostText);
    debugger;
  }

  getBlogPosts();
})();
