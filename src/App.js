import React, {Component} from "react";

class App extends Component {
  state = {
    squares: this.createSquares(),
    removed: [],
  };

  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); // red 0 to 255
    let g = Math.round((Math.random() * 255)); // green 0 to 255
    let b = Math.round((Math.random() * 255)); // blue 0 to 255

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  getColoredSquare(index) {
    return <div key={index} style={{backgroundColor: this.generateRandomColor()}} onClick={() => this.removeSquare(index)}/>
  };

  getWhiteSquare(index) {
    return <div key={index} style={{backgroundColor: 'white'}} onClick={() => this.removeSquare(index)}/>
  };

  createSquares() {
    let squares = [];

    for (let i = 0; i < 9; i ++) {
      squares.push(this.getColoredSquare(i))
    }

    return squares
  };

  removeSquare = (index) => {
    let { squares } = this.state;
    let { removed } = this.state;

    if (!removed.includes(index)) {
      squares[index] = this.getWhiteSquare(index)
      removed.push(index)
    } else {
      squares[index] = this.getColoredSquare(index)
      this.setState({
        removed: removed.filter(elem => elem !== index)
      });
    }

    this.setState({
      squares: squares,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, Mario!</h1>
        <hr />
        <div className="box">{this.state.squares}</div>
        <h5>Click to remove, click again to create new one.</h5>
      </div>
    )
  };
}

export default App;
