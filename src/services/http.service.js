global.fetchWithHeaders = async (verb, url, data) => {
	const req = {
		method: verb,
		headers: { 'x-auth-token': 'Ex.Header-Token' },
	};

	data ? (req.body = JSON.stringify(data)) : null;

	const resObj = await fetch(url, req).then(res => {
		// Do something with res
		console.log(res);
	});

	return resObj;
};
