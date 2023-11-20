document.addEventListener('DOMContentLoaded', function () {
  const mountainList = document.getElementById('mountain-list');

  // Sample mountain data (you can replace this with a more extensive list)
  const mountains = [
      { name: 'Mount Everest', elevation: 29029, location: 'Himalayas' },
      { name: 'Denali', elevation: 20310, location: 'Alaska' },
      { name: 'Mount Rainier', elevation: 14410, location: 'Washington' },
      // Add more mountains as needed
  ];

  // Function to create mountain list items
  function createMountainListItem(mountain) {
      const listItem = document.createElement('div');
      listItem.classList.add('mountain-item');

      const nameElement = document.createElement('h2');
      nameElement.textContent = mountain.name;

      const elevationElement = document.createElement('p');
      elevationElement.textContent = `Elevation: ${mountain.elevation} feet`;

      const locationElement = document.createElement('p');
      locationElement.textContent = `Location: ${mountain.location}`;

      listItem.appendChild(nameElement);
      listItem.appendChild(elevationElement);
      listItem.appendChild(locationElement);

      return listItem;
  }

  // Populate mountain list
  mountains.forEach(mountain => {
      const mountainItem = createMountainListItem(mountain);
      mountainList.appendChild(mountainItem);
  });
});
