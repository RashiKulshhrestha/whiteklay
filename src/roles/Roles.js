import React from "react";
import { Table, Button } from "react-bootstrap";
import RoleList from "./RoleList";
export default class Roles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            desc : "",
            roleList : [{
                name : "Web Developer",
                desc : "Responsible for UI part of a Website"

            }]
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
            desc : this.state.desc
        }
        this.setState({
            roleList: [...this.state.roleList,addDetails]
        })
        //console.log(this.state.roleList);
    }
    handleDelete = (id1) =>{
        let list = this.state.roleList.filter((flist,index) => index !== id1
        )
        this.setState({
            roleList : list
        });
        this.setState({
            name : "",
            desc : ""
        })
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
                                placeholder="Name of the Role"/>
                        </div>
                        <div className="col">
                            <input 
                                type="text"
                                name = "desc"
                                value={this.state.desc}
                                required
                                className="form-control"
                                onChange ={this.handleChange}
                                placeholder="Desription"/>
                        </div>
                        <div className="col">
                            <Button type='submit' variant="primary">Add Role</Button>
                        </div>
                    </div>
                </form>
                <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    {this.state.roleList.map((value, index) =>{
                        return <RoleList 
                                        name = {value.name}
                                        desc = {value.desc}
                                        id={index}
                                        handleDelete = {this.handleDelete}/>
                        })}
                </Table>
            </>
        )
    }
}