import useSwr from 'swr'
import api from '../services/api'

export default function useAxios(url, options = {}) {
	const { data, error, mutate } = useSwr(
		url,
		async (url) => {
			const response = await api.get(url)
			return response.data || {}
		},
		{
			...options,
			onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
				if (error.response) {
					// Never retry on 404.
					if ([401, 404].includes(error.response.status)) return
				}

				// Only retry up to 3 times.
				if (retryCount >= 3) return

				// Retry after 5 seconds.
				setTimeout(() => revalidate({ retryCount }), 5000)
			},
		}
	)

	return { data, error, loading: !data && !error, mutate }
}
