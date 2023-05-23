const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('.map__filter');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');

function runInactiveState () {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'disabled');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFieldset.setAttribute('disabled', 'disabled');
  mapFiltersSelects.forEach((select) => {
    select.setAttribute('disabled', 'disabled');
  });
}

runInactiveState();

function runActiveState () {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.removeAttribute('disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersFieldset.removeAttribute('disabled');
  mapFiltersSelects.forEach((select) => {
    select.removeAttribute('disabled');
  });
}

runActiveState();

// проставить всем нужным полям required
// чекнуть типы полей, исправить если что-то не так
