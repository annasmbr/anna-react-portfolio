import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
       pageTitle: "Welcome to my portfolio",
       isLoading: false,
       data: []
       //{ title: "Quip", category: "eCommerce", slug: "quip" },
       //{ title: "Eventbrite", category: "Scheduling", slug: "eventbrite" },
       //{
       //  title: "Ministry Safe",
        // category: "Enterprise",
        // slug: "ministry-safe"
       //},
       //{ title: "SwingAway", category: "eCommerce", slug: "swingaway" }
  };  

    this.handleFilter = this.handleFilter.bind(this);
    //this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }    
  //handleFilter(filter) {
   // this.setState({
      //data: this.state.data.filter(item => {
       // return item.category === filter;
      //})
    //});
 // }

  //getPortfolioItems() {
getPortfolioItems(filter = null) {   
    axios
      .get("https://annasmbr.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      //.then(response => {
        //console.log("response data", response);
        //this.setState({
         // data: response.data.portfolio_items
        //});
      //})
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    // Data that we'll need:
    // - background image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    //["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
      return this.state.data.map(item => {
        //debugger;
        //console.log("portfolio item", item);
        //console.log("item data", item);
         return <PortfolioItem key={item.id} item={item} />;
               //title ={item.name}  url = {item.url} slug={item.id}
     });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

 render() {  
   
  if (this.state.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="homepage-wrapper">
      <div className="filter-links">
        <button
          className="btn"
          onClick={() => this.handleFilter("eCommerce")}
        >
          eCommerce
        </button>
        <button
          className="btn"
          onClick={() => this.handleFilter("Scheduling")}
        >
          Scheduling
        </button>
        <button
          className="btn"
          onClick={() => this.handleFilter("Enterprise")}
        >
          Enterprise
        </button>
        <button
          className="btn"
          onClick={() => this.handleFilter("CLEAR_FILTERS")}
        >
          All
        </button>
      </div>
      <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
    </div>
  );
 }
}  


// this.getPortfolioItems();
   
//return ( 
   // <div className="portfolio-items-wrapper">
   // <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
     // eCommerce
   // </button>
    //<button className="btn" onClick={() => this.handleFilter("Scheduling")}>
    //  Scheduling
    //</button>
   // <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
    //  Enterprise
   // </button>

    //{this.portfolioItems()}
  //</div>
   // );
  //}
//}

    //{this.portfolioItems()}
    //<h2>{this.state.pageTitle}</h2>

    //<div>
      // <button onClick={() => this.handleFilter("eCommerce")}>
       //   eCommerce
       // </button>
       // <button onClick={() => this.handleFilter("Scheduling")}>
       //   Scheduling
       // </button>
       // <button onClick={() => this.handleFilter("Enterprise")}>
       //   Enterprise
       // </button>

      // <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
       
     // </div>