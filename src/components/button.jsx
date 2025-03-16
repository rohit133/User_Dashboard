import { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="button-input"
        type="button"
        id={this.props.id}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
