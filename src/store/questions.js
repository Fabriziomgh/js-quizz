import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import data from '../data/data.json';

export const useQuestionsStore = create(
   persist(
      (set, get) => {
         return {
            questions: [],
            currentQuestion: 0,

            fetchQuestions: (limit) => {
               const questions = data
                  .sort(() => Math.random() - 0.5)
                  .slice(0, limit);
               set({ questions });
            },
            selectAnswer: (questionId, answerIndex) => {
               const { questions } = get();
               const newQuestions = structuredClone(questions);
               const questionIndex = newQuestions.findIndex(
                  (q) => q.id === questionId
               );
               const questionInfo = newQuestions[questionIndex];
               const isCorrectUserAnswer =
                  questionInfo.correctAnswer === answerIndex;
               newQuestions[questionIndex] = {
                  ...questionInfo,
                  isCorrectUserAnswer,
                  selectUserAnswer: answerIndex,
               };
               console.log(newQuestions);
               set({ questions: newQuestions });
            },
            goNextQuestion: () => {
               const { currentQuestion, questions } = get();
               const nextQuestion = currentQuestion + 1;

               if (nextQuestion < questions.length) {
                  set({ currentQuestion: nextQuestion });
               }
            },
            goPreviusQuestion: () => {
               const { currentQuestion } = get();
               const previusQuestion = currentQuestion - 1;
               if (previusQuestion >= 0) {
                  set({ currentQuestion: previusQuestion });
               }
            },
            reset: () => {
               set({ currentQuestion: 0, questions: [] });
            },
         };
      },
      {
         name: 'questions',
      }
   )
);
