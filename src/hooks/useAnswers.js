import { useQuestionsStore } from '../store/questions';

export const useAnswers = () => {
   const questions = useQuestionsStore((state) => state.questions);

   let correct = 0;
   let incorrect = 0;
   let unanswered = 0;

   questions.forEach((question) => {
      const { selectUserAnswer, correctAnswer } = question;
      if (selectUserAnswer == null) unanswered++;
      else if (selectUserAnswer === correctAnswer) correct++;
      else incorrect++;
   });

   return {
      correct,
      incorrect,
      unanswered,
   };
};
