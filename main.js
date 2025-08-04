document.addEventListener('DOMContentLoaded', () => {
  const courseContainer = document.getElementById('course-container');
  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  let currentPage = 1;
  const limit = 14;

  // Using the direct API endpoint as requested.
  // This will likely cause a CORS error in the browser.
  const API_BASE_URL = 'https://cdn.real.discount/api/courses';

  async function fetchCourses(page) {
    const url = `${API_BASE_URL}?page=${page}&limit=${limit}&sortBy=sale_start`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      return data; // Returns the full API response { items, totalPages, ... }
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      if (courseContainer) {
        courseContainer.innerHTML = '<p class="error-message">Failed to load courses due to a network or CORS error. Please check the browser console for details.</p>';
      }
      return { items: [], totalPages: 0 };
    }
  }

  function displayCourses(courses) {
    if (!courseContainer) {
      console.error('Error: course-container element not found.');
      return;
    }
    courseContainer.innerHTML = '';
    if (courses.length === 0) {
        courseContainer.innerHTML = '<p>No courses to display.</p>';
        return;
    }
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      const courseLink = document.createElement('a');
      courseLink.href = course.url;
      courseLink.target = '_blank';
      courseLink.rel = 'noopener noreferrer';
      const courseImage = document.createElement('img');
      courseImage.src = course.image;
      courseImage.alt = course.name;
      courseImage.onerror = () => {
          courseImage.alt = "Image not available";
          courseImage.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      };
      const courseTitle = document.createElement('h3');
      courseTitle.textContent = course.name;
      courseLink.appendChild(courseImage);
      courseLink.appendChild(courseTitle);
      courseCard.appendChild(courseLink);
      courseContainer.appendChild(courseCard);
    });
  }

  function updatePaginationControls(totalPages) {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  async function loadPage(page) {
    const { items, totalPages } = await fetchCourses(page);
    displayCourses(items);
    updatePaginationControls(totalPages);
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadPage(currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    currentPage++;
    loadPage(currentPage);
  });

  // Initial load
  loadPage(currentPage);
});
