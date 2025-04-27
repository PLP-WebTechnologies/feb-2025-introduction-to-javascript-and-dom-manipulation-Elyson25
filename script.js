document.getElementById('changeContentButton').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Content Changed!</h2><p>The content has been changed using JavaScript.</p>';
});

document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added to the content section.';
    document.getElementById('content').appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
    const contentSection = document.getElementById('content');
    if (contentSection.lastChild) {
        contentSection.removeChild(contentSection.lastChild);
    }
});