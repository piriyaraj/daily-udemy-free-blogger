document.addEventListener('DOMContentLoaded', () => {
  // --- Static Category Data ---
  const categoryData = [
      { "id": 7, "name": "Business", "slug": "business", "subcategories": [ { "id": 25, "name": "Business Analytics & Intelligence", "slug": "business-analytics-intelligence" }, { "id": 50, "name": "Business Law", "slug": "business-law" }, { "id": 58, "name": "Business Strategy", "slug": "business-strategy" }, { "id": 44, "name": "Communications", "slug": "communications" }, { "id": 23, "name": "E-Commerce", "slug": "e-commerce" }, { "id": 18, "name": "Entrepreneurship", "slug": "entrepreneurship" }, { "id": 126, "name": "Finance", "slug": "finance" }, { "id": 45, "name": "Human Resources", "slug": "human-resources" }, { "id": 107, "name": "Industry", "slug": "industry" }, { "id": 122, "name": "Leadership", "slug": "leadership" }, { "id": 135, "name": "Maketing Analytics & Automation", "slug": "maketing-analytics-automation" }, { "id": 30, "name": "Management", "slug": "management" }, { "id": 130, "name": "Marketing Fundamentals", "slug": "marketing-fundamentals" }, { "id": 134, "name": "Media", "slug": "media" }, { "id": 65, "name": "Operations", "slug": "operations" }, { "id": 51, "name": "Other Business", "slug": "other-business" }, { "id": 69, "name": "Project Management", "slug": "project-management" }, { "id": 11, "name": "Real Estate", "slug": "real-estate" }, { "id": 37, "name": "Sales", "slug": "sales" }, { "id": 132, "name": "Social Science", "slug": "social-science" } ] },
      { "id": 8, "name": "Design", "slug": "design", "subcategories": [ { "id": 27, "name": "3D & Animation", "slug": "3d-animation" }, { "id": 67, "name": "Architectural Design", "slug": "architectural-design" }, { "id": 117, "name": "Design Thinking", "slug": "design-thinking" }, { "id": 34, "name": "Design Tools", "slug": "design-tools" }, { "id": 111, "name": "Fashion Design", "slug": "fashion-design" }, { "id": 54, "name": "Game Design", "slug": "game-design" }, { "id": 24, "name": "Graphic Design & Illustration", "slug": "graphic-design-illustration" }, { "id": 114, "name": "Interior Design", "slug": "interior-design" }, { "id": 15, "name": "Other Design", "slug": "other-design" }, { "id": 91, "name": "User Experience Design", "slug": "user-experience-design" }, { "id": 20, "name": "Web Design", "slug": "web-design" } ] },
      { "id": 2, "name": "Development", "slug": "development", "subcategories": [ { "id": 14, "name": "Data Science", "slug": "data-science" }, { "id": 63, "name": "Database Design & Development", "slug": "database-design-development" }, { "id": 125, "name": "Design Tools", "slug": "design-tools" }, { "id": 64, "name": "Development Tools", "slug": "development-tools" }, { "id": 10, "name": "Game Development", "slug": "game-development" }, { "id": 49, "name": "Mobile Development", "slug": "mobile-development" }, { "id": 55, "name": "No-Code Development", "slug": "no-code-development" }, { "id": 2, "name": "Programming Languages", "slug": "programming-languages" }, { "id": 60, "name": "Software Engineering", "slug": "software-engineering" }, { "id": 96, "name": "Software Testing", "slug": "software-testing" }, { "id": 19, "name": "Web Development", "slug": "web-development" } ] },
      { "id": 5, "name": "Finance & Accounting", "slug": "finance-accounting", "subcategories": [ { "id": 7, "name": "Accounting & Bookkeeping", "slug": "accounting-bookkeeping" }, { "id": 71, "name": "Compliance", "slug": "compliance" }, { "id": 82, "name": "Cryptocurrency & Blockchain", "slug": "cryptocurrency-blockchain" }, { "id": 120, "name": "Economics", "slug": "economics" }, { "id": 42, "name": "Finance", "slug": "finance" }, { "id": 68, "name": "Finance Cert & Exam Prep", "slug": "finance-cert-exam-prep" }, { "id": 90, "name": "Financial Modeling & Analysis", "slug": "financial-modeling-analysis" }, { "id": 6, "name": "Investing & Trading", "slug": "investing-trading" }, { "id": 9, "name": "Money Management Tools", "slug": "money-management-tools" }, { "id": 76, "name": "Other Finance & Accounting", "slug": "other-finance-accounting" }, { "id": 92, "name": "Taxes", "slug": "taxes" } ] },
      { "id": 10, "name": "Health & Fitness", "slug": "health-fitness", "subcategories": [ { "id": 22, "name": "Dieting", "slug": "dieting" }, { "id": 113, "name": "Fitness", "slug": "fitness" }, { "id": 36, "name": "General Health", "slug": "general-health" }, { "id": 109, "name": "Mental Health", "slug": "mental-health" }, { "id": 98, "name": "Nutrition", "slug": "nutrition" }, { "id": 118, "name": "Other Health & Fitness", "slug": "other-health-fitness" }, { "id": 129, "name": "Other Lifestyle", "slug": "other-lifestyle" }, { "id": 128, "name": "Parenting & Relationships", "slug": "parenting-relationships" }, { "id": 99, "name": "Safety & First Aid", "slug": "safety-first-aid" }, { "id": 112, "name": "Self Defense", "slug": "self-defense" }, { "id": 121, "name": "Sports", "slug": "sports" } ] },
      { "id": 3, "name": "IT & Software", "slug": "it-software", "subcategories": [ { "id": 124, "name": "Data Science", "slug": "data-science" }, { "id": 88, "name": "Hardware", "slug": "hardware" }, { "id": 4, "name": "IT Certification", "slug": "it-certification" }, { "id": 12, "name": "Network & Security", "slug": "network-security" }, { "id": 75, "name": "Operating Systems", "slug": "operating-systems" }, { "id": 123, "name": "Operations", "slug": "operations" }, { "id": 3, "name": "Other IT & Software", "slug": "other-it-software" }, { "id": 127, "name": "Sotware Engineering", "slug": "sotware-engineering" } ] },
      { "id": 12, "name": "Lifestyle", "slug": "lifestyle", "subcategories": [ { "id": 87, "name": "Arts & Crafts", "slug": "arts-crafts" }, { "id": 110, "name": "Beauty & Makeup", "slug": "beauty-makeup" }, { "id": 105, "name": "Food & Beverage", "slug": "food-beverage" }, { "id": 108, "name": "Gaming", "slug": "gaming" }, { "id": 74, "name": "Home Improvement", "slug": "home-improvement" }, { "id": 59, "name": "Other Lifestyle", "slug": "other-lifestyle" }, { "id": 93, "name": "Travel", "slug": "travel" } ] },
      { "id": 4, "name": "Marketing", "slug": "marketing", "subcategories": [ { "id": 95, "name": "Advertising", "slug": "advertising" }, { "id": 28, "name": "Affiliate Marketing", "slug": "affiliate-marketing" }, { "id": 86, "name": "Branding", "slug": "branding" }, { "id": 40, "name": "Content Marketing", "slug": "content-marketing" }, { "id": 13, "name": "Digital Marketing", "slug": "digital-marketing" }, { "id": 26, "name": "Growth Hacking", "slug": "growth-hacking" }, { "id": 21, "name": "Marketing Analytics & Automation", "slug": "marketing-analytics-automation" }, { "id": 103, "name": "Marketing Fundamentals", "slug": "marketing-fundamentals" }, { "id": 106, "name": "Other Marketing", "slug": "other-marketing" }, { "id": 115, "name": "Product Marketing", "slug": "product-marketing" }, { "id": 119, "name": "Public Relations", "slug": "public-relations" }, { "id": 77, "name": "Search Engine Optimization", "slug": "search-engine-optimization" }, { "id": 5, "name": "Social Media Marketing", "slug": "social-media-marketing" }, { "id": 131, "name": "Social Science", "slug": "social-science" }, { "id": 48, "name": "Video & Mobile Marketing", "slug": "video-mobile-marketing" } ] },
      { "id": 13, "name": "Music", "slug": "music", "subcategories": [ { "id": 62, "name": "Instruments", "slug": "instruments" }, { "id": 101, "name": "Music Fundamentals", "slug": "music-fundamentals" }, { "id": 72, "name": "Music Production", "slug": "music-production" }, { "id": 78, "name": "Music Software", "slug": "music-software" }, { "id": 170, "name": "Music Techniques", "slug": "music-techniques" }, { "id": 116, "name": "Vocal", "slug": "vocal" } ] },
      { "id": 6, "name": "Office Productivity", "slug": "office-productivity", "subcategories": [ { "id": 138, "name": "Apple", "slug": "apple" }, { "id": 33, "name": "Google", "slug": "google" }, { "id": 32, "name": "Microsoft", "slug": "microsoft" }, { "id": 171, "name": "Oracle", "slug": "oracle" }, { "id": 8, "name": "Other Office Productivity", "slug": "other-office-productivity" }, { "id": 161, "name": "Project Management", "slug": "project-management" }, { "id": 61, "name": "SAP", "slug": "sap" } ] },
      { "id": 9, "name": "Personal Development", "slug": "personal-development", "subcategories": [ { "id": 141, "name": "Arts & Crafts", "slug": "arts-crafts" }, { "id": 16, "name": "Career Development", "slug": "career-development" }, { "id": 43, "name": "Creativity", "slug": "creativity" }, { "id": 39, "name": "Happiness", "slug": "happiness" }, { "id": 140, "name": "Humanities", "slug": "humanities" }, { "id": 89, "name": "Influence", "slug": "influence" }, { "id": 70, "name": "Leadership", "slug": "leadership" }, { "id": 84, "name": "Memory & Study Skills", "slug": "memory-study-skills" }, { "id": 83, "name": "Motivation", "slug": "motivation" }, { "id": 81, "name": "Other Personal Development", "slug": "other-personal-development" }, { "id": 38, "name": "Parenting & Relationships", "slug": "parenting-relationships" }, { "id": 46, "name": "Personal Brand Building", "slug": "personal-brand-building" }, { "id": 41, "name": "Personal Productivity", "slug": "personal-productivity" }, { "id": 29, "name": "Personal Transformation", "slug": "personal-transformation" }, { "id": 31, "name": "Self Esteem & Confidence", "slug": "self-esteem-confidence" }, { "id": 85, "name": "Stress Management", "slug": "stress-management" } ] },
      { "id": 11, "name": "Photography & Video", "slug": "photography-video", "subcategories": [ { "id": 79, "name": "Commercial Photography", "slug": "commercial-photography" }, { "id": 104, "name": "Digital Photography", "slug": "digital-photography" }, { "id": 198, "name": "Music Production", "slug": "music-production" }, { "id": 94, "name": "Other Photography & Video", "slug": "other-photography-video" }, { "id": 53, "name": "Photography", "slug": "photography" }, { "id": 52, "name": "Photography Tools", "slug": "photography-tools" }, { "id": 102, "name": "Portrait Photography", "slug": "portrait-photography" }, { "id": 73, "name": "Video Design", "slug": "video-design" } ] },
      { "id": 1, "name": "Teaching & Academics", "slug": "teaching-academics", "subcategories": [ { "id": 137, "name": "Arts & Crafts", "slug": "arts-crafts" }, { "id": 139, "name": "Data Science", "slug": "data-science" }, { "id": 1, "name": "Engineering", "slug": "engineering" }, { "id": 97, "name": "Humanities", "slug": "humanities" }, { "id": 17, "name": "Language", "slug": "language" }, { "id": 47, "name": "Math", "slug": "math" }, { "id": 136, "name": "Music Fundamentals", "slug": "music-fundamentals" }, { "id": 56, "name": "Online Education", "slug": "online-education" }, { "id": 80, "name": "Other Teaching & Academics", "slug": "other-teaching-academics" }, { "id": 57, "name": "Science", "slug": "science" }, { "id": 66, "name": "Social Science", "slug": "social-science" }, { "id": 100, "name": "Teacher Training", "slug": "teacher-training" }, { "id": 35, "name": "Test Prep", "slug": "test-prep" } ] }
  ];

  // --- Global State & Elements ---
  const sidebar = document.querySelector('.sidebar');
  const courseContainer = document.getElementById('course-container');
  const loadingIndicator = document.getElementById('loading-indicator');
  const sidebarList = document.getElementById('sidebar-category-list');
  const footerList = document.getElementById('footer-category-list');
  const languageSelect = document.getElementById('language-select');
  const sortSelect = document.getElementById('sort-select');
  
  let currentCategory = 'All Courses';
  let currentSubCategory = null;
  let currentLanguage = '';
  let currentSortBy = 'sale_start';
  let currentPage = 1;
  let totalPages = 1;
  let isLoading = false;
  const limit = 14;
  const API_BASE_URL = 'https://cdn.real.discount/api/courses';

  // --- Functions ---
  function populateCategories() {
      sidebarList.innerHTML = '<li><a href="#" class="category-link active" data-category="All Courses">All Courses</a></li>';
      footerList.innerHTML = '';

      for (const category of categoryData) {
          const footerColumn = document.createElement('div');
          footerColumn.className = 'footer-column';
          let footerHTML = `<h4>${category.name}</h4>`;
          
          const sidebarLi = document.createElement('li');
          sidebarLi.className = 'has-submenu';
          let sidebarSubmenuHTML = '';

          for (const sub of category.subcategories) {
              footerHTML += `<a href="#" class="category-link" data-category="${sub.name}" data-parent-category="${category.name}">${sub.name}</a>`;
              sidebarSubmenuHTML += `<li><a href="#" class="category-link" data-category="${sub.name}" data-parent-category="${category.name}">${sub.name}</a></li>`;
          }

          footerColumn.innerHTML = footerHTML;
          footerList.appendChild(footerColumn);

          sidebarLi.innerHTML = `
              <a href="#" class="category-link" data-category="${category.name}">
                  ${category.name}
                  <span class="submenu-toggle-icon material-symbols-outlined">expand_more</span>
              </a>
              <ul class="submenu">${sidebarSubmenuHTML}</ul>
          `;
          sidebarList.appendChild(sidebarLi);
      }
  }
  
  function handleCategoryChange(newCategory, newSubCategory = null) {
    if (newCategory === currentCategory && newSubCategory === currentSubCategory) return;
    
    currentCategory = newCategory;
    currentSubCategory = newSubCategory;
    
    document.querySelectorAll('.category-link.active').forEach(el => el.classList.remove('active'));
    
    const selector = newSubCategory 
      ? `.category-link[data-category="${newSubCategory}"][data-parent-category="${newCategory}"]`
      : `.category-link[data-category="${newCategory}"]`;
      
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('active');
      const parentLi = el.closest('.has-submenu');
      if(parentLi) parentLi.classList.add('open');
    });
    
    resetAndFetchCourses();
  }

  function handleLanguageChange(newLanguage) {
    if (newLanguage === currentLanguage) return;
    
    currentLanguage = newLanguage;
    resetAndFetchCourses();
  }

  function handleSortChange(newSortBy) {
    if (newSortBy === currentSortBy) return;
    
    currentSortBy = newSortBy;
    resetAndFetchCourses();
  }

  function resetAndFetchCourses() {
    // Correctly clear only the course cards, leaving the loader intact
    const existingCards = courseContainer.querySelectorAll('.course-card');
    existingCards.forEach(card => card.remove());
    
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
    loadingIndicator.classList.add('loading');

    let url = `${API_BASE_URL}?page=${page}&limit=${limit}&sortBy=${currentSortBy}`;
    if (currentCategory !== 'All Courses') {
      url += `&category=${encodeURIComponent(currentCategory)}`;
      if (currentSubCategory) {
          url += `&subcategory=${encodeURIComponent(currentSubCategory)}`;
      }
    }
    if (currentLanguage) {
      url += `&language=${encodeURIComponent(currentLanguage)}`;
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Network response was not ok`);
      const data = await response.json();
      
      if (page === 1) {
        totalPages = data.totalPages;
      }
      
      displayCourses(data.items);
      currentPage++; 

    } catch (error) {
      console.error('Fetch error:', error);
      loadingIndicator.innerHTML = '<span>Failed to load courses. Please try scrolling again.</span>';
    } finally {
      isLoading = false;
      loadingIndicator.classList.remove('loading');
      if (currentPage > totalPages) {
          loadingIndicator.style.display = 'none';
      }
    }
  }

  function formatSaleDuration(saleStart) {
    const now = new Date();
    const saleDate = new Date(saleStart);
    
    const diffInMs = now.getTime() - saleDate.getTime();
    
    // If sale_start is in the future, show "Coming soon"
    if (diffInMs < 0) {
      return 'Coming soon';
    }
    
    // Convert to seconds first
    const diffInSeconds = Math.floor(diffInMs / 1000);
    
    // Calculate days, hours, minutes
    const days = Math.floor(diffInSeconds / (24 * 60 * 60));
    const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
    
    if (days > 0) {
      return `${days}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return 'Just now';
    }
  }

  function displayCourses(courses) {
    const filteredCourses = courses.filter(course => course.store !== 'Sponsored');

    if (filteredCourses.length === 0 && currentPage === 1) {
      courseContainer.innerHTML = '<p class="no-courses-msg">No courses found in this category.</p>';
      loadingIndicator.style.display = 'none';
      return;
    }

    if(filteredCourses.length > 0) {
        loadingIndicator.style.display = 'flex';
        loadingIndicator.innerHTML = '<div class="spinner"></div>';
    }

    filteredCourses.forEach(course => {
      const saleDuration = formatSaleDuration(course.sale_start);
      const isComingSoon = saleDuration === 'Coming soon';
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="card-image-link">
          <div class="sale-duration-badge ${isComingSoon ? 'coming-soon' : ''}">${saleDuration}</div>
          <img src="${course.image}" alt="${course.name}" loading="lazy">
        </a>
        <div class="card-content">
          <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="card-title-link">
            <h3>${course.name}</h3>
          </a>
          <div class="course-category">
            <a href="#" class="category-tag-link" data-category="${course.category}">${course.category}</a>
            <span>&gt;</span>
            <a href="#" class="category-tag-link" data-category="${course.subcategory}" data-parent-category="${course.category}">${course.subcategory}</a>
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
          <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="join-button">Join Now</a>
        </div>
      `;
      courseContainer.insertBefore(courseCard, loadingIndicator);
    });
  }

  // --- Event Listeners ---
  document.getElementById('menu-toggle').addEventListener('click', () => sidebar.classList.toggle('is-open'));

  // Language filter event listener
  languageSelect.addEventListener('change', (e) => {
    handleLanguageChange(e.target.value);
  });

  // Sort filter event listener
  sortSelect.addEventListener('change', (e) => {
    handleSortChange(e.target.value);
  });

  document.body.addEventListener('click', (e) => {
    const categoryLink = e.target.closest('.category-link, .category-tag-link');
    if (categoryLink) {
      e.preventDefault();
      const category = categoryLink.dataset.category;
      const parentCategory = categoryLink.dataset.parentCategory;
      handleCategoryChange(parentCategory || category, parentCategory ? category : null);
    }
    
    const submenuHeader = e.target.closest('.has-submenu > a');
    if (submenuHeader) {
        const parentLi = submenuHeader.parentElement;
        if(parentLi && !e.target.closest('.submenu')) {
             e.preventDefault();
             parentLi.classList.toggle('open');
        }
    }
  });

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !isLoading) {
      fetchAndDisplayCourses(currentPage);
    }
  }, { rootMargin: '400px' });

  // --- Initial Load ---
  populateCategories();
  observer.observe(loadingIndicator);
  fetchAndDisplayCourses(currentPage);
});
