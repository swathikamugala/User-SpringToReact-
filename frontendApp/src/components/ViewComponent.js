
import React from 'react';
import UserService from '../services/UserService';

class ViewComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,user:{}
        }
    }
    componentDidMount()
    {
        UserService.getUserById(this.state.id).then(res=>{
            this.setState({user:res.data})
        })
    }
    render()
    {
        return(
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View USer Data  </h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>USer First Name:</label>
                        <div>{this.state.user.firstName}</div>
                    </div><br />
                    <div className='row'>
                        <label>User Last Name:</label>
                        <div>{this.state.user.lastName}</div>
                    </div><br />
                    <div className='row'>
                        <label>User Email Id:</label>
                        <div>{this.state.user.emailId}</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ViewComponent;

