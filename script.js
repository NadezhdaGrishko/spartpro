// Массив товаров
const products = [
  {
    image: "./assets/products/product2.png",
    title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
    size: "50 м",
    inStock: true,
  },
  {
    image: "./assets/products/product1.png",
    title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
    size: "50 м",
    inStock: true,
  },
  {
    image: "./assets/products/product3.png",
    title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
    size: "50 м",
    inStock: true,
  },
  {
    image: "./assets/products/product1.png",
    title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
    size: "50 м",
    inStock: false,
  },
  {
    image: "./assets/products/product3.png",
    title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
    size: "50 м",
    inStock: true,
  },
  {
    image: "./assets/products/product2.png",
    title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
    size: "50 м",
    inStock: true,
  },
];

// Функция рендеринга товаров
function renderProducts() {
  const catalogContainer = document.getElementById("catalog-container");

  if (!catalogContainer) return;

  const middleIndex = Math.ceil(products.length / 2);
  const firstColumn = products.slice(0, middleIndex);
  const secondColumn = products.slice(middleIndex);

  catalogContainer.innerHTML = `
    <div class="catalog-column">
      ${firstColumn.map((product) => createProductHTML(product)).join("")}
    </div>
    <div class="catalog-column">
      ${secondColumn.map((product) => createProductHTML(product)).join("")}
    </div>
  `;
}

function createProductHTML(product) {
  return `
        <div class="catalog-item">
            <div class="catalog-item__image">
                <img src="${product.image}" alt="${
    product.title
  }" loading="lazy" class="catalog-item__img">
            </div>
            <div class="catalog-item__content">
                <h3 class="catalog-item__title">${product.title}</h3>
                <div class="catalog-item__info">
                <div class="info-check">
                ${
                  product.inStock
                    ? `<img src='./assets/icon-check-green.png'></img>`
                    : `<img src='./assets/icon-check-yellow.png'</img>`
                }</div>
                <div class="info-text">
                    ${
                      product.inStock
                        ? `<p>В наличии ${product.size}</p>`
                        : `<p>Под заказ</p>`
                    }
                   </div>

                </div>

                <button class="catalog-item__button btn"
                        ${!product.inStock ? "disabled" : ""}>
                    Подробнее
                </button>
            </div>
        </div>`;
}



// Запускаем рендеринг при загрузке страницы
document.addEventListener("DOMContentLoaded", renderProducts);
