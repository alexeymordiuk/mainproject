import React from 'react';
import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Icon from '../src/images/maincion.png'
import Avatar from '../src/images/avatars/avatar1.jpg'
import Avatar1 from '../src/images/avatars/avatar2.jpg'
import Avatar2 from '../src/images/avatars/avatar3.jpg'
import Avatar3 from '../src/images/avatars/avatar4.jpg'


let options = { year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();

const userMocks = [
	{ name: "Alice Kofferman", id: 1, messages: [], avatar: Avatar, date: (today.toLocaleDateString("en-US", options)), post: 'Hello Alex, whats up?', dateSecond: new Date().toLocaleString() },
	{ name: "Alex Todeus", id: 2, messages: [], avatar: Avatar1, date: (today.toLocaleDateString("en-US", options)), post: 'Hi Alex, Im waiting for you in the gym! ', dateSecond: new Date().toLocaleString() },
	{ name: "Karl Marks", id: 3, messages: [], avatar: Avatar2, date: (today.toLocaleDateString("en-US", options)), post: 'Hi, dont forget the keys from home.', dateSecond: new Date().toLocaleString() },
	{ name: "Zinada Hassein", id: 4, messages: [], avatar: Avatar3, date: (today.toLocaleDateString("en-US", options)), post: 'Hi, congratulations with your first apps.', dateSecond: new Date().toLocaleString() },
];

export default function App() {
	const [users, setUsers] = useState(userMocks);
	const [currentUser, setCurrentUser] = useState(userMocks[0]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [activeId, setActiveId] = useState(userMocks[0].id)
	const [loadedFromLocal, setLoadedFromLocal] = useState(false)
	const [messageInp, setMessageInp] = useState('')


	const getMessage = async () => {
		const res = await fetch("https://api.chucknorris.io/jokes/random")
		if (res.ok) {
			const data = await res.json()
			setIsLoaded(true);
			return data.value
		} else {
			setIsLoaded(true);
			setError('Error');
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newMessage = {
			author: "Me",
			message: event.target[0].value,
			date: new Date().toLocaleString(),
		};

		const messages = currentUser.messages;
		const randomMessage = await getMessage()
		const otherMessage = {
			author: "Chak Norris",
			joke: randomMessage,
			date: new Date().toLocaleString(),
		};
		const updatedMessages = [...messages, newMessage, otherMessage];

		setMessageInp('')
		setCurrentUser({ ...currentUser, messages: updatedMessages });
	};

	useEffect(() => {
		if (loadedFromLocal) {
			localStorage.setItem('users', JSON.stringify(users));
		}
	}, [users])


	useEffect(() => {
		if (currentUser.messages.length === 0) {
			return;
		}

		const updatedUsers = users.map((user) => {
			if (user.name === currentUser.name) {
				return currentUser;
			} else {
				return user;
			}
		});

		const localUsers = JSON.parse(localStorage.getItem("users"));
		 if (!loadedFromLocal && localUsers) {
			setLoadedFromLocal(true)
				setUsers(localUsers)
		} else {
			setLoadedFromLocal(true)
			setUsers(updatedUsers);
		}
	}, [currentUser]);

	useEffect(() => {
		const localUsers = JSON.parse(localStorage.getItem('users'))
  
		if (localUsers) {
			 setCurrentUser(localUsers[0])
		}
  }, [])

	return (

		<div className="app">
			<Tabs onSelect={(index) => setActiveId(+index + 1)}>
				<div className='app__inner'>
					<div className='app__users'>
						<div className='app__search'>
							<img src={Icon} alt="" />
							<form className='app__search-field'>
								<div>
									<i class="fa fa-search" aria-hidden="true"></i>
								</div>
								<div>
									<input type="text" className='app__search-field' placeholder='Search or strar new chat' required />
								</div>
							</form>
						</div>
						<TabList>
							<h1 className='app__title'>Chats</h1>
							{users.map((user, index) => (
								<Tab key={index} onClick={() => setCurrentUser(user)}>
									<div className='app__users-users'>
										<div><img src={user.avatar} alt="" /></div>
										<span className='app__users-name'>{user.name}</span>
										<div className='app__date-users'>{user.date}</div>
									</div>
									<div className='app__sms'>{user.post}</div>
								</Tab>
							))}
						</TabList>
					</div>

					<div className='app__chat'>
							{users.map((user, index) => (
								<TabPanel key={index} className="app__body">
									<Chat user={user} />
								</TabPanel>
							))}
						<div className='app__wrapper-eneter'>
							<form onSubmit={handleSubmit} className="app__entered-messeges">
								<div>
								<input
										type="text"
										placeholder='Type youre message'
										value={messageInp}
										onChange={e => setMessageInp(e.target.value)}
										required
									/>
								</div>
								<div>
									<button type="submit" value="Send"><i className="fa fa-paper-plane"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Tabs>
		</div>
	);
}
