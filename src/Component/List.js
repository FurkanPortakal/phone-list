import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";

class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  state = {
    filterText: "",
  };

  onChangeFilterText = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const filteredContacts = this.props.contacts.filter((contacts) => {
      return (
        contacts.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });

    return (
      <div className={"listArea"}>
        <input
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          name={"filter"}
          id={"filter"}
          placeholder={"Filter by name or phone"}
        />
        <ul className={"list"}>
          {filteredContacts.map((contacts) => (
            <li key={contacts.phone}>
              <span className={"name"}>{contacts.name}</span>
              <span className={"phone"}>{contacts.phone}</span>
              <span className={"clearfix"}></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Contacts;
