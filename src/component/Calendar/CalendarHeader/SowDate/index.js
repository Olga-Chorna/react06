import React, { Component } from "react";
import { format } from "date-fns";

class ShowDate extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    const { date } = this.state;

    return(
      <>
        {format(date, "eeee, MMMM d yyyy")}
      </>
    )
  }
}

export default ShowDate;