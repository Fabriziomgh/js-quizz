import { Button, Stack } from '@mui/material';
import { useAnswers } from '../hooks/useAnswers';
import { useQuestionsStore } from '../store/questions';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Footer = () => {
   const reset = useQuestionsStore((state) => state.reset);
   const { correct, incorrect, unanswered } = useAnswers();
   return (
      <footer style={{ padding: '1rem 0' }}>
         <small>
            <Stack
               direction="row"
               alignItems="center"
               justifyContent="center"
               gap={1}
            >
               <CheckIcon color="success" /> Correctas [{correct}]
               <ClearIcon color="error" /> Incorrectas [{incorrect}]
               <QuestionMarkIcon color="info" /> Sin responder [{unanswered}]
            </Stack>
         </small>
         <div style={{ padding: '1rem' }}>
            <Button onClick={reset}>Reiniciar juego</Button>
         </div>
      </footer>
   );
};

export default Footer;
