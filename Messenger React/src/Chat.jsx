import React from 'react'
import Message from "./Message";
import "./Chat.css";

const Chat = ({ user }) => {
	return (
		<div>
			<div className='chat__inner'>
				<img src={user.avatar} alt="" className='chat__img' />
				<p>{user.name}</p>
			</div>
			<div className='chat__wrapper'>
				<img src={user.avatar} alt="" className='chat__img' />
				<div>
					<div className='chat__submit'>{user.post}</div>
					<span>{user.dateSecond}</span>
				</div>
			</div>
			{user.messages.map((msg, i) => (
				<Message key={i} {...msg} />
			))}
		</div>
	);
};

export default Chat;