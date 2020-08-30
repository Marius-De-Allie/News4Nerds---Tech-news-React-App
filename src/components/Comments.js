import React, { Component } from 'react';
import queryString from 'query-string';
import { fetchItem, fetchComments } from '../utils/api';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postDetails: null,
			comments: null
		}
	}

	render() {
			return (
				<React.Fragment>
						Comments
				</React.Fragment>
			);
	}
};

export default Comments;