import React, { useReducer, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchItem} from '../utils/api';
// Theme context consumer.
import ThemeContext from '../contexts/theme';

// Dynamic imports.
const LazyCommentsList = React.lazy(() => import('./CommentsList'));

const commentsReducer = (state, action) => {
	if(action.type === 'item_success') {
		return {
			...state,
			postDetails: {
				...state.postDetails,
				[action.item.id]: {...action.item}
			}
		}
	} else if(action.type === 'item_fail') {
		return {
			...state,
			error: action.itemError
		}

	} else if(action.type === 'comment_success') {
		return {
			...state,
			comments: {
				...state.comments,
				[action.comment.id]: {...action.comment}
			}
		}
	} else{
		throw new Error('No such action type');
	}
};

const Comments = ({ location }) => {
	const [state, dispatch] = useReducer(commentsReducer, {
		postDetails: {},
		comments: {},
		error: null
	});

	const theme = useContext(ThemeContext);

	// retrieve post id value from url query string.
	const { id } = queryString.parse(location.search);

	useEffect(() => {
		if(!state.postDetails[id]) {
			fetchItem(id)
				.then(item => {
					dispatch({ type: 'item_success', item });

					const commentIds = item.kids.slice(null, 50);
					for(let i =0; i < commentIds.length; i++) {
						if(!state.comments[commentIds[i]]) {
							fetchItem(commentIds[i])
								.then(comment => {
									dispatch({ type: 'comment_success', comment});
								})
								.catch(e => {
									// dispatch({ type: 'comment_fail', commentError: e })
									console.warn(e);
								})
						}
					}
				})
				.catch(e => {
					// dispatch({ type: 'item_fail', itemError: e });
					console.warn(e);
				})
		}
	}, [id]);

		// const urlQuerystring = queryString.parse(this.props.location.search);
		const ids = Object.keys(state.comments);
		const comments = ids.map(el => state.comments[el]);

	return (
				<React.Fragment>
						{state.postDetails[id] ? (
							<div className={`ui fluid raised card bg-${theme}`}>
								<div className='content'>
									<h1 className={`text-${theme}`}>{state.postDetails[id].title}</h1>
								</div>
								<div className='content'>
									<p className={`description text-${theme}`} id='comment-meta'>
										by
										<Link
											to={{
												pathname: '/user',
												search: `?id=${state.postDetails[id].by}`
											}}
										>
											{` ${state.postDetails[id].by} `}
										</Link>
										on {` ${new Date(state.postDetails[id].time * 1000).toLocaleString()} `}{`${state.postDetails[id].descendants} comments`} 
									</p>
								</div>
							</div>
						) :
						null
					} 
						<LazyCommentsList comments={comments} />
				</React.Fragment>
	);
};

// class Comments extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			postDetails: {},
// 			comments: {}
// 		}
// 	}

// 	componentDidMount() {
// 		// retrieve post id value from url query string.
// 		const { id } = queryString.parse(this.props.location.search);

// 		const { postDetails, comments } = this.state;

// 		if(!postDetails[id]) {
// 			fetchItem(id)
// 				.then(item => {
// 					this.setState(prevState => ({
// 						postDetails: {
// 							...prevState.postDetails,
// 							[item.id]: {...item}
// 						}
// 					}))

// 					const commentIds = item.kids.slice(null, 50);
// 					for(let i =0; i < commentIds.length; i++) {
// 						if(!comments[commentIds[i]]) {
// 							fetchItem(commentIds[i])
// 								.then(comment => {
// 									this.setState(prevState => ({
// 										comments: {
// 											...prevState.comments,
// 											[comment.id]: {...comment}
// 										}
// 									}));
// 								})
// 								.catch(e => console.warn(e));
// 						}
// 					}
// 				})
// 				.catch(e => console.warn(e));
// 			}
// 	}


// 	render() {
// 		const urlQuerystring = queryString.parse(this.props.location.search);
// 		const { postDetails } = this.state;
// 		const ids = Object.keys(this.state.comments);
// 		const comments = ids.map(id => this.state.comments[id]);
// 			return (
// 				<ThemeContext.Consumer>
// 					{({ theme }) => (
// 						<React.Fragment>
// 								{postDetails[urlQuerystring.id] ? (
// 									<div className={`ui fluid raised card bg-${theme}`}>
// 										<div className='content'>
// 											<h1 className={`text-${theme}`}>{postDetails[urlQuerystring.id].title}</h1>
// 										</div>
// 										<div className='content'>
// 											<p className={`description text-${theme}`} id='comment-meta'>
// 												by
// 												<Link
// 													to={{
// 														pathname: '/user',
// 														search: `?id=${postDetails[urlQuerystring.id].by}`
// 													}}
// 												>
// 													{` ${postDetails[urlQuerystring.id].by} `}
// 												</Link>
// 												on {` ${new Date(postDetails[urlQuerystring.id].time * 1000).toLocaleString()} `}{`${postDetails[urlQuerystring.id].descendants} comments`} 
// 											</p>
// 										</div>
// 									</div>
// 								) :
// 								null
// 							} 
// 								<LazyCommentsList comments={comments} />
// 						</React.Fragment>
// 					)}
// 				</ThemeContext.Consumer>
// 			);
// 	}
// };

export default Comments;