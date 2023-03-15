export const getSearchParams = (newParams: {
	[key: string]: string;
}): URLSearchParams => {
	const params = new URLSearchParams();
	Object.entries(newParams).forEach(([key, value]) => {
		console.log(key, value);
		params.set(key, value);
	});
	return params;
};
