const correctAnswers = ['B', 'B', 'B', 'B'];
const results = document.querySelector('.results');
const grade = document.querySelector('span');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show results on page
  scrollTo(0,0);
  results.classList.remove('d-none');

  let output = 0;

  const timer = setInterval(() => {
    grade.textContent = `${output}%`;
    if(output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});