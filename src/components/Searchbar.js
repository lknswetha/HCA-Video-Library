import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: 'covid'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div class="ui category search">
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;
