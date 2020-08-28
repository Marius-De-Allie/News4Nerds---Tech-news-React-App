import React, { Component } from 'react';
import StoryList from './StoryList';

class User extends Component {

	render() {
		return (
			<React.Fragment>
				User
				<h2>User name</h2>
				<p>user details</p>
				<h2>Posts</h2>
				<StoryList />
			</React.Fragment>
		);
	}
};

export default User;