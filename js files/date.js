// Display live Kenya date and time

function displayKenyaTime() {
  const now = new Date();

  // Format date & time for Kenya
  const kenyaTime = new Intl.DateTimeFormat("en-KE", {
    timeZone: "Africa/Nairobi",
    dateStyle: "full",
    timeStyle: "medium"
  }).format(now);

  // Clear previous output and display
  console.clear();
  console.log("🇰🇪 Kenya Current Date & Time");
  console.log(kenyaTime);
}

// Update every second
setInterval(displayKenyaTime, 1000);