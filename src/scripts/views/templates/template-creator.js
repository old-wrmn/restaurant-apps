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
}) => `
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
        <p>${menus.foods.map((food) => food.name)}</p>
        <h4>Beverages</h4>
        <p>${menus.drinks.map((drink) => drink.name)}</p>
    </div>
    <div class="customer__reviews">
        <h4>Reviews</h4>
        <p>${consumerReviews[0].name}</p>
        <p>${consumerReviews[0].review}</p>
        <p>${consumerReviews[0].date}</p>
    </div>
  </div>
`;

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
