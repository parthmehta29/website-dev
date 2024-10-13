document.addEventListener('DOMContentLoaded', function() {
    // Help dropdown functionality
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpDropdownContent = document.querySelector('.help-dropdown-content');

    helpDropdown.addEventListener('click', function(e) {
        e.preventDefault();
        helpDropdownContent.style.display = helpDropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!helpDropdown.contains(e.target)) {
            helpDropdownContent.style.display = 'none';
        }
    });

    // Sign In button functionality (example)
    const signInButton = document.querySelector('.sign-in-button');
    signInButton.addEventListener('click', function() {
        alert('Sign In functionality to be implemented');
    });
});
