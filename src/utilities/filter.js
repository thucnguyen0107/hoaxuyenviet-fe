import { headerContent } from "../data/data";

const filterArrFn = (array, params) => {
  let arrFilter = array.slice();
  for (const filterKey in params) {
    if (filterKey === "price" && params[filterKey]) {
      if (params[filterKey] === "increase") {
        arrFilter.sort((a, b) => {
          return (
            (a.discount === 0
              ? a.price
              : a.price - (a.price * a.discount) / 100) -
            (b.discount === 0
              ? b.price
              : b.price - (b.price * b.discount) / 100)
          );
        });
      } else {
        arrFilter.sort((a, b) => {
          return (
            (b.discount === 0
              ? b.price
              : b.price - (b.price * b.discount) / 100) -
            (a.discount === 0
              ? a.price
              : a.price - (a.price * a.discount) / 100)
          );
        });
      }
    } else if (filterKey === "title") {
      arrFilter = arrFilter.filter(item => {
        return item[filterKey].includes(params[filterKey]);
      });
    } else if (params[filterKey]) {
      arrFilter = arrFilter.filter(item => {
        return item[filterKey].find(checkItem => {
          return checkItem === params[filterKey];
        });
      });
    }
  }
  return arrFilter;
};

const getFilterParams = params => {
  for (const i in params) {
    if (window.$(`#${i}`).val()) {
      params = { ...params, ...{ [i]: window.$(`#${i}`).val() } };
    }
  }
  return params;
};

const resetFilterFn = (params, nextLocation, currentLocaltion) => {
  if (nextLocation !== currentLocaltion) {
    for (const filterKey in headerContent.categories) {
      let item = headerContent.categories[filterKey];
      if (item.id !== "home") {
        window
          .$(`#${item.id} ~ .customSelect .custonSelectInner`)
          .text(item.name);
        window.$(`#${item.id}`).val("");
      }
    }

    window.$(`#price ~ .customSelect .customSelectInner`).text("Giá");
    window.$(`#price`).val("");

    params = {
      event: null,
      holiday: null,
      type: null,
      form: null,
      color: null,
      price: null
    };
  }
};

const filterUtils = {
  filterArrFn,
  getFilterParams,
  resetFilterFn
};
export default filterUtils;
