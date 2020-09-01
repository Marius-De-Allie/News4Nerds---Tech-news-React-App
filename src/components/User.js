import React, { Component } from 'react';
import queryString from 'query-string';
import StoryList from './StoryList';
import { fetchUserStory, fetchUser } from '../utils/api';

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userDetails: {},
			userStories: {}
		}
	}

	async componentDidMount() {
		const { location } = this.props;
		// 1. Retrieve query string from url and parse into an object.
		const { id } = queryString.parse(location.search);
		// 2 .Fetch user details from HN API.
		if(!this.state.userDetails[id]) {
			const userDetails = await fetchUser(id);
			this.setState(prevState => ({
				userDetails: {
					...prevState.userDetails,
					[userDetails.id]: {...userDetails}
				}
			}))
		}
		// Return an array with 1st 50 submissions from the specified user.
		const userSubmissions = this.state.userDetails[id].submitted.slice(null, 50);
		// Loop through array of user submissions.
		for(let i =0; i < userSubmissions.length; i++) {
			// if submission not yet in component state.
			if(!this.state.userStories[userSubmissions[i]]) {
				const item = await fetchUserStory(userSubmissions[i]);
				// check whether fetched item is a story or not.
				if(item.type === 'story') {
					// If item is of type story, add it to component state.
					this.setState(prevState => ({
						userStories: {
							...prevState.userStories,
							[item.id]: {...item}
						}
					}))
				}
			}
		}



		// fetchUser(id)
		// 	.then(userDetails => {
		// 		this.setState(prevState => ({
		// 			userDetails
		// 		}));
		// 		// 3. Fetch user's stories from HN.
		// 		fetchUserStories(userDetails.submitted)
		// 			.then(userStories => this.setState(prevState => ({
		// 				userStories
		// 			})))
		// 			.catch(e => console.warn(e));
		// 	})
		// 	.catch(e => console.warn(e));
	}

	render() {
		const urlQueryString =  queryString.parse(this.props.location.search);
		const { userDetails, userStories } = this.state;
		const ids = Object.keys(userStories);
		const stories = ids.map(id => userStories[id]).sort((a, b) => b.time - a.time);
		return (
			<React.Fragment>
				{userDetails ?
					(
						<React.Fragment>
							{userDetails[urlQueryString.id] && (
								<React.Fragment>
									<h1>{userDetails[urlQueryString.id].id}</h1>
									<p>{`joined on ${new Date(userDetails[urlQueryString.id].created * 1000).toLocaleString()} has ${userDetails[urlQueryString.id].karma.toLocaleString()} Karma`}</p>
									<h2>Posts</h2> 
								</React.Fragment>
							)}
						</React.Fragment>

					) :
					null
				}
				<StoryList stories={stories} />
			</React.Fragment>
		);
	}
};

export default User;