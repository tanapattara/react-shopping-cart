import React, { Component } from "react";
import Counter from "./counter";

class Counterlist extends Component {
  state = {
      counterlist: [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 2 },],
    };
  render() {
    return (
      <div>
        { this.state.counterlist.map((counter) => (
                <Counter key={counter.id} value={counter.value} />
            ))}
      </div>
    );
  }
}

export default Counterlist;