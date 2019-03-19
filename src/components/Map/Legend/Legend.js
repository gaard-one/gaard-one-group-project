import React from 'react';
import { connect } from 'react-redux';
import './Legend.css';

class Legend extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
           showLocation: false,
           location: [],
        };
    }

    componentDidMount = () => {
        if(this.props.unitSq.length > 0){
            let firstSq = this.props.unitSq[0];
            this.setState({
                showLocation: true,
                location: [firstSq.bl_corner_lat, firstSq.bl_corner_lon],
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const prevSq = prevProps.unitSq;
        const sQ = this.props.unitSq;
        if (sQ !== [] && prevSq !== sQ) {
            let firstSq = this.props.unitSq[0];
            this.setState({
                showLocation: true,
                location: [firstSq.bl_corner_lat, firstSq.bl_corner_lon],
            });
        }
    }

    renderLocation = () => {
        if(this.state.showLocation){
            return(
                <p>Your Location: Latitude: {this.state.location[0]} <br />
                   Longitude: {this.state.location[1]}</p>
            )
        }
    }


    render() {
        return (
            <fieldset className='legend'>
                <legend>Legend</legend>
                Saved by You: <div className="purchase"/><br/><br/>
                Our Goal: <div className="belwinBorder"/><br/><br/>
                Saved in 'year': <div className="savedByYear"/><br/>
                {this.renderLocation()}
            </fieldset>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    unitSq: reduxStore.unitSq.displaySquare,
});

export default connect(mapReduxStoreToProps)(Legend);