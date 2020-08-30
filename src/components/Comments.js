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

	componentDidMount() {
		// retrieve post id value from url query string.
		const { id } = queryString.parse(this.props.location.search);

		fetchItem(id)
			.then(post => {
				this.setState(prevState => ({
					postDetails: post
				}));
				// fetch 50 most recent comments for the post.
				fetchComments(post.kids)
					.then(comments => this.setState(prevState => ({
						comments
					})))
					.catch(e => console.warn(e));
		})
		.catch(e => console.warn(e));
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