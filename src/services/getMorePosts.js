async function getMorePosts(setPosts, posts, nextPage) {
    try {
      const response = await fetch(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${nextPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        }
      );

      const data = await response.json();
      
      setPosts([...posts, ...data]);
      
     
      
      return data;
    } catch (error) {
      console.log(error);
    } 
  }

  export default getMorePosts;