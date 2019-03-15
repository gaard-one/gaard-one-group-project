import React from 'react';
import { connect } from 'react-redux';
import './Legend.css';

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
                <p> Current Goal <div className="belwinBorder"></div></p>
                <p> Land saved by You <div className="purchase"></div></p>
                <p> Saved in put a year here <div className="savedByYear"></div></p>
              
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({ reduxStore: reduxStore });

export default connect(mapStateToProps)(Legend);