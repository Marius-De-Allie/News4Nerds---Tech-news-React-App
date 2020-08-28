import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topStories: null
        }
    }

    render() {
        return (
            <React.Fragment>
                Home/Top Stories
            </React.Fragment>
        );
    }

};

export default Home;