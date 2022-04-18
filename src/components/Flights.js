import React, { Component } from "react";
import "../styles/sort.css";
import "../styles/loadMore.css";
import TicketList from "./TicketList/TicketList";

class Sort extends Component {
  render() {
    return (
      <div className="SortMenu">
        <div
          className="SortOption SortLeft Active"
          onClick={this.props.cheapSort}>
          <h3>Самый дешевый</h3>
        </div>
        <div className="SortOption" onClick={this.props.fastSort}>
          <h3>Самый быстрый</h3>
        </div>
        <div className="SortOption SortRight" onClick={this.props.optimalSort}>
          <h3>Оптимальный</h3>
        </div>
      </div>
    );
  }
}

class LoadMore extends Component {
  render() {
    return (
      <div className="LoadMore">
        <p>Показать еще 5 билетов!</p>
      </div>
    );
  }
}

export default class Flights extends Component {
  constructor(props) {
    super(props);
    this.cheapSort = this.cheapSort;
    this.fastSort = this.fastSort;
    this.optimalSort = this.optimalSort;
    this.flightListElement = React.createRef();
  }

  state = { sortStyle: 0 };

  cheapSort = () => {
    this.setState({ sortStyle: 0 });
    this.flightListElement.current.changeSortType(0);
  };
  fastSort = () => {
    this.setState({ sortStyle: 1 });
    this.flightListElement.current.changeSortType(1);
  };
  optimalSort = () => {
    this.setState({ sortStyle: 2 });
    this.flightListElement.current.changeSortType(2);
  };

  render() {
    return (
      <div>
        <Sort
          cheapSort={this.cheapSort}
          fastSort={this.fastSort}
          optimalSort={this.optimalSort}
        />
        <TicketList ref={this.flightListElement} />
        <LoadMore />
      </div>
    );
  }
}
