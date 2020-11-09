import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import BlogForm from "../blog/blog-form";
import BlogFeaturedImage from "../blog/blog-featured-image";

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          currentId: this.props.match.params.slug,
          blogItem: {},
          editMode: false
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(
          this
        );
      }

      handleUpdateFormSubmission(blog) {
        this.setState({
          blogItem: blog,
          editMode: false
        });
      }  
  
      handleFeaturedImageDelete() {
        this.setState({
          blogItem: {
            featured_image_url: ""
          }
        });
      }

      handleEditClick() {
        if (this.props.loggedInStatus === "LOGGED_IN") {
        //console.log("handle edit clicked");
        this.setState({ editMode: true });
      }
    }
    
      getBlogItem() {
        axios
          .get(
            `https://annasmbr.devcamp.space/portfolio/portfolio_blogs/${this.state
              .currentId}`
          )
          .then(response => {
            this.setState({
              blogItem: response.data.portfolio_blog
            });
            //console.log("response", response);
          })
          .catch(error => {
            console.log("getBlogItem error", error);
          });
      }
    
      componentDidMount() {
        this.getBlogItem();
      }
    
  render() {
    const {
        title,
        content,
        featured_image_url,
        blog_status
      } = this.state.blogItem;

      //console.log("currentId", this.state.currentId);
    const contentManager = () => {
     //if (this.state.editMode && this.props.loggedInStatus === "LOGGED_IN") {
    if (this.state.editMode) {   
     return (
        <BlogForm 
          handleFeaturedImageDelete={this.handleFeaturedImageDelete}
          handleUpdateFormSubmission={this.handleUpdateFormSubmission}
          editMode={this.state.editMode}
          blog={this.state.blogItem} 
        />
       );
       //return <BlogForm />;
     } else {
      return (
      //<div className="blog-container">
        <div className="content-container">
          <h1 onClick={this.handleEditClick}>{title}</h1>
          
        <BlogFeaturedImage img={featured_image_url} />  
          
        <div className="content">{ReactHtmlParser(content)}</div>
      </div>
    );
  }
};

return <div className="blog-container">{contentManager()}</div>;
  }
}

//<h1>Blog detail</h1>

// <div>
       // <h1>{title}</h1>
       // <img src={featured_image_url} />
       // <div>{content}</div>
     // </div>

     //<div className="featured-image-wrapper">
            //<img src={featured_image_url} />
          //</div>

//<div className="content">{content}</div>

//{featured_image_url ? (
          //<div className="featured-image-wrapper">
            //<img src={featured_image_url} />
          //</div>
          //) : null}

 //<h1>{title}</h1>        