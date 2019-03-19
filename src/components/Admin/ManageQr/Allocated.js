import React, { Component } from 'react';
import { connect } from 'react-redux';

class Allocated extends Component {
    constructor(props){
        super(props);
        this.state = {
            totSq: 0,
            allSq: [],
         };
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_ALLOCATED_SQUARES' });
        this.setState({
            totSq: parseInt(this.props.unitSq.squareTotal),
            allSq: parseInt(this.props.unitSq.allocatedSquares.length),
        });
    }

    //if more squares are generated
    componentDidUpdate(prevProps, prevState) {
        const prevTot = prevProps.unitSq.squareTotal;
        const tot = this.props.unitSq.squareTotal;

        const prevAll = prevProps.unitSq.allocatedSquares;
        const all = this.props.unitSq.allocatedSquares;
        
        //if changes happen to either thing on state
        if ( (all !== [] && prevAll !== all) || (tot !== [] && prevTot !== tot) ) {
            this.setState({
                totSq: parseInt(this.props.unitSq.squareTotal),
                allSq: parseInt(this.props.unitSq.allocatedSquares.length),
            });
        }
    }

    render() {

        return (
            <div>
                <p>
                    {this.state.allSq} has been allocated out of {this.state.totSq},
                    or {((this.state.allSq/this.state.totSq)*100)}%
                </p>
               
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    unitSq: state.unitSq,
});

export default connect(mapStatetoProps)(Allocated);