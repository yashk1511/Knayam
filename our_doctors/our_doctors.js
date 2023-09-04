// JavaScript code to handle form submission
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      time: time,
    };

    // Send the form data to the server (you'll need to implement the server-side code)
    // You can use AJAX or fetch to send an HTTP request to the server and handle the response
    // Example using fetch:
    fetch("/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        // Handle the response from the server
        if (response.ok) {
          alert("Appointment booked successfully!");
          // Clear the form fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("date").value = "";
          document.getElementById("time").value = "";
        } else {
          alert("Failed to book appointment. Please try again.");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("An error occurred. Please try again later.");
      });
  });
