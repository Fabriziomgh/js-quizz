import { Button } from '@mui/material';
import { useQuestionsStore } from '../store/questions';

const Start = () => {
   const fetchQ = useQuestionsStore((state) => state.fetchQuestions);
   return (
      <Button
         onClick={() => {
            fetchQ(5);
         }}
         variant="contained"
      >
         ¡Comenzar!
      </Button>
   );
};

export default Start;
