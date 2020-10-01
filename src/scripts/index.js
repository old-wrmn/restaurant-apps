import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

/*

function getData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(xhttp.responseText);
        data.forEach(function(restaurant) {
            console.log(data)
            catalogsHTML += `
            <section>
                <figure>
                    <img src="${restaurant.restaurants[0].pictureId}" class="featured-image"
                    alt="Photo of culinary place"></a>
                    <figcaption>${restaurant.restaurants[0].name}</figcaption>
                </figure>
                <p>Di website <span><a href="https://usahaanaknagari.info" target="_blank">usahaanaknagari</a></span>,
                kamu bisa mencari usaha berdasarkan <span>kategori atau jenis usahanya</span>.
                Fitur ini memudahkan
                pengguna dalam menemukan usaha yang tepat dalam memenuhi kebutuhan pengguna.</p>
            </section>
            `;
        });
        document.getElementById("resto-catalogs").innerHTML = catalogsHTML;
      }
    };
    xhttp.open("GET", "./DATA.json", true);
    xhttp.send();
}
*/
