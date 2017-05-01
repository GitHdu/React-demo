import React from 'react';
import MessageList from '../components/messageList.js';
import MessageForm from '../components/messageForm.js';
export default class MessageBoard extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [] //模拟在数据库中的留言
        };
    }

    componentDidMount() {
        var data = this.state.data
            //模拟一个ajax请求数据回客户端的过程,在真实的应用场景中，此处放ajax请求
        setTimeout(function() {
            this.setState({
                data: data
            })
        }.bind(this), 2000)
    }
    handleMessageSubmit(message) {
        //模拟将数据保存到数据库的请求
        this.setState({ 'data': [...this.state.data, message] })
    }
    render() {
        return (
          < div className = "messageBoard" >
            < h3 > { this.props.title } < /h3>
            < MessageList data = { this.state.data } / >
            < MessageForm onMessageSubmit = { this.handleMessageSubmit.bind(this) }
            />
          < /div >
        )
    }

}
