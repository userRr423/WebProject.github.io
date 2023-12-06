// обработчики событий клика на кнопку меню и боковое выпадающее меню
document.querySelector('.dropdown-button').addEventListener('mouseover', function () {
    var dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

document.querySelector('.sidebar-dropdown').addEventListener('click', function () {
    var sidebarDropdownContent = document.querySelector('.sidebar-dropdown-content');
    if (sidebarDropdownContent.style.display === 'block') {
        sidebarDropdownContent.style.display = 'none';
    } else {
        sidebarDropdownContent.style.display = 'block';
    }
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseover', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
});

dropdown.addEventListener('mouseout', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
});


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 55.753215, lng: 37.622504 }, // Установите координаты центра карты
        zoom: 10 // Установите начальный зум карты
    });
    // Добавьте дополнительный код для настройки и размещения маркеров или других элементов на карте
}