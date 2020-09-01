import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchItem} from '../utils/api';
import CommentsList from './CommentsList';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postDetails: {},
			comments: {}
		}
	}

	componentDidMount() {
		// retrieve post id value from url query string.
		const { id } = queryString.parse(this.props.location.search);

		const { postDetails, comments } = this.state;

		if(!postDetails[id]) {
			fetchItem(id)
				.then(item => {
					this.setState(prevState => ({
						postDetails: {
							...prevState.postDetails,
							[item.id]: {...item}
						}
					}))

					const commentIds = item.kids.slice(null, 50);
					for(let i =0; i < commentIds.length; i++) {
						if(!comments[commentIds[i]]) {
							fetchItem(commentIds[i])
								.then(comment => {
									this.setState(prevState => ({
										comments: {
											...prevState.comments,
											[comment.id]: {...comment}
										}
									}));
								})
								.catch(e => console.warn(e));
						}
					}
				})
				.catch(e => console.warn(e));
			}
	}


	render() {
		const urlQuerystring = queryString.parse(this.props.location.search);
		const { postDetails } = this.state;
		const ids = Object.keys(this.state.comments);
		const comments = ids.map(id => this.state.comments[id]);
			return (
				<React.Fragment>
						{postDetails[urlQuerystring.id] ? (
							<div className='ui fluid raised card'>
								<div className='content'>
									<h2>{postDetails[urlQuerystring.id].title}</h2>
								</div>
								<div className='content'>
									{JSON.stringify(postDetails[urlQuerystring.id].kids)}
									<p className='description'>
										by
										<Link
											to={{
												pathname: '/user',
												search: `?id=${postDetails[urlQuerystring.id].by}`
											}}
										>
											{` ${postDetails[urlQuerystring.id].by} `}
										</Link>
										on {` ${new Date(postDetails[urlQuerystring.id].time * 1000).toLocaleString()} `}{`${postDetails[urlQuerystring.id].descendants} comments`} 
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