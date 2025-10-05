document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('generateForm');
    const promptInput = document.getElementById('prompt');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const generateBtn = document.getElementById('generateBtn');
    const outputSection = document.getElementById('outputSection');
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');

    // Handle image preview
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '';
        }
    });

    // Handle form submission (simulate generation)
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show output section and loading
        outputSection.style.display = 'block';
        loading.style.display = 'block';
        result.innerHTML = '';
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';

        // Simulate loading time (3 seconds)
        setTimeout(function() {
            loading.style.display = 'none';
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Video';

            // Create mock result
            const prompt = promptInput.value.trim() || 'No prompt provided';
            const hasImage = imageInput.files.length > 0;

            let resultHTML = `
                <p>Generated from: ${hasImage ? 'Image-to-Video' : 'Text-to-Video'}</p>
                <p>Prompt: "${prompt}"</p>
            `;

            // Mock output: Use a placeholder video (you can replace with a real sample video URL if needed)
            // For demo, we'll show a static image as "video frame" or embed a free sample video
            if (hasImage) {
                resultHTML += `
                    <video controls width="600">
                        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
                        Your browser does not support the video tag. Here's a placeholder image instead.
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vY2sgQWkgVmlkZW8gRnJhbWUgKEltYWdlLXRvLXZpZGVvKTwvdGV4dD48L3N2Zz4=" alt="Mock Video Frame">
                    </video>
                    <p>Mock video generated! (Static demo - no real AI processing.)</p>
                `;
            } else {
                resultHTML += `
                    <video controls width="600">
                        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
                        Your browser does not support the video tag. Here's a placeholder image instead.
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vY2sgQWkgVmlkZW8gRnJhbWUgKFRleHQtVG8tVmlkZW8pPC90ZXh0Pjwvc3ZnPg==" alt="Mock Video Frame">
                    </video>
                    <p>Mock video generated from your prompt! (Static demo - no real AI processing.)</p>
                `;
            }

            result.innerHTML = resultHTML;
        }, 3000);
    });
});