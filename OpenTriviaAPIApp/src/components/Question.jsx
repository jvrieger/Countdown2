import "../styles/Question.css"

export default function Question({ questionData, index }) {
    return (
        <div className="questionSection">
            <h3 className="questionHeading">Question {index}</h3>
            <p className="question">{questionData.question}</p>
        </div>
    );
}