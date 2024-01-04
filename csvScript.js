document.addEventListener('DOMContentLoaded', function () {
    // Fetch CSV data
    fetch('GPU.csv')
        .then(response => response.text())
        .then(csvData => {
            // Parse CSV data
            const rows = csvData.split('\n');
            const headers = rows[0].split(',');

            // Find indices of required columns
			const priceIndex = headers.indexOf('Price');
            const brandIndex = headers.indexOf('Brand');
            const coprocessorIndex = headers.indexOf('Coprocessor');
			const memIndex = headers.indexOf('Video Memory');
            const clockIndex = headers.indexOf('Clock');
			const outputIndex = headers.indexOf('Video Output');
			const linkIndex = headers.indexOf('Link');
			
            const dataBrandIndex = headers.indexOf('data-brand');
			const dataMemoryIndex = headers.indexOf('data-mem');
            const dataPriceIndex = headers.indexOf('data-price');
            const dataClockIndex = headers.indexOf('data-clock');
			const dataProcessorIndex = headers.indexOf('data-processor');
			const dataRamIndex = headers.indexOf('data-ram');




            // Populate table rows
            const tableBody = document.getElementById('diskprices-body');
            for (let i = 1; i < rows.length; i++) {
                const values = rows[i].split(',');

                // Create a table row
                const row = document.createElement('tr');

                // Create table cells and populate data
                const brandCell = document.createElement('td');
                brandCell.textContent = values[brandIndex];
				brandCell.setAttribute('scope', 'row');
                row.appendChild(brandCell);

                const priceCell = document.createElement('td');
                priceCell.textContent = values[priceIndex];
                row.appendChild(priceCell);

                const memoryCell = document.createElement('td');
                memoryCell.textContent = values[memIndex];
                row.appendChild(memoryCell);
				
				const processorCell = document.createElement('td');
                processorCell.textContent = values[coprocessorIndex];
                row.appendChild(processorCell);
				
				const clockCell = document.createElement('td');
                clockCell.textContent = values[clockIndex];
                row.appendChild(clockCell);
				
				const outputCell = document.createElement('td');
                outputCell.textContent = values[outputIndex];
                row.appendChild(outputCell);
				
				// Create link cell
                const linkCell = document.createElement('td');
                linkCell.className = 'text-break';
                const linkAnchor = document.createElement('a');
                linkAnchor.href = values[linkIndex];
                linkAnchor.textContent = values[brandIndex] + ' ' + values[memIndex] + ' ' + values[clockIndex];
                linkCell.appendChild(linkAnchor);
				row.appendChild(linkCell);
				
				row.classList.add('gpu');
                // Set data attributes
                row.setAttribute('data-brand', values[dataBrandIndex]);
                row.setAttribute('data-price', values[dataPriceIndex]);
                row.setAttribute('data-mem', values[dataMemoryIndex]);
				row.setAttribute('data-clock', values[dataClockIndex]);
				row.setAttribute('data-processor', values[dataProcessorIndex]);
				row.setAttribute('data-ram', values[dataRamIndex]);

                // Append the row to the table body
                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error fetching CSV:', error));
});
