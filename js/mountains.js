// data for mountains
const mountainsData = [
    { name: 'Mount Rainier', elevation: '14,411 feet', location: 'Washington' },
    { name: 'Grand Teton', elevation: '13,775 feet', location: 'Wyoming' },
    // Add more mountains as needed
  ];
  
  // Function to display mountains in the list
  function displayMountains(mountains) {
    const mountainList = document.getElementById('mountainList');
    mountainList.innerHTML = '';
  
    mountains.forEach(mountain => {
      const listItem = document.createElement('li');
      listItem.textContent = `${mountain.name} - Elevation: ${mountain.elevation}, Location: ${mountain.location}`;
      mountainList.appendChild(listItem);
    });
  }
  
  // Initial display of all mountains
  displayMountains(mountainsData);
  