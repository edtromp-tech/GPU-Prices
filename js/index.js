
  document.addEventListener('DOMContentLoaded', function () {
    // Function to update the table based on filter criteria
    function updateTable() {
      const brandFilter = getCheckedCheckboxes('brand');
      const priceFilter = getCheckedCheckboxes('price');
	  const memFilter = getCheckedCheckboxes('mem');
      const clockFilter = getCheckedCheckboxes('clock');
	  const processorFilter = getCheckedCheckboxes('processor');
	  const ramFilter = getCheckedCheckboxes('ram');
	
      // Iterate through each GPU row
      const gpuRows = document.querySelectorAll('.gpu');
      gpuRows.forEach(function (row) {
        const brand = row.getAttribute('data-brand');
        const price = row.getAttribute('data-price');
		const mem = row.getAttribute('data-mem');
        const clock = row.getAttribute('data-clock');
		const processor = row.getAttribute('data-processor');
        const ram = row.getAttribute('data-ram');

        // Check if the row meets the filter criteria
        const brandMatch = brandFilter.includes(brand) || brandFilter.length === 0;
        const priceMatch = priceFilter.includes(price) || priceFilter.length === 0;
		const memMatch = memFilter.includes(mem) || memFilter.length === 0;
        const clockMatch = clockFilter.includes(clock) || clockFilter.length === 0;
		const processorMatch = processorFilter.includes(processor) || processorFilter.length === 0;
        const ramMatch = ramFilter.includes(ram) || ramFilter.length === 0;

        // Show or hide the row based on filter criteria
        row.style.display = brandMatch && priceMatch && memMatch && clockMatch && ramMatch && processorMatch ? '' : 'none';
      });
    }

    // Function to get checked checkboxes for a given group
    function getCheckedCheckboxes(group) {
      const checkboxes = document.querySelectorAll(`input[data-${group}]:checked`);
      return Array.from(checkboxes).map(function (checkbox) {
        return checkbox.getAttribute(`data-${group}`);
      });
    }

    // Attach change event listeners to the brand and price checkboxes
    document.querySelectorAll('[data-brand], [data-price], [data-mem], [data-clock], [data-ram], [data-processor]').forEach(function (checkbox) {
      checkbox.addEventListener('change', updateTable);
    });
  });

