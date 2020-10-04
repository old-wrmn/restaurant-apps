import CONFIG from '../../globals/config';

const createCatalogTemplate = ({
  id, name, pictureId, rating, city, description,
}) => `
    <div class="catalog">
        <div class="container">
            <div class="city">${city}</div>
            <figure>
                <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" class="featured-image" alt="${name}" crossorigin="anonymous">
                <figcaption>
                    Rating: ${rating} <br>
                    <a href="${`/#/detail/${id}`}">${name}</a></figcaption>
            </figure>
        </div>
        <p> ${description} </p>
    </div>
  `;

const createRestaurantDetailTemplate = ({
  name, pictureId, rating, city, address, categories, menus, consumerReviews,
}) => {
    let listFood = ``;
    let listDrink = ``;
    let listReview = ``;

    for (let food of menus.foods){
        listFood +=`<li>${food.name}</li>`
    };

    for (let drink of menus.drinks){
        listDrink+=`<li>${drink.name}</li>`
    };

    for (let consumerReview of consumerReviews){
        listReview+=`
        <div>
            <p>${consumerReview.name}</p>
            <p>${consumerReview.review}</p>
            <p>${consumerReview.date}</p>
        </div>
         `
    }

    return (`
    <div class="catalog info">
        <div class="container">
            <div class="city">${city}</div>
            <figure>
                <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" class="featured-image" alt="${name}" crossorigin="anonymous">
                <figcaption>
                    Rating: ${rating} <br>
                    ${name}</figcaption>
            </figure>
            <h3>Information</h3>
            <h4>Address</h4>
            <p>${address}</p>
            <h4>Menu Categories</h4>
            <p>${categories.map((category) => category.name).join(', ')}</p>
        </div>
    </div>
    <div class="menus">
        <h4>Foods</h4>
         <ul>${listFood}</ul>
        <h4>Beverages</h4>
        <ul>${listDrink}</ul>
    </div>
    <div class="customer__reviews">
        <h4>Reviews</h4>
        ${listReview}
    </div>
  </div>
`);}

const createFavoriteButtonTemplate = () => `
  <button aria-label="save restaurant as favorite" id="favButton" class="favorite">
     <i class="far fa-star" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove restaurant from favorite" id="favButton" class="favorite">
    <i class="fas fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createCatalogTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
