import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bar,  } from 'react-chartjs-2';


class AllocationStatChart extends Component {
   

    componentDidMount() {
        this.getProductTypeName();
    }
    getProductTypeName = () => {
        let action = { type: 'FETCH_PRODUCT_TYPE' }
        this.props.dispatch(action)
    }
    render() {
        // console.log('in redux', this.props.reduxStore);
        const productName = this.props.reduxStore.productType.map((product) => {
            return product.product_name;
        });

        // we are filtering through the reduxStore and returning only the products which matches the product_type_id
        // once filtered, we have an array with only tshirts objects now
        // we use reduce() to add the cost property of all tshirts and start the total at 0 
        const totalTshirt = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 4;
        })
            .reduce((accumulator, tshirt) => {
                return accumulator + tshirt.cost;
            }, 0);

        const totalHat = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 3;
        })
            .reduce((accumulator, hat) => {
                return accumulator + hat.cost;
            }, 0);

        const totalBackpack = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 2;
        })
            .reduce((accumulator, backpack) => {
                return accumulator + backpack.cost;
            }, 0);
        const totalBattery = this.props.reduxStore.product.filter((product) => {
            return product.product_type_id === 1;
        })
            .reduce((accumulator, battery) => {
                return accumulator + battery.cost;
            }, 0);
        const data = {
            labels: productName,
            datasets: [{
                data: [
                    totalTshirt,
                    totalHat,
                    totalBackpack,
                    totalBattery,
                ],
                backgroundColor: 
                    '#336600',
                    // 'red',
                    // 'blue',
                    // 'orange',
                
                borderWidth: 2,
                borderColor: '#777',
                hoverBorderWidth: 4,
                hoverBorderColor: '#000',
                label: 'Land Allocated', // for legend
                
            }],
            
        };
        return (
            <div>
                <p>
                    Chart Below
                </p>
                <div>
                    <Bar
                        data={data}
                        width={300}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            title: {
                                display: true,
                                text: 'Square Ft of Land Allocated'
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            },
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Square Feet',
                                        fontSize: 18,
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Product Types',
                                        fontSize: 18,
                                    }
                                }]
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