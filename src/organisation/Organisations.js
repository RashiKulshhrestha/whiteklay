import React from "react";
import { Table, Button } from "react-bootstrap";
import OrgList from "./OrgList";

export default class Organisations extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            size : "",
            desc:"",
            orgList : [
                {
                    name:"Human Resource",
                    size: "10",
                    desc: "Management"
                }
            ]
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
            name : this.state.name,
            desc : this.state.desc,
            size : this.state.size
        }
        this.setState({
            orgList: [...this.state.orgList,addDetails]
        })
        this.setState({
            name : "",
            size : "",
            desc:""
        })
    }
    handleDelete = (id1) =>{
        let list = this.state.orgList.filter((flist,index) => index !== id1
        )
        this.setState({
            orgList : list
        });
    }

    render(){
        return(
            <>
                <form  className="container" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input 
                                type="text"
                                name = "name"
                                value = {this.state.name}
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Name of the Organisation"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "size"
                                value ={this.state.size}
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Size of the Organisation"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "desc"
                                value = {this.state.desc}
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Description"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button type='submit' variant="primary">Add Organisation</Button>
                        </div>
                    </div>
                </form>
                <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size of Organisation</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    {this.state.orgList.map((value, index) =>{
                        return <OrgList 
                                        name = {value.name}
                                        size = {value.size}
                                        desc = {value.desc}
                                        id={index}
                                        handleDelete = {this.handleDelete}/>
                        })}
                </Table>
            </>
        )
    }
}