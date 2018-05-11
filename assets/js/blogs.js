(function() {
  console.log('downloaded!');

  function fetchBlogPost(dateID) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(this.responseXML.body.firstElementChild);
      }
      xhr.open('GET', `/posts/${dateID}.html`);
      xhr.responseType = "document";
      xhr.send();
    });
  }

  async function getBlogPosts(){
    let blogDate = moment("2018-05-10");
    const today = moment();

    const mainBody = document.querySelector('body main');
    while(blogDate.isSameOrBefore(today)) {
      let blogPost;
      console.log('before await');
      try {
        blogPost = await fetchBlogPost(blogDate.format('YYYY-MM-DD')); 
      } catch (e) {
        blogPost = '';
      }

      if (blogPost) {
        mainBody.appendChild(blogPost);
      }
      console.log('after await');
      console.log(blogPostText);
      blogDate = blogDate.add(1, 'day');
    }
  }

  getBlogPosts();
})();
