import React from "react";
import "../../styles/card.css";
import FlightTicket from "../FlightTicket";
import { priceSort, durationSort, optimalSort } from "./algorithms";

export default class TicketList extends React.Component {
  state = {
    loading: true,
    ticket: null,
    displayed: 0,
    sortType: 0,
  };

  changeSortType = (type) => {
    this.setState({ sortType: type });
    this.updateList();
  };

  updateList = async () => {
    let sortedArr = [];

    const res = await fetch("json/tickets.json");
    const data = await res.json();
    sortedArr = await sort(this.state.sortType, data);

    const arr = sortedArr.slice(0, 5);

    this.setState({ ticket: arr, loading: false });
  };

  async componentDidMount() {
    this.updateList();
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Загрузка...</div>
        ) : (
          <div>
            <ul>
              {this.state.ticket.map((e) => {
                return (
                  <li key={e.id}>
                    <FlightTicket ticket={e} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

function sort(type, data) {
  let arr = [...data];

  switch (type) {
    case 0:
      arr.sort(priceSort);
      break;
    case 1:
      arr.sort(durationSort);
      break;
    case 2:
      arr.sort(optimalSort);
      break;
    default:
      return arr;
  }

  return arr;
}
