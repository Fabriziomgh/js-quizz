import {
   Card,
   List,
   ListItem,
   ListItemButton,
   ListItemText,
   Typography,
} from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useQuestionsStore } from '../store/questions';
import { getBgColor } from '../utils/get-bg-color';

const Question = ({ info }) => {
   const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

   const createHandleClick = (index) => () => {
      selectAnswer(info.id, index);
   };

   return (
      <Card variant="outlined" sx={{ textAlign: 'left', p: 2 }}>
         <Typography variant="h5">{info.question}</Typography>
         <SyntaxHighlighter language="Javascript" style={tomorrowNightEighties}>
            {info.code}
         </SyntaxHighlighter>
         <List disablePadding sx={{ bgcolor: '#222' }}>
            {info.answers.map((answer, i) => (
               <ListItem key={i} disablePadding divider>
                  <ListItemButton
                     onClick={createHandleClick(i)}
                     disabled={info.selectUserAnswer != null}
                     sx={{
                        backgroundColor: getBgColor(i, info),
                     }}
                  >
                     <ListItemText
                        primary={answer}
                        sx={{ textAlign: 'center' }}
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Card>
   );
};

export default Question;
