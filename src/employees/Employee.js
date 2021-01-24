import React from "react";
import { Table, Button } from "react-bootstrap";
import EmpList from "./EmpList";
import "./employees.css";
export default class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eid : "",
            name : "",
            email : "",
            role : "",
            organisation : "",
            empList : []
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        let addDetails = {
            eid: this.state.eid,
            name : this.state.name,
            role : this.state.role,
            email : this.state.email,
            organisation : this.state.organisation
        }
        this.setState({
            empList: [...this.state.empList,addDetails]
        })
        //console.log(this.state.empList);
    }
    handleDelete = (id1) =>{
        let list = this.state.empList.filter((flist,index) => index !== id1
        )
        this.setState({
            empList : list
        });
    }

    render(){
        return(
            <>
                <form  className="employee-container" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input 
                                type="text"
                                name = "eid"
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Employee ID"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "name"
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Full Name"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "role"
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Employee's Role"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input 
                                type="email"
                                name = "email"
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Email"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "organisation"
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Organisation"/>
                        </div>
                        <div className="col">
                            <Button type='submit' variant="primary">Add Employee</Button>
                        </div>
                    </div>
                </form>
                <Table>
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Organisation</th>
                    </tr>
                    </thead>
                    {this.state.empList.map((value, index) =>{
                        return <EmpList 
                                        empid = {value.eid}
                                        name = {value.name}
                                        email = {value.email}
                                        role = {value.role}
                                        org = {value.organisation}
                                        id={index}
                                        handleDelete = {this.handleDelete}/>
                        })}
                </Table>
            </>
        )
    }
}