import React from 'react';
import { Link } from 'react-router-dom';

const StoryItem = ({ by, descendants, id, kids, score, time, title, type, url }) => (
    <li className='ui fluid raised card'>
        <div className='content'>
            <a 
                className='header story-link'
                href={url} target='_blank' 
                rel='noopener noreferrer'
            >
                <h2>{title}</h2>
            </a>
        </div>
        <div className='content'>
            <p className='description'>
                <span id='user-avatar'>{'👨‍💻'}</span><span>Posted by</span>
                <Link
                    to={{
                        pathname: '/user',
                        search: `?id=${by}`
                    }}
                >
                    {` ${by} `}
                </Link>
                on {`${new Date((time * 1000)).toLocaleString()},`}
                {descendants > 0 ? 
                    <Link
                        to={{
                            pathname: '/post',
                            search: `?id=${id}`
                        }}
                    >
                        {` ${descendants} `}
                    </Link> : 
                    ' 0 '}comments
            </p>
        </div>
    </li>
);

export default StoryItem;


