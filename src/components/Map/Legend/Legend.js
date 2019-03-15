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
            <fieldset className='legend'>
                <legend>Legend</legend>
                Saved by You: <div className="purchase"/><br/><br/>
                Our Goal: <div className="belwinBorder"/><br/><br/>
                Saved in 'year': <div className="savedByYear"/><br/>
            </fieldset>
        );
    }
}

const mapStateToProps = reduxStore => ({ reduxStore: reduxStore });

export default connect(mapStateToProps)(Legend);