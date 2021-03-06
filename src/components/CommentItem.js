import React, { useContext } from 'react';
import { Link } from  'react-router-dom';
import parse from 'html-react-parser';
import { FaCommentDots } from 'react-icons/fa';
//  Theme context consumer.
import ThemeContext from '../contexts/theme';

const CommentItem = ({ by, text, time}) => {
    const theme = useContext(ThemeContext);

    return (
        <li className='comment'>
            <span className='avatar' style={{fontSize: '16px'}}>
                <FaCommentDots size={26} />
            </span>
            <div className={`content`}>
                <Link
                    className={`author`}
                    style={{color: theme === 'dark' ? '#0e7eed' : ''}}
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
    );
};

export default CommentItem;