import { ProgressBar } from 'progressbar.js';
import RestaurantSource from '../../data/restaurant-source';
import { createCatalogTemplate } from '../templates/template-creator';

const CulinaryCatalog = {
  async render() {
    return `
      <div class="content">
        <h2>Culinary Catalog</h2>
        <section class="card">
          <div id="line-container"></div>
          <section id="resto-catalogs" class="catalogs"></section>
        </section>
      </div>
      `;
  },

  async progressBar() {
    const lineBar = new ProgressBar.Line('#line-container', {
      strokeWidth: 4,
      trailWidth: 0.5,
      from: { color: '#FF9900' },
      to: { color: '#00FF99' },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: 'black',
          position: 'absolute',
          top: '-30px',
          padding: 0,
          margin: 0,
          transform: null,
        },
      },
      step: (state, shape) => {
        shape.path.setAttribute('stroke', state.color);
        shape.setText(`${Math.round(shape.value() * 100)} %`);
      },
    });

    lineBar.animate(1, {
      duration: 4000,
    });
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#resto-catalogs');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createCatalogTemplate(restaurant);
    });
  },
};

export default CulinaryCatalog;
