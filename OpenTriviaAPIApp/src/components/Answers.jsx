import {Stack, Button} from '@mui/material'
import "../styles/Answers.css"

export default function Answers({ answerData, handleAnswerClick }) {

    return (
        <Stack spacing={2} mt={2}>
            {answerData.map((ans) => (
                <Button 
                    onClick={() => handleAnswerClick(ans)} 
                    key={ans} 
                    variant="contained"
                    className='button'
                >
                    {ans}
                </Button>
            ))}
        </Stack>
    );
}