import React from 'react';
import { Link } from  'react-router-dom';
import parse from 'html-react-parser';
import { FaUserAstronaut } from 'react-icons/fa';
//  Theme context consumer.
import ThemeContext from '../contexts/theme';

const CommentItem = ({ by, text, time}) => (
    <ThemeContext.Consumer>
        {({ theme }) => (
            <li className='comment'>
                <span className='avatar' style={{fontSize: '16px'}}>
                    <FaUserAstronaut color='gold' size={26} />
                </span>
                <div className={`content`}>
                    <Link
                        className={`author`}
                        style={{color: theme === 'dark' ? 'blueviolet' : ''}}
                    >
                        {`by ${by} `}
                    </Link>
                    <div className='metadata'>
                        <span className={`text-${theme}`}>{`on ${new Date(time *1000).toLocaleString()}`}</span>
                    </div>
                    <div className={`text`} style={{ color: theme === 'dark' ? '#dadada' : ''}}>{parse(String(text))}</div>
                </div>
                <div className={`ui divider divider-${theme}`} ></div>
            </li>
        )}
    </ThemeContext.Consumer>
);

export default CommentItem;