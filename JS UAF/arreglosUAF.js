document.addEventListener('DOMContentLoaded', function () { //Cambiar a modo oscuro
  let toggle = document.getElementById('toggle');
  let labelToggle = document.getElementById('labelToggle');

  toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    if (checked == true) {
      labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});