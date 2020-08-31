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

// Fetch top or new (based on endpoint arg passedin) stories from hacker news API.
const fetchStoryIds = endpoint => {
	return fetch(`${baseUrl}${endpoint}.json`)
		.then(res => res.json())
		.then(Ids => Ids.slice(null, 50))
		.catch(e => {
			console.log(e);
			throw new Error(e);
		})
};

// Fetch array of story objects.
const fetchStories = async (endpoint) => {
	let stories = [];
	try {
		// 1. Get list of top 50 story ids from HN.
		const ids = await fetchStoryIds(endpoint);
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

/**** HN USER API ****/

// Fetch HN user details.
const fetchUser = userId => {
	return fetch(`${baseUrl}user/${userId}.json`)
		.then(res => res.json())
		.then(userData => userData)
		.catch(e => {
			throw new Error(e);
		});
};

// Fetch HN stories by a specific user.
const fetchUserStory = async(storyId) => {
	// 1. Fetch each submission item.
		const item = await fetchItem(storyId);
		return item;
}

// Fetch array of comments from HN for specific post.
const fetchComments = async (commentsIds) => {
	let comments = [];
	// 1. Return an array of the post's last 50 comment ids.
	const commentsArray = commentsIds.slice(null, 50);

	for(let i = 0; i < commentsArray.length; i++) {
		const commentItem = await fetchItem(commentsArray[i]);
		comments.push(commentItem);
	
	}
	return comments;
};

export {
	fetchStories as default,
	fetchUserStory,
	fetchUser,
	fetchComments,
	fetchItem,
	fetchStoryIds
}