const addDivInProductList = () => {
  // Create a div element
  const div = document.createElement('div');

  // Set the div's content to random text
  div.textContent = 'Random Text';

  // Add CSS styles using JavaScript
  div.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 3%;
    padding: 0.8rem;

    box-shadow: 1px 1px 5px 5px #f1f1f1;
    border-radius: 10px;
  
    text-align: center;
  `;

  // Find the 4th product on the page
  const fourthProduct = document.querySelector('.product-item:nth-child(4)');

  // Insert the div after the 4th product
  fourthProduct?.insertAdjacentElement('afterend', div);

  // Apply width based on media queries
  const isNotebook = window.matchMedia('(min-width: 1024px)');
  const isTablet = window.matchMedia('(min-width: 768px)');

  const setDivWidth = () => {
    if (isNotebook.matches) {
      div.style.width = '47%'; // 2 columns on screens >= 1024px
      div.style.minHeight = '584px';

      return;
    }

    if (isTablet.matches) {
      div.style.width = '64%'; // 2/3 width on screens >= 768px
      div.style.minHeight = '504px';

      return;
    }

    div.style.width = '100%'; // Full width on smaller screens
    div.style.minHeight = '380px';
  };

  // Set initial width
  setDivWidth();

  // Update width when the window is resized
  window.addEventListener('resize', setDivWidth);
};

// call add div function
addDivInProductList();
