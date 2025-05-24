// DOM Elements
const memberContainer = document.getElementById('member-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const copyrightYear = document.getElementById('copyright-year');
const lastModified = document.getElementById('last-modified');

// Display current year and last modified date
copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Fetch member data and display
async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Display members in grid view (default)
function displayMembers(members) {
    memberContainer.innerHTML = '';
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${getMembershipLevel(member.membership)}</p>
        `;
        
        memberContainer.appendChild(memberCard);
    });
}

// Display members in list view
function displayMembersAsList(members) {
    memberContainer.innerHTML = '';
    memberContainer.classList.add('list-view');
    
    const memberList = document.createElement('ul');
    
    members.forEach(member => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${getMembershipLevel(member.membership)}</p>
        `;
        memberList.appendChild(listItem);
    });
    
    memberContainer.appendChild(memberList);
}

// Helper function to get membership level name
function getMembershipLevel(level) {
    switch(level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Member";
    }
}

// Event listeners for view toggle
gridViewBtn.addEventListener('click', () => {
    memberContainer.classList.remove('list-view');
    getMembers();
});

listViewBtn.addEventListener('click', () => {
    getMembers().then(data => displayMembersAsList(data));
});

// Initialize
getMembers();