import useSWRInfinite from 'swr/infinite'

import api from '../services/api'

export default function useInfiniteAxios(getKey, options = {}) {
	const { data, error, size, setSize } = useSWRInfinite(
		getKey,
		async (url) => {
			const response = await api.get(url)
			const data = {
				data: response.data || {},
			}

			Object.keys(response.headers).forEach((item) => {
				if (item === 'x-wp-total') data.total_posts = response.headers[item]
				if (item === 'x-wp-totalpages') data.total_pages = response.headers[item]
			})

			return data
		},
		{
			...options,
		}
	)

	const isLoadingInitialData = !data && !error
	const isLoadingMore =
		isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')
	const isEmpty = data?.[0]?.length === 0

	return {
		data,
		error,
		loading: isLoadingInitialData,
		isLoadingMore,
		isEmpty,
		size,
		setSize,
	}
}
