import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavButtonInitiator from '../../utils/fav-btn-initiator';

const Detail = {
  async render() {
    return `
      <div class="content">
        <h2>Detail Page</h2>
        <article id="resto-catalogs" class="card catalogs"></article>
        <div id="favoriteButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#resto-catalogs');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavButtonInitiator.init({
      favButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
