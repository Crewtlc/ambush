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

  alert("Form submitted successfully!");
  return true;
}
