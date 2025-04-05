export default function Question({ questionData, index }) {
    return (
        <>
            <h3>Question {index}</h3>
            <p>{questionData.question}</p>
        </>
    );
}