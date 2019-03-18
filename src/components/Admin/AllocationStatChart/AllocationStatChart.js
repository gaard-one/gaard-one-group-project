import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar,  } from 'react-chartjs-2';


class AllocationStatChart extends Component {
   

    componentDidMount() {
        this.getProductTypeName();
    }
    getProductTypeName = () => {
        let action = { type: 'FETCH_PRODUCT_TYPE'}
        this.props.dispatch(action)
    }
    render() {
        console.log('in redux', this.props.reduxStore);
        const productName = this.props.reduxStore.productType.map((product)=>{
            return product.product_name;
        });
        const totalTshirt = this.props.reduxStore.product.reduce((accumulator, total) => {
            return accumulator + total.cost
        }, 0)


        
        const data = {
            datasets: [{
                data: [
                    totalTshirt,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    '#FF6384',
                    '#4BC0C0',
                    '#FFCE56',
                    '#E7E9ED',
                    '#36A2EB'
                ],
                label: ['My dataset', 'test'] // for legend
            }],
            labels: productName,
            // labels: [
            //     'Red',
            //     'Green',
            //     'Yellow',
            //     'Grey',
            //     'Blue'
            // ]
        };
        return (
            <div>
                <p>
                    Chart Below
                </p>
                <div>
                    <Bar
                        data={data}
                        width={100}
                        height={50}
                        option={{
                            mantainAspectRatio: false,
                            title: {
                                display: true,
                                text: 'Amount of Land Allocated'
                            },
                            legend: {
                                display: true,
                                position: 'left'
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