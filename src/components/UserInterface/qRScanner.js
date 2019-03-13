import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
// import Card from '@material-ui/core/Card';
import './UserInterface.css';
import Button from '@material-ui/core/Button';


//  Build out of qr scanner for in app accessibility -Tiana
class qRScanner extends Component {


    state = {
        result: 'No result',
        show: false,
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }

    scanIt = () => {
        console.log(' set', this.state.show)
        this.setState({
            show: !this.state.show
        })
    }
    closeIt = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="ui-main-div">
            <br/>
                {/* <Card className="ui-card"> */}
                <br />
                {this.state.show ?
                <div>
                    <QrReader
                        delay={300} 
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                    <Button variant="contained"
                     color="secondary"
                     onClick={this.closeIt}> Close QR Reader </Button>
                     <div className="ui-qr-return">
                    <a href={this.state.result}>{this.state.result}</a>
                    </div>
                    </div>
                    :
                    <Button variant="contained"
                     color="secondary"
                     onClick={this.scanIt}
                     >
                    Scan Qr Code
                    </Button>
                    // <button onClick={this.scanIt}> Scan </button>
                }
                <br />
                {/* maybe this.push.history */}
                {/* </Card> */}
                <br/>
                

            </div>
        );
    }
}
export default qRScanner;
// end Build out of qr scanner for in app accessibility -Tiana
