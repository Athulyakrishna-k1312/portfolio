function toggleDetails(sectionId) {
    // Get all toggleable sections inside the specific container
    const sections = document.querySelectorAll(".section ul");
    
    // Loop through each section and toggle visibility
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.classList.toggle("hidden"); // Toggle visibility for the clicked section
        } else {
            section.classList.add("hidden"); // Ensure other sections remain hidden
        }
    });
  }
  