import React from 'react';

export default class MessageList extends React.Component {
    render() {
        var messages = this.props.data.map(function(message, index) {
            return (
            	< li key = { index } >
            	    { message.name } said: < p > { message.message } < /p> 
                < / li >
            )
        });

        return (
        	< div className = "message" >
                < ol id = "messageList" > { messages } < /ol>
            < /div >
        )
    }

}
