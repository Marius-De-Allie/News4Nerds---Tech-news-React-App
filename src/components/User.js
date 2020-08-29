import React, { Component } from 'react';
import StoryList from './StoryList';
import { fetchUserStories } from '../utils/api';

class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userStories: null
		}
	}

	componentDidMount() {
		fetchUserStories('oftenwrong')
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