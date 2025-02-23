document.getElementById("submit").addEventListener("click", function() {
  let website = document.getElementById("website").value.trim();
  let date = document.getElementById("date").value.replace(/-/g, ""); // Convert YYYY-MM-DD to YYYYMMDD
  
  if (!website) {
      alert("Please enter a website URL.");
      return;
  }
  if (!date) {
      alert("Please select a date.");
      return;
  }
  
  let apiUrl = `https://archive.org/wayback/available?url=${encodeURIComponent(website)}&timestamp=${date}`;
  
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.archived_snapshots && data.archived_snapshots.closest) {
              let archiveUrl = data.archived_snapshots.closest.url;
              window.open(archiveUrl, "_blank");
          } else {
              alert("No archived version found for the given date.");
          }
      })
      .catch(error => {
          console.error("Error fetching Wayback Machine data:", error);
          alert("Error retrieving archive data. Try again later.");
      });
});
