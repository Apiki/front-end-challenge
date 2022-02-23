async function getPosts(setPosts) {
    
    try {
      const response = await fetch(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      
      setPosts(data);
      
      
      
      return data;
    } catch (error) {
      console.log(error);
    } 
  }

  export default getPosts;