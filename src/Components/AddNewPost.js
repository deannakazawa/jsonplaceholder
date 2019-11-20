import React, { Component } from "react";
import axios from "axios";

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: 0,
      id:0
    };
  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitPost = event => {
    event.preventDefault(); 
    const {id, ...rest } =this.state;
    axios
    .post(`https://jsonplaceholder.typicode.com/posts`, rest, {
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }  
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
  };


  updatePost = event => {
    event.preventDefault();
    const {id, ...rest } =this.state;
    axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.userId}`, rest, 
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    )
    .then(result => console.log(result))
    .catch(error => console.log(error))
  };

  deletePost = event => {
    event.preventDefault();
    axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${this.state.userId}`)
     
        .then(result => console.log(result))
        .catch(error => console.log(error))
  
  };

  render() {
    const { title, userId, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="body">body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="userId">userId</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-dark">Add New Post</button>
          <button className="btn btn-dark" onClick={this.updatePost}>update Post</button>
          <button className="btn btn-dark" onClick={this.deletePost}>Delete Post</button>
        </form>
      </div>
    );
  }
}

export default AddNewPost;
