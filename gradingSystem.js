function gradingSystem(score){
   if(score >= 90) return 'Grade A';

   else if(score >= 80 && score <= 89) return 'Grade B';

   else if(score >= 60 && score <= 79) return 'Grade C';

   else if(score >= 33 && score <= 59) return 'Grade D';

   else return 'Grade F';
}

console.log(gradingSystem(32));