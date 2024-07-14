import React from "react";

class NotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.OnTitleChangeHandler.bind(this);
    this.onDescriptionChangeHandler =
      this.onDescriptionChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onDescriptionChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <>
        {" "}
        <p className="note-input__title__char-limit">
          Sisa karakter {50 - this.state.title.length}
        </p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className="note-input__title"
            type="text"
            maxLength={50}
            placeholder="Ini adalah judul ..."
            value={this.state.judul}
            onChange={this.onJudulChangeHandler}
          />
          <textarea
            className="note-input__body"
            name="message"
            id="message"
            placeholder="Tuliskan catatan mu di sini ..."
            value={this.state.body}
            onChange={this.onMessageChangeHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </>
    );
  }
}

export default NotesForm;
