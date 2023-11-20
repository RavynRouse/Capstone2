// data for national parks
const nationalParks = [
    { name: 'Yosemite National Park', location: 'California', type: 'National Park' },
    { name: 'Zion National Park', location: 'Utah', type: 'National Park' },
    // Add more national parks as needed
  ];
  
  // Function to display parks based on user's search
  function searchParks() {
    const locationFilter = document.getElementById('location').value;
    const parkTypeFilter = document.getElementById('parkType').value;
  
    const filteredParks = nationalParks.filter(park => {
      const locationMatch = locationFilter === 'all' || park.location === locationFilter;
      const typeMatch = parkTypeFilter === 'all' || park.type === parkTypeFilter;
  
      return locationMatch && typeMatch;
    });
  
    displayParks(filteredParks);
  }
  
  // Function to display parks in the list
  function displayParks(parks) {
    const parkList = document.getElementById('parkList');
    parkList.innerHTML = '';
  
    parks.forEach(park => {
      const listItem = document.createElement('li');
      listItem.textContent = `${park.name} - ${park.location} (${park.type})`;
      parkList.appendChild(listItem);
    });
  }
  
  // Initial display of all parks
  displayParks(nationalParks);
  