export default function Result({ isCorrect }) {
    let resultMessage = "";
    if (isCorrect === 1) {
        resultMessage = "✅ Correct!";
    } else if(isCorrect === 2) {
        resultMessage = "❌ Incorrect.";
    }

    return (
            <p>{resultMessage}</p>
    );
}