import React from 'react';

const StoryItem = ({ by, descendants, id, kids, score, time, title, type, url }) => console.log('KIDS', kids)||(
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
            <a href={url}>{` ${by} `}</a>
            on {`${time},`}
            {kids ? <a href={url}>{` ${kids.length} `}</a> : ' 0 '}comments
        </p>
    </li>
);

export default StoryItem;


