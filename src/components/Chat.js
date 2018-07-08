import React, { Component } from "react";
import 'react-chat-elements/dist/main.css';

import { ChatList, Navbar, MessageList, Input, Button } from 'react-chat-elements';

export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='chat-list'>
          <Navbar
            center={
              <div>
                <div>
                  <ChatList
                    className='chat-list'
                    dataSource={[
                      {
                        avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                      }
                    ]}
                  />
                </div>
              </div>
            }/>
        </div>
        <div className='right-panel'>
          <MessageList
            className='message-list'
            lockable={true}
            toBottomHeight={'100%'}
            dataSource={[
              {
                position: 'right',
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date: new Date(),
              }
            ]} />
          <Input
            className='input-area'
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button
                color='white'
                backgroundColor='black'
                text='Send'/>
            }/>
        </div>
      </div>
    );
  }
}