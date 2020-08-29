import React, { Component } from 'react';
import queryString from 'query-string';
import StoryList from './StoryList';
import { fetchUserStories, fetchUser } from '../utils/api';

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userDetails: null,
			userStories: null
		}
	}

	componentDidMount() {
		const { location } = this.props;
		// Retrieve query string from url and parse into an object.
		const { id } = queryString.parse(location.search);
		// Fetch user details from HN API.
		fetchUser(id)
			.then(userDetails => this.setState(prevState => ({
				userDetails
			})))
			.catch(e => console.warn(e));

		fetchUserStories(id)
			.then(userStories => this.setState(prevState => ({
				userStories
			})))
			.catch(e => console.warn(e));
	}

	render() {
		const { userDetails, userStories } = this.state;
		return (
			<React.Fragment>
				{userDetails ?
					(
						<React.Fragment>
							<h2>{userDetails.id}</h2>
							<p>user details</p>
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