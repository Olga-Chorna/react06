import React, {Component} from "react";
import styles from './Calendar.module.css'
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

class Calendar extends Component {

  render(){
    return(
      <div className={styles.container}>
        <CalendarHeader/>
        <CalendarBody/>
      </div>
    )
  }
}

export default Calendar;