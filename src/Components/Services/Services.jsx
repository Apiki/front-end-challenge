import axios from 'axios';

function Services(){

	async function getPosts() {
	  try {
	    const response = await axios.get('/https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
	    console.log(response);
	  } catch (error) {
	    console.error(error);
	  }
	}

}
export default Services;