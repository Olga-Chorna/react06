import React, { Component } from "react";
import Time from "./Time"
import ShowDate  from "./SowDate";
import styles from "./CalendarHeader.module.css"

class CalendarHeader extends Component {

  render() {
    return(
      <div className={styles.calendarHeader}>
        <Time/>
        <ShowDate/>
      </div>
    )
  }
}

export default CalendarHeader;
