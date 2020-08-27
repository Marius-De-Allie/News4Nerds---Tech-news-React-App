// Hacker News - base url.
const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

// Fetch hacker news story by id.
const fetchStory = id => {
	return fetch(`${baseUrl}/item/${id}.json`)
		.then(res => res.json())
		.then(story => story)
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

export {
	fetchTopStoryIds
}