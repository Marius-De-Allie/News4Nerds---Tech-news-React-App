import React from 'react';
import parse from 'html-react-parser';

const CommentItem = ({ by, text, time}) => (
    <li>
			<p>{`by ${by} on ${new Date(time *1000).toLocaleString()}`}</p>
			{parse(text)}
    </li>
);

export default CommentItem;