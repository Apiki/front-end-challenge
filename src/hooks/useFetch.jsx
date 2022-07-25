import axois from "axios";
import { useState } from "react";

const fetchData = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(0);

	const fecth = (api) => {
		axois
			.get(api)
			.then((response) => {
				setData(response.data);
				setTotalPages(response.headers["x-wp-totalpages"]);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};

	return [data, loading, fecth, totalPages];
};

export default fetchData;