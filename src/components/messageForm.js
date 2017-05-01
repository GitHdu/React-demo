import React from 'react';

export default class MessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            message: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var message = this.state.message.trim();
        if (!name || !message) {
            return;
        }
        this.props.onMessageSubmit({
            name: name,
            message: message
        });
        this.setState({
            name: '',
            message: ''
        });
    }
    render() {
        return (
          < div className = "row" >
            < form className = "messageForm"
            onSubmit = { this.handleSubmit.bind(this) } >
                < input type = "text" placeholder = "Your name" value = { this.state.name } onChange = { this.handleNameChange.bind(this) } id = "textName" className = "form-control" / >
                < input type = "text" placeholder = "Say something..." value = { this.state.message } onChange = { this.handleMessageChange.bind(this) } id = "textMessage" className = "form-control" / >
                < input type = "submit" className = "btn btn-default" value = "Leave a message" / >
            < /form>
          < /div >
        )
    }
}
