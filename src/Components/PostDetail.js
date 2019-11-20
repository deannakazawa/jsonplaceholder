import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetail: [],
      isLoaded: false,
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(result => {
        this.setState({
          isLoaded : true,
          postDetail: result.data
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error.message
        });
      });
  }
  render() {
    const { postDetail, error, isLoaded } = this.state;
    if (error) {
      return <div> {error} </div>;
    }

    if (!isLoaded) {
      return <div> Loading... </div>;
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h1> Json Placeholder </h1> 
        <div>
        <h1>{postDetail.title}</h1>
        <p>{postDetail.body}</p>
        <small>Post dari user id{postDetail.id}</small>
        <br/>>
        <small>post ke {postDetail.id}</small>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDetail);
