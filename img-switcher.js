(() => {
  'use strict';

  const ADIDAS_URL = 'https://www.adidas.com';
  const NIKE_URL = 'https://www.nike.com';

  const LEFT = 'left';
  const CENTER = 'center';
  const RIGHT = 'right';

  let adidas = document.querySelector('#adidas');
  let nike = document.querySelector('#nike');

  document.addEventListener('keydown', event => {
    if (event.keyCode === 39 /* right */) {
      if (nike.className === 'center') {
        return;
      }
      adidas.className = 'left';
      nike.className = 'center';
      updateCurrentAdvertisement(NIKE_URL);
      return;
    }
    if (event.keyCode === 37 /* left */) {
      if (adidas.className === 'center') {
        return;
      }
      nike.className = 'right';
      adidas.className = 'center';
      updateCurrentAdvertisement(ADIDAS_URL);
      return;
    }
  });

  let current_adv;
  let updateCurrentAdvertisement = (newURL) => {
    let new_adv = {
      type: 'url',
      url: newURL,
      advertisedTxPower: -100
    };
    if (eddystone.advertisements.length === 0) {
      eddystone.registerAdvertisement(new_adv)
        .then(adv => current_adv = adv);
      return;
    }
    current_adv.unregisterAdvertisment()
      .then(() => eddystone.registerAdvertisement(new_adv))
      .then(adv => current_adv = adv);
  };

  updateCurrentAdvertisement(ADIDAS_URL);
})();
