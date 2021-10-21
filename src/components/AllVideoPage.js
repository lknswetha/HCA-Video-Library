import React from 'react';

class AllVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
  };
this.handleSubmit();
  }

handleSubmit = event => {
    this.state = {
      term: ''
  };
    this.props.onLoad(this.state.term);
}

componentWillMount() {
 window.addEventListener('trigger',()=>{this.handleSubmit()});
}

render() {
    return (
        <div>
        </div>
    )
}
}

export default AllVideoPage;