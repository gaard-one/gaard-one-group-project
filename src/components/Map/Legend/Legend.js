import React from 'react';
import { connect } from 'react-redux';

class Legend extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
           
        };
    }


    render() {
        return (
            <div className="legend">
                <header>Legend</header>
                <ul>
                    <li> <div className="belwinBorder"></div> Current Goal </li>
                    <li> <div className="purchase"></div> Land saved by You </li>
                    <li> <div className="savedByYear"></div> Saved in put a year here </li>
                </ul>
              
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({ reduxStore: reduxStore });

export default connect(mapStateToProps)(Legend);