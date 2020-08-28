import React, { Component } from 'react';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: null
		}
	}

	render() {
			return (
				<React.Fragment>
						Comments
				</React.Fragment>
			);
	}
};

export default Comments;