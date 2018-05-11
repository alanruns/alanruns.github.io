(function() {
  console.log('downloaded!');

  function fetchBlogPost(dateID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        debugger;
        console.log(this.responseXML.title);
      }
      xhr.open('GET', `/posts/${dateID}.html`);
      xhr.responseType = "document";
      xhr.send();
    });
  }

  async function getBlogPosts(){
    let blogDate = moment("2018-05-10");
    const today = moment();

    while(blogDate.isSameOrBefore(today)) {
      let blogPostText;
      console.log('before await');
      try {
        blogPostText = await fetchBlogPost(blogDate.format('YYYY-MM-DD')); 
      } catch (e) {
        blogPostText = '';
      }
      console.log('after await');
      console.log(blogPostText);
      blogDate = blogDate.add(1, 'day');
    }
  }

  getBlogPosts();
})();
