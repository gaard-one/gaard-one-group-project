import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';


class AllocationStatChart extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div>
                <p>
                    Chart Below
                </p>
                <div>
                    <Bar 
                    // data={chart}
                    width={100}
                    height={100}
                    option={{
                        mantainAspectRatio: false,
                        title: {
                            display:true,
                            text: 'Amount of Land Allocated'
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(AllocationStatChart);