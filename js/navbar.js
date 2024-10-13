document.addEventListener('DOMContentLoaded', () => {
  const dropdownWrappers = document.querySelectorAll('.css-jq32a0');

  dropdownWrappers.forEach(wrapper => {
    const link = wrapper.querySelector('.menu-hover-trigger-link');
    const details = wrapper.querySelector('.css-1qehhq');
    const summary = details.querySelector('summary');

    let timeoutId;

    wrapper.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId);
      details.setAttribute('open', '');
    });

    wrapper.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        if (!details.matches(':hover')) {
          details.removeAttribute('open');
        }
      }, 50); // Reduced from 100ms to 50ms for faster closing
    });

    details.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        details.removeAttribute('open');
      }, 50); // Reduced from 100ms to 50ms for faster closing
    });

    summary.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
