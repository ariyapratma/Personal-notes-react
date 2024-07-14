import React from "react";

class NotesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    const searchValue = event.target.value;
    this.setState({ search: searchValue });
    this.props.addSearch({ search: searchValue });
    console.log(searchValue);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <form>
          <input
            type="text"
            placeholder="Cari catatan ..."
            value={this.state.search}
            onChange={this.onSearchChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default NotesHeader;
