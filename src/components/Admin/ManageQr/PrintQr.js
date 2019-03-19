import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';



class PrintQr extends Component {
    gridPDFExport;

    constructor(props) {
        super(props);

        this.state = { pdfExportRequested: false };
    }


    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
    }

    render() {
        const grid = (
            <Grid data={this.props.qrpoducts} style={{ height: '490px' }} >
                <GridToolbar>
                    <button
                        title="Export PDF"
                        className="k-button k-primary"
                        onClick={this.exportPDF}
                        disabled={this.state.pdfExportRequested}
                    >
                        Export PDF
                    </button>
                </GridToolbar>
                <GridColumn field="product_name" title="Product" />
                <GridColumn field="cost" title="Price" />
                
                
            </Grid>
        );
        return (
            <div>
               <div className="qrCodePrint">

                
                </div> 
            </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({reduxStore});
export default connect(mapReduxStoreToProps,)(PrintQr);