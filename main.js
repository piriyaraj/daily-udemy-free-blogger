document.addEventListener('DOMContentLoaded', () => {
  // --- Global State & Elements ---
  const sidebar = document.querySelector('.sidebar');
  const courseContainer = document.getElementById('course-container');
  const loadingIndicator = document.getElementById('loading-indicator');
  
  let currentCategory = 'All Courses';
  let currentPage = 1;
  let totalPages = 1;
  let isLoading = false;
  const limit = 14;
  const API_BASE_URL = 'https://cdn.real.discount/api/courses';

  // --- Functions ---
  
  function handleCategoryChange(newCategory) {
    if (!newCategory || newCategory === currentCategory) return;
    currentCategory = newCategory;
    
    document.querySelector('.category-link.active')?.classList.remove('active');
    document.querySelector(`.category-link[data-category="${newCategory}"]`)?.classList.add('active');
    
    courseContainer.innerHTML = '';
    currentPage = 1;
    totalPages = 1;
    fetchAndDisplayCourses(currentPage);
    
    if (sidebar.classList.contains('is-open')) {
      sidebar.classList.remove('is-open');
    }
  }

  async function fetchAndDisplayCourses(page) {
    if (isLoading || (page > totalPages && totalPages > 1)) return;
    
    isLoading = true;
    loadingIndicator.style.display = 'flex';

    let url = `${API_BASE_URL}?page=${page}&limit=${limit}&sortBy=sale_start`;
    if (currentCategory !== 'All Courses') {
      url += `&category=${encodeURIComponent(currentCategory)}`;
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Network response was not ok`);
      const data = await response.json();
      
      if (page === 1) totalPages = data.totalPages;
      displayCourses(data.items);
      currentPage++;
    } catch (error) {
      console.error('Fetch error:', error);
      loadingIndicator.innerHTML = '<span>Failed to load courses.</span>';
      totalPages = page; // Stop further fetches
    } finally {
      isLoading = false;
      if (currentPage > totalPages) {
        loadingIndicator.style.display = 'none';
      }
    }
  }

  function displayCourses(courses) {
    const filteredCourses = courses.filter(course => course.store !== 'Sponsored');

    if (filteredCourses.length === 0 && currentPage === 1) {
      courseContainer.innerHTML = '<p class="no-courses-msg">No courses found in this category.</p>';
      loadingIndicator.style.display = 'none';
      return;
    }

    filteredCourses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      // Create separate, clickable links for the main URL and categories
      courseCard.innerHTML = `
        <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="card-image-link">
          <img src="${course.image}" alt="${course.name}" loading="lazy">
        </a>
        <div class="card-content">
          <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="card-title-link">
            <h3>${course.name}</h3>
          </a>
          <div class="course-category">
            <a href="#" class="category-tag-link" data-category="${course.category}">${course.category}</a>
            <span>&gt;</span>
            <a href="#" class="category-tag-link" data-category="${course.subcategory}">${course.subcategory}</a>
          </div>
          <div class="card-footer">
            <div class="course-stats">
              <span><span class="material-symbols-outlined">star</span> ${course.rating.toFixed(1)}</span>
              <span><span class="material-symbols-outlined">schedule</span> ${course.lectures} hours</span>
            </div>
            <div class="course-price">
              <span class="price-original">$${course.price.toFixed(2)}</span>
              <span class="price-sale">$${course.sale_price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      `;
      courseContainer.appendChild(courseCard);
    });
  }

  // --- Event Listeners ---
  document.getElementById('menu-toggle').addEventListener('click', () => sidebar.classList.toggle('is-open'));

  // Use event delegation for all category links
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.category-link') || e.target.matches('.category-tag-link')) {
      e.preventDefault();
      handleCategoryChange(e.target.dataset.category);
    }
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !isLoading) {
      fetchAndDisplayCourses(currentPage);
    }
  }, { rootMargin: '400px' });

  // --- Initial Load ---
  observer.observe(loadingIndicator);
  fetchAndDisplayCourses(currentPage);
});
