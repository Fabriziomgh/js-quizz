import { IconButton, Stack } from '@mui/material';
import { useQuestionsStore } from '../store/questions';
import { ArrowBackIosNew } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';

import Footer from './Footer';
import Question from './Question';

export const Game = () => {
   const questions = useQuestionsStore((state) => state.questions);
   const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
   const questionInfo = questions[currentQuestion];

   const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
   const goPreviusQuestion = useQuestionsStore(
      (state) => state.goPreviusQuestion
   );

   return (
      <>
         <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
            marginBottom={2}
         >
            <IconButton
               onClick={goPreviusQuestion}
               disabled={currentQuestion === 0}
            >
               <ArrowBackIosNew />
            </IconButton>
            {currentQuestion + 1} / {questions.length}
            <IconButton
               onClick={goNextQuestion}
               disabled={currentQuestion >= questions.length - 1}
            >
               <ArrowForwardIos />
            </IconButton>
         </Stack>
         <Question info={questionInfo} />
         <Footer />
      </>
   );
};
