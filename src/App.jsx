import './App.css';
import Start from './components/Start';
import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptIcon } from './components/JavaScriptIcon';
import { useQuestionsStore } from './store/questions';
import { Game } from './components/Game';

function App() {
   const questions = useQuestionsStore((state) => state.questions);
   return (
      <main>
         <Container maxWidth="sm">
            <Stack
               direction="row"
               gap={2}
               justifyContent="center"
               alignItems="center"
               marginBottom={2}
            >
               <JavaScriptIcon />

               <Typography variant="h2" component="h1">
                  Javascript Quizz
               </Typography>
            </Stack>
            {questions.length > 0 && <Game />}
            {questions.length === 0 && <Start />}
         </Container>
      </main>
   );
}

export default App;
