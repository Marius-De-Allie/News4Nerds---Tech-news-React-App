// Hacker News - base url.
const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

// Fetch hacker news Item (story or comment) by id.
const fetchItem = id => {
	return fetch(`${baseUrl}/item/${id}.json`)
		.then(res => res.json())
		.then(item => item)
		.catch(e => {
			throw new Error(e);
		})
};

// Fetch top stories from hacker news API.
const fetchTopStoryIds = () => {
	return fetch(`${baseUrl}topstories.json`)
		.then(res => res.json())
		.then(Ids => Ids)
		.catch(e => {
			console.log(e);
			throw new Error(e);
		})
};

// Fetch array of story objects.
const fetchStories = async () => {
	try {
		// 1. Get list of top 50 story ids from HN.
		const ids = await fetchTopStoryIds();
		// Get only the first 50 story ids from ids array.
		const storyIds = ids.slice(null, 50);
		// 2. Loop over ids and fetch each corresponding item and update array.
		storyIds.forEach(async id => {
			const item = await fetchItem(id);
			return item
		});
	} catch {
		throw new Error('Unable to fetch stories')
	}
};

export {
	fetchStories as default,
	fetchTopStoryIds
}