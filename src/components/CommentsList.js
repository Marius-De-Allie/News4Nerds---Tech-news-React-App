import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentsList = ({ comments }) => (
		<div className='comments-list-container'>
			{comments == null ? 
				<p>Fetching comments...</p> :
				(
					<React.Fragment>
						<h2 className='ui dividing header'>Comments</h2>
						<ul className='ui comments'>
							{comments.length === 0 ? <p>Story has no comments</p> : comments.map(comment => <CommentItem key={comment.id} {...comment} />)}
						</ul>
					</React.Fragment>
				)
			}
    </div>
);

// CommentsList proptypes.
CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentsList;