import React from "react";
import { Link } from "react-router-dom";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.state.date.toLocaleTimeString()}</h1>
        <Link to="/list">
          <div className="btn">New Todo</div>
        </Link>
      </div>
    );
  }
}

export default Clock;
