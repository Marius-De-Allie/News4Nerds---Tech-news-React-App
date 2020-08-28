import React from 'react';
import propTypes from 'prop-types';

const CommentsList = ({ comments }) => (
    <div className='comments-list-container'>
        <ul>
            CommentsList
        </ul>
    </div>
);

// CommentsList proptypes.
CommentsList.propTypes = {
    comments: propTypes.array.isRequired
};

export default CommentsList;