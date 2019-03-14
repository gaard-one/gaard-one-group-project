import React, { Component } from 'react';
import Generate from './Generate';

class Allocated extends Component {
    render() {
        return (
            <div>
                <p>
                    [insert amount] has been allocated   
                </p>
                <Generate />
            </div>
        );
    }
}
export default Allocated;