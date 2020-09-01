import React from 'react';
import { Link } from  'react-router-dom';
import parse from 'html-react-parser';

const CommentItem = ({ by, text, time}) => (
    <li className='comment'>
        {/* TODO add avatar*/}
        <span className='avatar' style={{fontSize: '16px'}}>{`🙍‍♀️`}</span>
        <div className='content'>
            <Link
                className='author'
            >
                {`by ${by} `}
            </Link>
            <div className='metadata'>
                <span>{`on ${new Date(time *1000).toLocaleString()}`}</span>
            </div>
            <div className='text'>{parse(text)}</div>
        </div>
        <div className='ui divider'></div>
    </li>
);

export default CommentItem;