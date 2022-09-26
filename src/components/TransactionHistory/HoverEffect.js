// Check type of event and toggle classed
export function colorize(e) {
  const target = e.target;
  const curColumn = target.getAttribute('data-column');

  if (e.type === 'mouseover') {
    toggleClasses(curColumn, true);
  } else if (e.type === 'mouseout') {
    toggleClasses(curColumn, false);
  }
}

// Toggle classes
function toggleClasses(curColumn, bool) {
  const allRows = document.querySelectorAll(`.column${curColumn}`);

  if (bool) {
    allRows.forEach(row => {
      row.classList.add('hover-column');
    });
  } else {
    allRows.forEach(row => {
      row.classList.remove('hover-column');
    });
  }
}
