import React from "react";
import { useParams } from "react-router-dom";
import { POST_GET } from "../api";
import ContentPost from "../Components/ContentPost";
import Loading from "../Components/Helpers/Loading";
import useFetch from "../Hooks/useFetch";
import Error from "../Components/Helpers/Error";

const SinglePost = () => {
	const { data, loading, error, request } = useFetch();

	const { slug } = useParams();

	React.useEffect(() => {
		async function fetchPost() {
			const { url, options } = POST_GET(slug);

			await request(url, options);
		}

		fetchPost();
	}, []);

	if (loading) return <Loading />;
	if (data) return <ContentPost data={data[0]} />;
	else return <Error error={error} />;
};

export default SinglePost;
