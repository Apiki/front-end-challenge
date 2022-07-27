export const api = {
    get: (endpoint) => {
        return fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}${endpoint}`).then(res=>res);
    }
}