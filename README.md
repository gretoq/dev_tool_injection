### JavaScript Code for Adding a Div to the Categories Page

This JavaScript code creates and inserts a div element into the categories page for products. See below for a breakdown of each part of the code:

1. **Creating a Div Element**: Using `document.createElement`, the code creates a new div element.

2. **Setting the Div's Content**: Text content is set within the created div element using `div.textContent`.

3. **Adding CSS Styles Using JavaScript**: CSS styles are applied to the div element through `div.style.cssText`. This includes centering, box shadow, rounded corners, and other styling.

4. **Finding the Fourth Product**: Using `document.querySelector`, the code locates the fourth product on the page with the class `.product-item:nth-child(4)`.

5. **Inserting the Div After the Fourth Product**: The div element is inserted after the fourth product using `insertAdjacentElement`.

6. **Setting Width Based on Media Queries**: Media queries are used to set the width of the div based on the screen size. This ensures the correct appearance on different devices.

7. **Setting Initial Width and Updating on Window Resize**: The `setDivWidth` function sets the initial width of the div and updates it when the window is resized using the `resize` event.

8. **Calling the Function to Add the Div**: The `addDivInProductList` function is called to add the div to the categories page.

This code adds a stylized div with random text to the page, providing responsiveness for various screen sizes.

### How it work and looks like?

https://github.com/gretoq/dev_tool_injection/assets/104682987/c11bc808-0803-4b51-9ab7-a16f6960ff72
