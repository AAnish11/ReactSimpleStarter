import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state  = {term: ''};
    }



    render() {
        return (
        <div>
         <input value={this.state.term} /* controlled component  */
            onChange={event => this.setState({term: event.target.value}) }
         />
         Input value: { this.state.term }
         </div>
        )
    }
}

export default SearchBar;