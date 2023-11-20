document.addEventListener('DOMContentLoaded', function () {
  const parkList = document.getElementById('park-list');

  // Sample national park data (you can replace this with a more extensive list)
  const nationalParks = [
      { name: 'Yellowstone National Park', location: 'Wyoming', type: 'National Park' },
      { name: 'Yosemite National Park', location: 'California', type: 'National Park' },
      { name: 'Grand Canyon National Park', location: 'Arizona', type: 'National Park' },
      // Add more national parks as needed
  ];

  // Function to create park list items
  function createParkListItem(park) {
      const listItem = document.createElement('div');
      listItem.classList.add('park-item');

      const nameElement = document.createElement('h2');
      nameElement.textContent = park.name;

      const locationElement = document.createElement('p');
      locationElement.textContent = `Location: ${park.location}`;

      const typeElement = document.createElement('p');
      typeElement.textContent = `Type: ${park.type}`;

      listItem.appendChild(nameElement);
      listItem.appendChild(locationElement);
      listItem.appendChild(typeElement);

      return listItem;
  }

  // Populate park list
  nationalParks.forEach(park => {
      const parkItem = createParkListItem(park);
      parkList.appendChild(parkItem);
  });
});
