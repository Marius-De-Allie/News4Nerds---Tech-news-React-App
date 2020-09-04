import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loader = styled.p`
  text-align: center;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.text
    }
  }

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === text +'...' ? 
      this.setState({content: text}) :
      this.setState(prevState => ({
        content: prevState.content + '.'
      }))
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    const { content } = this.state;
    return (
      <Loader>
        {content}
      </Loader>
    );
  }
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;