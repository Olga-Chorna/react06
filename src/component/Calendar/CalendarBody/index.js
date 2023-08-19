import React, { Component } from "react";
import { format } from "date-fns";
import "./style.css"

class CalendarBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  renderCalendar = (date) => {
    let currYear = date.getFullYear(),
    currMonth = date.getMonth();
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag.push(<li className="inactive">{`${lastDateofLastMonth - i + 1}`}</li>);
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag.push(<li className={`${isToday}`}>{`${i}`}</li>);
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag.push(<li className="inactive">{`${i - lastDayofMonth + 1}`}</li>);
    }
    return liTag;
  }

  handlerClickPrev = () => {
    const { date } = this.state;
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth - 1);
    console.log(new Date(newDate));
    this.setState (
      {
        date: new Date(newDate)
      }
    );
  }

  handlerClickNext = () => {
    const { date } = this.state;
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth + 1);
    console.log(new Date(newDate));
    this.setState (
      {
        date: new Date(newDate)
      }
    );
  }

  render() {
    const { date } = this.state;
    const days = this.renderCalendar(date);
    console.log(days);
    return(
      <div className="wrapper">
      <header>
        <p className="current-date">{format(date, "MMMM yyyy")}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" onClick={this.handlerClickPrev}>chevron_left</span>
          <span id="next" className="material-symbols-rounded" onClick={this.handlerClickNext}>chevron_right</span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {days}
        </ul>
      </div>
    </div>
    )
  }
}

export default CalendarBody;
