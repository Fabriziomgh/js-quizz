export const getBgColor = (index, info) => {
   const { correctAnswer, selectUserAnswer } = info;

   if (selectUserAnswer == null) return 'transparent';
   if (index !== correctAnswer && index !== selectUserAnswer)
      return 'transparent';
   if (index === correctAnswer) return 'green';
   if (index === selectUserAnswer) return 'red';
   return 'transparent';
};
