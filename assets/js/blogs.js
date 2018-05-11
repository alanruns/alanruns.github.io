(function() {
  console.log('downloaded!');

  function fetchBlogPost(dateID) {
    return fetch(`/posts/${dateID}.html`);
  }

  async function getBlogPosts(){
    let blogDate = moment("2018-05-10");
    const today = moment();

    while(blogDate.isSameOrBefore(today)) {
      let blogPostText;
      blogPostText = await fetchBlogPost(blogDate.format('YYYY-MM-DD')); 
      console.log(blogPostText);
      blogDate = blogDate.add(1, 'day');
    }
  }

  getBlogPosts();
})();
