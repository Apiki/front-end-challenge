export async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 8000) {
    return new Promise<Response>((resolve, reject) => {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        fetch(url, { ...options, signal: controller.signal })
            .then((res) => {
                clearTimeout(id);
                resolve(res);
            })
            .catch((err) => {
                clearTimeout(id);
                reject(err);
            });
    });
}
