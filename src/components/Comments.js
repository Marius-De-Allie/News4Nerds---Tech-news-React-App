import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchItem, fetchComments } from '../utils/api';
import CommentsList from './CommentsList';

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
				}))

				fetchComments(post.kids)
				.then(comments => this.setState({comments}))
				.catch(e => console.warn(e))
			
		})
		.catch(e => console.warn(e));

	}


	render() {
		const { comments, postDetails } = this.state;
			return (
				<React.Fragment>
						{postDetails != null ? (
							<React.Fragment>
								<h2>{postDetails.title}</h2>
								{JSON.stringify(postDetails.kids)}
								<p>
									by
									<Link>
										{` ${postDetails.by}`}
									</Link>
									on {` ${new Date(postDetails.time * 1000).toLocaleString()} `}{`${postDetails.descendants} comments`} 
								</p>
							</React.Fragment>
						) :
						null
					} 
						<CommentsList comments={comments} />
				</React.Fragment>
			);
	}
};

export default Comments;