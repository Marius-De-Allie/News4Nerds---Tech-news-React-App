import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchItem, fetchComments } from '../utils/api';
import CommentsList from './CommentsList';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postDetails: {},
			comments: {}
		}
	}

	async componentDidMount() {
		// retrieve post id value from url query string.
		const { id } = queryString.parse(this.props.location.search);

		const { postDetails, comments } = this.state;

		if(!postDetails[id]) {
			const post = await fetchItem(id);
				this.setState(prevState => ({
					postDetails: {
						...prevState.postDetails,
						[id]: {...post}
					}
				}));


				const commentIds = postDetails[id].kids.slice(null, 50);
				for(let i =0; i < commentIds.length; i++) {
					if(!comments[commentIds[i]]) {
						// TODO call fetchComment fn.
						// TODO set comments state equal to new comment, plus existing comments.
					}
				}
		}
	}


	render() {
		const { comments, postDetails } = this.state;
			return (
				<React.Fragment>
						{postDetails != null ? (
							<div className='ui fluid raised card'>
								<div className='content'>
									<h2>{postDetails.title}</h2>
								</div>
								<div className='content'>
									{JSON.stringify(postDetails.kids)}
									<p className='description'>
										by
										<Link
											to={{
												pathname: '/user',
												search: `?id=${postDetails.by}`
											}}
										>
											{` ${postDetails.by}`}
										</Link>
										on {` ${new Date(postDetails.time * 1000).toLocaleString()} `}{`${postDetails.descendants} comments`} 
									</p>
								</div>
							</div>
						) :
						null
					} 
						<CommentsList comments={comments} />
				</React.Fragment>
			);
	}
};

export default Comments;