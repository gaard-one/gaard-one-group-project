import React, { Component } from 'react';
import { connect } from 'react-redux';

class Allocated extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_ALLOCATED_SQUARES' });
    }

    render() {
        const totalSq = parseInt(this.props.unitSq.squareTotal);
        const allocatedSq = parseInt(this.props.unitSq.allocatedSquares.length);

        return (
            <div>
                <p>
                    {allocatedSq} has been allocated out of {totalSq},
                    or {((allocatedSq/totalSq)*100)}%
                </p>
               
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    unitSq: state.unitSq,
});

export default connect(mapStatetoProps)(Allocated);