import React from 'react';

class CovidPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'covid'
  };
this.handleSubmit();
  }

handleSubmit = event => {
  this.setState({term: 'covid'}); 
    this.props.onLoad(this.state.term);
}

componentWillMount() {
  debugger;
  window.addEventListener('trigger',()=>{this.handleSubmit()});
 }

render() {
    return (
        <div>
        </div>
    )
}
}

export default CovidPage;