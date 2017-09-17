// When a button is clicked get the category of that button
$('.portfolio-category-btn').click(function() {
    $('.portfolio-category-btn').removeClass('category-btn-active');
    // Show category is active
    $(this).addClass('category-btn-active');
    // The category to filter is the value of the data attribute of this button
    var categoryToFilter = $(this).attr('data-category-btn');

    filterItems(categoryToFilter);
});

// Filter portfolio
function filterItems(category) {
    // Hide all items
    $(".portfolio-category-item").addClass('animated zoomOut').hide()

    // If the all button is clicked show all the items
    if (category == 'all') {
        $(".portfolio-category-item")
            .removeClass('animated zoomOut')
            .addClass('animated zoomIn all-categories')
            .show();
    } else {
        // If another category button is clicked show all items with data value matching that category
        $(".portfolio-category-item[data-portfolio-category='" + category + "']")
            .removeClass('animated zoomOut')
            .addClass('animated zoomIn')
            .show();
        // Hide items with data value not matching that category
        $(".portfolio-category-item").not("[data-portfolio-category='" + category + "']")
            .removeClass('animated zoomIn')
            .addClass('animated zoomOut')
            .hide();
    };
};