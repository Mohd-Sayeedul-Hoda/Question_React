import questions from './data';
import Question from './Question';
const App = () => {
	return (
		<main>
			<div className="container">
				<h1>Question</h1>
				{questions.map((question) => {
					return (
						<Question
							key={question.id}
							{...question}
						/>
					);
				})}
			</div>
		</main>
	);
};
export default App;
