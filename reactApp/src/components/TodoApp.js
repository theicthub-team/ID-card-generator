import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], label: "", text: "" };
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendData = () => {
    console.log(this.state.items);
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-label"
            onChange={this.handleLabelChange}
            value={this.state.label}
            autoComplete="off"
          />
          <input
            id="new-text"
            onChange={this.handleTextChange}
            value={this.state.text}
            autoComplete="off"
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleLabelChange(e) {
    this.setState({ label: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.label.length) {
      return;
    }
    const newItem = {
      label: this.state.label,
      text: this.state.text,
      id: Date.now()
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      label: "",
      text: ""
    }));

    document.getElementById("new-label").focus();

    console.log(this.state.items.concat(newItem));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            {item.label} --- {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;
