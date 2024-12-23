const infoContainer = document.getElementById('infoContainer');
const infoBlock = document.getElementById('infoBlock');
const toggleButton = document.getElementById('toggleButton');
const toggleRightButton = document.getElementById('toggleRightButton');


toggleButton.addEventListener('click', () => {
		if (infoContainer.classList.contains('expanded')) {
				infoContainer.classList.remove('expanded');
				toggleButton.textContent = 'More';
		} else {
				infoContainer.classList.add('expanded');
				toggleButton.textContent = 'Hide';
		}
});

toggleRightButton.addEventListener('click' , () => {
	if (infoBlock.classList.contains('expanded')) {
		infoBlock.classList.remove('expanded')
		toggleRightButton.textContent = 'More';
} else {
		infoBlock.classList.add('expanded');
		toggleRightButton.textContent = 'Hide';
}
})