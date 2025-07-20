export const cleanURL = (url: string): string => {
	return url.replace(/https{0,}:\/\//, '').replace('\/', '');
};

export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
	const chunks: T[][] = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
};

export const URL_PATTERN = '^https:\\/\\/([a-zA-Z\\d\\-]{1,63}\\.){1,62}[a-zA-Z\\-]{1,63}$';