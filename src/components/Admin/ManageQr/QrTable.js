import React, { Component } from 'react';
import { connect } from 'react-redux';
// import QRCode from 'qrcode-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QrTableRow from './QrTableRow';


class QrTable extends Component {
    constructor(props){
        super(props);
      
    }

    componentDidMount(){
        this.props.dispatch({type:'FETCH_PRODUCT'});
    }



    render() {
       
    // 
    
        return (
         <Paper>
             {JSON.stringify(this.props.reduxStore.product)};
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell>Product</TableCell>
                         <TableCell>Price</TableCell>
                         <TableCell>QR Printed</TableCell>
                         <TableCell>QR </TableCell>
                         <TableCell>Delete</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {this.props.reduxStore.product.map((qrProduct,i)=>(
                         <QrTableRow key={i} qrProduct={this.props.reduxStore} />
                         ))}
                 </TableBody>
             </Table>
         </Paper>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({reduxStore});
export default connect(mapReduxStoreToProps)(QrTable);