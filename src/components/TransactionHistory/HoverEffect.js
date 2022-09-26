export function cellIn(e) {
  const target = e.target;
  const curColumn = target.getAttribute('data-column');
  toggleClasses(curColumn, true);
}

export function cellOut(e) {
  const target = e.target;
  const curColumn = target.getAttribute('data-column');
  toggleClasses(curColumn, false);
}

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
