const toggleButton = document.getElementById('toggleButton');
const jobText = document.getElementById('work_jobText');

toggleButton.addEventListener('click', function() {
  if (jobText.style.display === 'none') {
    jobText.style.display = 'block';
  } else {
    jobText.style.display = 'none';
  }
});