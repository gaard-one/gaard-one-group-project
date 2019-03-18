import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';


class AllocationStatChart extends Component {
    constructor(props) {
        super(props)


    }

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
        // const totalTshirt = this.props.reduxStore.product.reduce((accumulator, total) => {
        //     return accumulator + total.cost
        // }, 0)


        const totalTshirt = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 1;
        })
        .reduce((accumulator, tshirt) => {
            return accumulator + tshirt.cost;
        }, 0);

        const totalHat = this.props.reduxStore.product.filter((product)=>{
            return product.product_type_id === 2;
        })
        .reduce((accumulator, hat)=>{
            return accumulator + hat.cost;
        }, 0);

        const totalBackpack = this.props.reduxStore.product.filter((product)=>{
            return product.product_type_id === 3;
        })
        .reduce((accumulator, backpack)=>{
            return accumulator + backpack.cost;
        }, 0);
        const totalBattery = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 4;
        })
            .reduce((accumulator, battery) => {
                return accumulator + battery.cost;
            }, 0);
        const data = {
            datasets: [{
                data: [
                    totalTshirt,
                    totalHat,
                    totalBackpack,
                    totalBattery,
                ],
                backgroundColor: [
                    'red',
                    'green',
                    'blue',
                    'orange',
                    '#36A2EB'
                ],
                label: 'Land Allocated' // for legend
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