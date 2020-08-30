import React from 'react';

const CommentItem = ({ by, text, time}) => (
    <li>
			<p>{`by ${by} on ${new Date(time *1000).toLocaleString()}`}</p>
			<p>{text}</p>
    </li>
);

export default CommentItem;