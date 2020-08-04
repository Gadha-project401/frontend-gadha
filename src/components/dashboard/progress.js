import React from 'react';
import './progress.scss'


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<>
		<p class='progress-title'>You are doing great! Keep going, here is your progress:</p>
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
		</>
	)
}

export default Progress;