import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loader = styled.p`
  text-align: center;
`;

const Loading = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text);
  const id = useRef(null);

    useEffect(() => {
      id.current = window.setInterval(() => {
        setContent((content) => {
          return content === `${text}...`
            ? text 
            : `${content}.`
        })
      }, speed)

      return () => window.clearInterval(id.current);
    }, [speed, text]);

    return (
      <Loader>
        {content}
      </Loader>
    );
};

// class Loading extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: props.text
//     }
//   }

//   componentDidMount() {
//     const { speed, text } = this.props;

//     this.interval = window.setInterval(() => {
//       this.state.content === text +'...' ? 
//       this.setState({content: text}) :
//       this.setState(prevState => ({
//         content: prevState.content + '.'
//       }))
//     }, speed);
//   }

//   componentWillUnmount() {
//     window.clearInterval(this.interval)
//   }

//   render() {
//     const { content } = this.state;
//     return (
//     );
//   }
// };

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

export default Loading;