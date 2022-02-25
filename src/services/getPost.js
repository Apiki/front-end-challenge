async function getPost(setPost, slug) {
    try {
      const response = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();      
      console.log(data) 
      setPost(data);
      
      
      return data;
    } catch (error) {
      console.log(error);
    } 
  }

  export default getPost;