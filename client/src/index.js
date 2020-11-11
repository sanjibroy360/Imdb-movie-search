import ReactDOM from 'react-dom';
import React from 'react';

var Hello = props => <h1>Hello {props.name}</h1>

ReactDOM.render(<React.Fragment>
    <Hello name="World!" />
    <Hello name="World!" />
    <Hello name="World!" />
</React.Fragment>, document.getElementById('root'));