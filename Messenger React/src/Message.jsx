import React from 'react'

const Message = ({ message, date, joke }) => {
	return (
		<div className='chat__online'>
			{
				message && (<>
					<div className='chat__message'>
						{message}
					</div>
					<div className='chat__date'>
						{date.toString()}
					</div>
				</>)
			}
			{
				joke && (<>
					<div className='chat__norris'>
						{joke}
					</div>
					<div className='chat__date chat__date_left'>
						{date.toString()}
					</div>
				</>)
			}
		</div>
	);
};

export default Message;