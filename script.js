var items = [
    {
        "id": 1,
        "title": "Лого и постер Spotify",
        "about": "Можно использовать как лого, так и постер",
        "image": "assets/перви.jpg"
    },
    {
        "id": 2,
        "title": "Рука",
        "about": "Красивая рука в клеточку",
        "image": "assets/photo_2025-02-24_20-25-02 (2).jpg"
    },
    {
        "id": 3,
        "title": "Flowers Project",
        "about": "Постер для цветочного проекта",
        "image": "assets/photo_2025-02-24_20-26-48.jpg"
    },
    {
        "id": 4,
        "title": "Земной шар",
        "about": "Такого же стиля, как и рука",
        "image": "assets/photo_2025-02-24_20-25-04.jpg"
    },
    {
        "id": 5,
        "title": "Освежающий лимонад DIO",
        "about": "Мой вымышленный бренд напитка, который возможно когда-нибудь станет реальностью",
        "image": "assets/photo_2025-02-24_20-26-35.jpg"
    },
    {
        "id": 6,
        "title": "Тортик с кофе",
        "about": "Нежный черно-белый торт с красивой кружкой словно дополняют друг друга",
        "image": "assets/photo_2025-02-24_20-26-31 (3).jpg"
    },
    {
        "id": 7,
        "title": "Баннер для напитка DIO",
        "about": "Мой вымышленный бренд напитка, который возможно когда-нибудь станет реальностью",
        "image": "assets/photo_2025-02-24_20-26-36.jpg"
    },
    {
        "id": 8,
        "title": "Ретро Земля",
        "about": "Красивый постер земли, который также может подойти и для обоев на смартфон",
        "image": "assets/photo_2025-02-24_20-25-06.jpg"
    },
    {
        "id": 9,
        "title": "Логотип для приюта котят",
        "about": "Логотип был сделан для приюта котят",
        "image": "assets/photo_2025-02-24_20-27-25.jpg"
    },
    {
        "id": 10,
        "title": "House Yoshi",
        "about": "Логотип для компании, которая обустраивает дома",
        "image": "assets/photo_2025-02-24_20-27-34.jpg"
    },
    {
        "id": 11,
        "title": "Баннер для напитка DIO",
        "about": "Текстовый баннер для напитка DIO, который можно будет куда-нибудь установить",
        "image": "assets/photo_2025-02-24_20-26-37.jpg"
    },
    {
        "id": 12,
        "title": "Постер с суши",
        "about": "Смотрится стильно, красиво и вкусно",
        "image": "assets/photo_2025-02-24_20-27-04.jpg"
    },
    {
        "id": 13,
        "title": "Polyclinic Yoshi",
        "about": "Логотип для поликлиники",
        "image": "assets/photo_2025-02-24_20-26-46.jpg"
    },
    {
        "id": 14,
        "title": "Логотип Miral Studio",
        "about": "Логотип для телеграм канала Miral Studio (вариант 1)",
        "image": "assets/photo_2025-02-24_20-26-34.jpg"
    },
    {
        "id": 15,
        "title": "Логотип Miral Studio",
        "about": "Логотип для телеграм канала Miral Studio (вариант 2)",
        "image": "assets/photo_2025-02-24_20-26-33.jpg"
    },
    {
        "id": 16,
        "title": "Логотип Miral Studio",
        "about": "Логотип для телеграм канала Miral Studio (вариант 3)",
        "image": "assets/photo_2025-02-24_20-26-32.jpg"
    },
    {
        "id": 17,
        "title": "Логотип ИКЕА",
        "about": "Логотип для фирмы ИКЕА в необычном стиле",
        "image": "assets/photo_2025-02-24_20-25-11 (2).jpg"
    },
];

var searchInput = document.getElementById('input');
var container = document.getElementById("products-row");

function displayItems(itemList) {
    container.innerHTML = ''; // Очистка контейнера перед отображением

    const cards = itemList.map(item => {
        var card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = '<center><img src="' + item.image + '"></center><h5>' + item.title + '</h5><h5>' + item.about + '</h5>';
        return card;
    });

    // Вставляем карточки в контейнер
    cards.forEach(card => container.appendChild(card));

    // Сортируем карточки по высоте
    const sortedCards = Array.from(container.children);
    sortedCards.sort((a, b) => b.offsetHeight - a.offsetHeight);

    // Очищаем контейнер и добавляем отсортированные карточки
    container.innerHTML = '';
    sortedCards.forEach(card => container.appendChild(card));
}

// Первоначальное отображение всех элементов
displayItems(items);

searchInput.addEventListener('input', function (e) {
    var searchValue = e.target.value.toLowerCase();
    var filteredItems = items.filter(function (item) {
        return item.title.toLowerCase().includes(searchValue);
    });
    displayItems(filteredItems);
});

console.log(items);