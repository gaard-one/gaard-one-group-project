import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeTableItem from './EmployeeTableItem.js';
// import Header from '../../Header/Header.js';
import EmployeeForm from './EmployeeForm.js';

class EmpoyeeManagement extends Component {
   

    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_EMPLOYEES'});
    }

    render() {
        return (
        <div>
            {/* <Header /> */}
            <h2>Employee Management</h2>

            <EmployeeForm />

            <table>
                <thead>
                    <tr><th>Name</th><th>Permission Level</th></tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee, i) => {
                            return (<EmployeeTableItem key={i} 
                                        employee={employee} history={this.props.history}/>);
                    })}
                </tbody>
            </table>
        </div>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    employees: reduxStore.employees,
});

  export default connect(mapReduxStoreToProps)(EmpoyeeManagement);