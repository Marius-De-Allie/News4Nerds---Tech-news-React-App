import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
// Theme context consumer.
import ThemeContext from '../contexts/theme';

const CommentsList = ({ comments }) => {
	const theme = useContext(ThemeContext);

	return (
		<div className='comments-list-container'>
			{comments == null ? 
				<p className={`text-${theme}`}>Fetching comments...</p> :
				(
					<React.Fragment>
						<h2 className={`ui dividing header text-${theme}`}>Comments</h2>
						<ul className='ui comments'>
							{comments.length === 0 ? <p className={`text-${theme}`}>Story has no comments</p> : comments.map(comment => <CommentItem key={comment.id} {...comment} />)}
						</ul>
					</React.Fragment>
				)
			}
		</div>
	);
};

// CommentsList proptypes.
CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentsList;