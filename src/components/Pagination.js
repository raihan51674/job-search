const Pagination = ({ currentPage, onPageChange }) => {
  // Define the 'Pagination' component, which takes two props:
  // - 'currentPage': the current active page number.
  // - 'onPageChange': a function to handle when the page is changed.

  return (
    <div className="mb-20">


      <div className="flex justify-center items-center space-x-4 mt-8">
        {/* Create a div container for the pagination controls, using Tailwind CSS to:
        - Center the buttons horizontally and vertically with 'flex', 'justify-center', and 'items-center'.
        - Add space between the buttons and the page number with 'space-x-4'.
        - Add a margin at the top with 'mt-8'. */}

        <button
          className="px-4 py-1 border font-semibold inline-flex items-center justify-center border-gray-400 rounded-md hover:bg-gray-900 cursor-pointer hover:text-white duration-300 ease-in-out"
          // Style the "Previous" button with a light gray background, padding, rounded corners, and a hover effect that changes the background to a darker gray.

          onClick={() => onPageChange(currentPage - 1)}
          // Attach an onClick event handler that calls 'onPageChange' with the new page number (currentPage - 1).

          disabled={currentPage === 1}
        // Disable the button if the current page is the first page (currentPage === 1), so users can't go to a previous page when on the first page.
        >
          Previous
        </button>

        <span className="text-gray-700 font-bold">Page {currentPage}</span>
        {/* // Display the current page number in a span element, styled with gray text (text-gray-700). */}

        <button
          className="px-4 py-1 border font-semibold inline-flex items-center justify-center border-gray-400 rounded-md hover:bg-gray-900 cursor-pointer hover:text-white duration-300 ease-in-out"
          // Style the "Next" button similarly to the "Previous" button with a light gray background, padding, and hover effect.

          onClick={() => onPageChange(currentPage + 1)}
        // Attach an onClick event handler that calls 'onPageChange' with the new page number (currentPage + 1).
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
// Export the 'Pagination' component as the default export.
