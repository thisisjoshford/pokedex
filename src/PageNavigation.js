import React, { Component } from "react";
import "./PageNavigation.css";

export default class PageNavigation extends Component {
  
  state = {
    page: 1
  }
  // checking to see if this component has been loaded from parent if so run code inside
  componentDidMount() {
    //call update controls function
    this.updatePage();
    window.addEventListener("hashchange", () => {
      this.updatePage();
    });
  }

  updatePageNumber(increment) {
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);
    searchParams.set("page", this.state.page + increment);
    window.location.hash = searchParams.toString();
  }

  updatePage() {
    //look at window and make a copy minus the #
    const queryString = window.location.hash.slice(1);
    //take the copy of the above url string and pass it to URLSearchParams
    const searchParams = new URLSearchParams(queryString);
    //set state page 
    let pageToUse = this.state.page;
    //get the page from searchParams and changes data type to a number get only works with URLSearchParams
    const parsedPage = Number(searchParams.get("page"));
    //if the parsed page is not a number go to page 1
    if (isNaN(parsedPage)) { pageToUse = 1; }
    //otherwise go to the number we got from user
     else { pageToUse = parsedPage; }
    //set current page state
    this.setState({ page: pageToUse });
  }

  render() {
    // const { page } = this.state;

    const perPage = 10; // this API only does 10 per
    //same as saying this.props.totalresults
    const { totalResults } = this.props;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);
    const parsedPage = parseInt(searchParams.get("page"));

    let pageToUse;
    if (isNaN(parsedPage)) {pageToUse = 1;} 
    else { pageToUse = parsedPage;}
    if (!totalResults) {
      return <p className="PageNavigation">No results, try another search</p>;
    }
    const lastPage = Math.ceil(totalResults / perPage);
    return (
      <div className="pageButtons">
          <button className="prev"
            onClick={ () => this.updatePageNumber(-1) }
            //disable page button if there are no results
            disabled={ pageToUse === 1 ? "true" : "" }
            type="button">◀</button>
          <span>
            Page { pageToUse } of { lastPage }
          </span>
          <button className="next"
            disabled={ pageToUse === lastPage ? "true" : "" }
            onClick={ () => this.updatePageNumber(1) }
            type="button">▶</button>
      </div>
    );
  }
}
