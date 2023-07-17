// TODO: Add Disclaimer for scraping the user's page.
export {}

function suggestImageDownload() {
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        const imageUrl = img.src;

        // Create a download button next to the image
        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download Image';
        downloadButton.addEventListener('click', () => {
            // Trigger the download when the button is clicked
            triggerDownload(imageUrl, 'image.png');
        });

        // Append the button to the DOM
        img.parentNode && img.parentNode.insertBefore(downloadButton, img.nextSibling);
    });
}

function suggestVideoDownload() {
    const videos = document.querySelectorAll('video');

    videos.forEach((vid) => {
        const videoUrl = vid.src;

        // Create a download button next to the video
        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download Video';
        downloadButton.addEventListener('click', () => {
            // Trigger the download when the button is clicked
            triggerDownload(videoUrl, 'video.mp4');
        });

        // Append the button to the DOM
        vid.parentNode && vid.parentNode.insertBefore(downloadButton, vid.nextSibling);
    });
}

function triggerDownload(url:string , filename: string) {
    chrome.downloads.download({
        url: url,
        filename: filename,
    });
}

/* chrome.runtime.onMessage.addListener((message: any) => {
    if (message.action === 'download') {
        triggerDownload(message.url, message.filename);
    }
}); */

// Call the functions to initiate download suggestions
suggestImageDownload();
suggestVideoDownload();
