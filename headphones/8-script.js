// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the hamburger menu elements
    const hamburgerOpen = document.getElementById('hamburger-open');
    const hamburgerClose = document.getElementById('hamburger-close');
    const navMenu = document.querySelector('nav ul');
    
    // Function to open the menu
    function openMenu() {
        // Show the navigation menu
        navMenu.style.display = 'flex';
        
        // Hide the hamburger icon
        hamburgerOpen.style.display = 'none';
        
        // Show the close icon
        hamburgerClose.style.display = 'block';
    }
    
    // Function to close the menu
    function closeMenu() {
        // Hide the navigation menu
        navMenu.style.display = 'none';
        
        // Show the hamburger icon
        hamburgerOpen.style.display = 'block';
        
        // Hide the close icon
        hamburgerClose.style.display = 'none';
    }
    
    // Add event listener for hamburger icon click
    hamburgerOpen.addEventListener('click', openMenu);
    
    // Add event listener for close icon click
    hamburgerClose.addEventListener('click', closeMenu);
    
});