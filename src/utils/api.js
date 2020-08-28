// Hacker News - base url.
const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

// Fetch hacker news Item (story or comment) by id.
const fetchItem = id => {
	return fetch(`${baseUrl}item/${id}.json`)
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
		.then(Ids => Ids.slice(null, 50))
		.catch(e => {
			console.log(e);
			throw new Error(e);
		})
};

// Fetch array of story objects.
const fetchStories = async () => {
	let stories = [];
	try {
		// 1. Get list of top 50 story ids from HN.
		const ids = await fetchTopStoryIds();
		// 2. Loop over ids array and add each corresponding item to the stories array.
		for(let i = 0; i < ids.length; i++) {
			let item = await fetchItem(ids[i]);
			stories.push(item);
		}
	} catch {
		throw new Error('Unable to fetch stories')
	}
	// 3. Return new array of top 50 stories.
	return stories;
};

export {
	fetchStories as default,
	fetchTopStoryIds,
	fetchItem
}