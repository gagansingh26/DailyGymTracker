// Arrays to store visits and exercises
const gymVisits = [];
const exercises = [];

// Get DOM elements
const visitDateInput = document.getElementById('visit-date');
const timeSpentInput = document.getElementById('time-spent');
const addVisitButton = document.getElementById('add-visit');
const visitList = document.getElementById('visit-list');

const exerciseNameInput = document.getElementById('exercise-name');
const exerciseRepsInput = document.getElementById('exercise-reps');
const addExerciseButton = document.getElementById('add-exercise');
const exerciseList = document.getElementById('exercise-list');

// Event listener to add a gym visit
addVisitButton.addEventListener('click', () => {
  const visitDate = visitDateInput.value;
  const timeSpent = timeSpentInput.value;

  if (visitDate && timeSpent) {
    // Add visit to the gymVisits array
    gymVisits.push({ date: visitDate, timeSpent: timeSpent });

    // Display visit on the page
    const visitItem = document.createElement('li');
    visitItem.textContent = `Gym Visit: ${visitDate} | Time Spent: ${timeSpent} minutes`;
    visitList.appendChild(visitItem);

    // Clear input fields
    visitDateInput.value = '';
    timeSpentInput.value = '';
  } else {
    alert('Please fill out both the date and time spent!');
  }
});

// Event listener to add an exercise
addExerciseButton.addEventListener('click', () => {
  const exerciseName = exerciseNameInput.value;
  const exerciseReps = exerciseRepsInput.value;

  if (exerciseName && exerciseReps) {
    // Add exercise to the exercises array
    exercises.push({ name: exerciseName, reps: exerciseReps });

    // Display exercise on the page
    const exerciseItem = document.createElement('li');
    exerciseItem.innerHTML = `<span>${exerciseName}</span> - ${exerciseReps} reps`;
    exerciseList.appendChild(exerciseItem);

    // Clear input fields
    exerciseNameInput.value = '';
    exerciseRepsInput.value = '';
  } else {
    alert('Please enter both exercise name and reps!');
  }
});
