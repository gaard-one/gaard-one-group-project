import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import Card from '@material-ui/core/Card';
import './UserInterface.css';
import BaseMap from '../Map/BaseMap';


class UserInterface extends Component {


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
                <Card className="ui-card">
                <br />
                {this.state.show ?
                <div>
                    <QrReader
                        delay={300} 
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '50%' }}
                    />
                    <button onClick={this.closeIt}> Close QR Reader </button>
                    </div>
                    :
                    <button onClick={this.scanIt}> Scan </button>
                }
                <br />
                {/* maybe this.push.history */}
                <a href={this.state.result}>{this.state.result}</a>
                </Card>
                <br/>
                <BaseMap />

            </div>
        );
    }
}
export default UserInterface;
