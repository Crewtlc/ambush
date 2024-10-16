function validateForm() {
  const dateTime = document.getElementById("dateTime").value;
  const cliName = document.getElementById("cliName").value;
  const trainNo = document.getElementById("trainNo").value;
  const location = document.getElementById("location").value;
  const oheMastNo = document.getElementById("oheMastNo").value;
  const observation = document.getElementById("observation").value;

  if (!dateTime || !cliName || !trainNo || !location || !oheMastNo || !observation) {
    alert("Please fill out all fields.");
    return false;
  }

   return true;
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwfYdmPeRdmF7psJWDNL6lb9FNN-NsJlWorf4sY4RzmxnUgfgawRhwIeXdR_uoE4s_J/exec';
const form = document.forms['ambushCheckForm'];
const submitButton = form.querySelector('button[type="submit"]');  // Select the submit button

form.addEventListener('submit', async e => {
  e.preventDefault();  // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    alert("Wait! Your form is submitting");
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      alert("Your details have been recorded, thank you.");
      window.location.reload();  // Reload the page after form submission
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("An error occurred during form submission. Please try again.");
  } finally {
    // Re-enable the submit button after submission is complete
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
