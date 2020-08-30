import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentsList = ({ comments }) => (
		<div className='comments-list-container'>
			{!comments ? 
				<p>Fetching comments...</p> :
				(
					<ul>
						{comments.map(comment => <CommentItem key={comment.id} {...comment} />)}
					</ul>
				)
			}
    </div>
);

// CommentsList proptypes.
CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentsList;