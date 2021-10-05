import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        imageUrl: "https://picsum.photos/50",
    };
    
    render() { 
        let classes = this.getBadgeClasses();

        return (
            <div>
                <img className="img-thumbnail" src={this.state.imageUrl} alt="picsum" />
                <span className={classes}>{this.getCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );
    }

    getCount(){
        const { count } = this.state;
        return count === 0 ? <b>Zero</b> : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
}
 
export default Counter;