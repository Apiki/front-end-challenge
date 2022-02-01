import { CONFIG } from './config';

export type TSendHeaders = {
	total?: string;
	totalpages?: string;
};
export type TSendResponse<R> = { data: R } & TSendHeaders;

async function send<P, R>({
	method,
	path,
	data
}: {
	method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
	path: string;
	data?: P;
}): Promise<TSendResponse<R>> {
	const opts: RequestInit = { method, headers: {} };
	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	const res = await fetch(`${CONFIG.api}${path}`, opts);
	const txt = await res.text();

	const info = {
		total: res.headers.get('x-wp-total'),
		totalpages: res.headers.get('x-wp-totalpages')
	};

	try {
		const body = JSON.parse(txt);
		if (!res.ok) {
			throw new Error(body.message || 'Unidentified error');
		}
		return { ...info, data: body };
	} catch (err) {
		throw new Error(err.message || 'Could not parse JSON from response');
	}
}

export async function del<P, R>(path: string): Promise<TSendResponse<R>> {
	return send<P, R>({ method: 'DELETE', path });
}

export async function get<R>(path: string): Promise<TSendResponse<R>> {
	return send<unknown, R>({ method: 'GET', path });
}

export async function patch<P, R>(path: string, data: P): Promise<TSendResponse<R>> {
	return send<P, R>({ method: 'PATCH', path, data });
}

export async function post<P, R>(path: string, data: P): Promise<TSendResponse<R>> {
	return send<P, R>({ method: 'POST', path, data });
}

export async function put<P, R>(path: string, data: P): Promise<TSendResponse<R>> {
	return send<P, R>({ method: 'PUT', path, data });
}
