import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdateProduct extends Component {
  constructor(props) {
      super(props);
      this.state = {title: '', body: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
  }


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/products/${this.props.params.id}`)
    .then(response => {
      this.setState({ title: response.data.title, body: response.data.body });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      body: e.target.value
    })
  }


  render(){
    return (
      <div>
        <h1>Show Product</h1>
        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Product Title</td>
                <td>Product Body</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{this.props.params.id}</td>
                  <td>{this.state.title}</td>
                  <td>{this.state.body}</td>
                  <td>
                    <Link to={"edit/"+this.props.params.id} className="btn btn-primary">Edit</Link>
                  </td>
              </tr>
            </tbody>
        </table>     
       
    </div>
    )
  }
}
export default UpdateProduct;