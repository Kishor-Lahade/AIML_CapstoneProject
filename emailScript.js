document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailText = document.getElementById("emailText").value;

    fetch(`http://127.0.0.1:8000/subject/${encodeURIComponent(emailText)}`)
      .then((response) => response.json())
      .then((data) => {
        const responseDiv = document.getElementById("responseDiv");
        responseDiv.innerHTML = `<strong>Subject:</strong> ${data.subject}`;
        console.log(data);
      })
      .catch((error) => {
        const responseDiv = document.getElementById("responseDiv");
        responseDiv.innerHTML = `<strong>Error:</strong> An error occurred while fetching the data.`;
        console.error("Error:", error);
      });
  });
