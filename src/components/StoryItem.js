import React from 'react';
import { Link } from 'react-router-dom';

const StoryItem = ({ by, descendants, id, kids, score, time, title, type, url }) => (
    <li>
        {/* TODO add avatar/icon */}
        <a 
            className='story-link'
            href={url} target='_blank' 
            rel='noopener noreferrer'
        >
            <h2>{title}</h2>
        </a>
        <p>
            {'👨‍💻Posted by'}
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
    </li>
);

export default StoryItem;


