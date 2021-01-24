import React from "react";

export default class OrgList extends React.Component{
    
    render(){
        return(
            <tr key={this.props.id}>
                    <td>{this.props.name}</td>
                    <td>{this.props.size}</td>
                    <td>{this.props.desc}</td>
                    <td ><button className="delete-button" onClick={() =>{this.props.handleDelete(this.props.id)}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt12mgKthASs1d-8dTOXZ6Xhoy281I5hkuA&usqp=CAU"
                            alt="delete" height="50px" width="50px"/></button></td>
                </tr>
        )
    }
}