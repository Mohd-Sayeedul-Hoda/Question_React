import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
const Question = ({ title, info }) => {
	console.log(title);
	const [question, showQuestion] = useState(false);
	return (
		<div className="question">
			<header>
				<h5>{title}</h5>
				<button
					className="question-btn"
					onClick={() => {
						showQuestion(!question);
					}}
				>
					<IoMdAddCircle />
				</button>
			</header>
			{question ? <p>{info}</p> : <p style={{ display: 'none' }}>{info}</p>}
		</div>
	);
};
export default Question;
