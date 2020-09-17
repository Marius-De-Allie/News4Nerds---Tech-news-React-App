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

// Fetch top or new (based on endpoint arg passed in) stories from hacker news API.
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
const fetchStories = async (storyIdsArray, currentStories) => {
	let stories = {};
	try {
		// 2. Loop over ids array and add each corresponding item to the stories array.
		for(let i = 0; i < storyIdsArray.length; i++) {
			let id = storyIdsArray[i];
			if(!currentStories[id]) {
				let item = await fetchItem(id);
				stories = {
					...stories,
					[item.id]: item
				};
			}
		}
	} catch {
		throw new Error('Unable to fetch stories')
	}
	// 3. Return new array of top 50 stories.
	return stories;
};

const fetchAllStories = async (storyIdsArray) => {
	let stories = {};
	try {
		storyIdsArray.forEach(async(id) => {
			const item = await fetchItem(id);
	
			stories = {
				...stories,
				[id]: item
			}
		});
	} catch(e) {
		throw new Error('Unable to fetch stories');
	}
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

const fetchUserStories = async(storyIdsArray, currentStories) => {
	let stories = {};
	for(let i = 0; i < storyIdsArray.length; i++) {
		let storyId = storyIdsArray[i];
		if(!currentStories[storyId]) {
			const story = await fetchItem(storyId);
			if(story.type === 'story') {
				stories = {
					...stories,
					[story.id]: story
				}
			}
		}
	}
	return stories;
};

export {
	fetchStories as default,
	fetchUserStory,
	fetchUser,
	fetchItem,
	fetchStoryIds,
	fetchUserStories,
	fetchAllStories
}