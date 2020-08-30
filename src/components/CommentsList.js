import React from 'react';
import PropTypes from 'prop-types';

const CommentsList = ({ comments }) => (
    <div className='comments-list-container'>
        <ul>
            CommentsList
        </ul>
    </div>
);

// CommentsList proptypes.
CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentsList;