import React, { Component } from 'react';
import queryString from 'query-string';
import StoryList from './StoryList';
import { fetchUserStories, fetchUser } from '../utils/api';

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userDetails: null,
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
		const { userDetails, userStories } = this.state;
		return (
			<React.Fragment>
				{userDetails ?
					(
						<React.Fragment>
							<h2>{userDetails.id}</h2>
							<p>{`joined on ${new Date(userDetails.created * 1000).toLocaleString()} has ${userDetails.karma.toLocaleString()} Karma`}</p>
							<h2>Posts</h2> 
						</React.Fragment>

					) :
					null
				}
				<StoryList stories={userStories} />
			</React.Fragment>
		);
	}
};

export default User;