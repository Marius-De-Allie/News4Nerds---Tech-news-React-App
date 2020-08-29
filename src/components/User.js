import React, { Component } from 'react';
import queryString from 'query-string';
import StoryList from './StoryList';
import { fetchUserStories } from '../utils/api';

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

		fetchUserStories(id)
			.then(userStories => this.setState(prevState => ({
				userStories
			})))
			.catch(e => console.warn(e));
	}

	render() {
		const { userStories } = this.state;
		return (
			<React.Fragment>
				<h2>User name</h2>
				<p>user details</p>
				<h2>Posts</h2>
				<StoryList stories={userStories} />
			</React.Fragment>
		);
	}
};

export default User;