import { version } from '../../../package.json';

export const checkDockerHubVersion = async (image: string = 'bedlessdeus/checkdaweb') => {
	const url = `https://hub.docker.com/v2/repositories/${image}/tags?page_size=1&ordering=last_updated`;
	try {
		const res = await fetch(url);
		if (!res.ok) {
			return `🔴  Version check failed\n    ↪ Current: v${version}`;
		}
		const data = await res.json();
		const latestTag = data.results?.[0]?.name;
		if (latestTag && latestTag !== `v${version}`) {
			return `🟡  Update available\n    ↪ Latest: ${latestTag}\n    ↪ Current: v${version}`;
		}
	} catch (err) {
		return `🔴  Version check failed\n    ↪ Current: v${version}`;
	}
	return `🟢  Up to date\n    ↪ Version: v${version}`;
};
