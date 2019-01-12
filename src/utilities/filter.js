const filterArrFn = (array, params) => {
  let arrFilter = array.slice();
  for (const filterKey in params) {
    console.log(filterKey);
    if (filterKey === 'price' && params[filterKey]) {
      console.log('da tim thay price')
      if (params[filterKey] === 'increase') {
        arrFilter.sort((a, b) => {
          return (a.discount === 0 ? a.price : (a.price - a.price * a.discount / 100)) - (b.discount === 0 ? b.price : (b.price - b.price * b.discount / 100))
        })
      } else {
        arrFilter.sort((a, b) => {
          return (b.discount === 0 ? b.price : (b.price - b.price * b.discount / 100)) - (a.discount === 0 ? a.price : (a.price - a.price * a.discount / 100))
        })
      }
    }
    else if (params[filterKey]) {
      arrFilter = arrFilter.filter((item) => {
        return item[filterKey].find((checkItem) => {
          return checkItem === params[filterKey]
        })
      })
    }
  }
  return arrFilter;
}

const getFilterParams = (params) => {
  for (const i in params) {
    if (window.$(`#${i}`).val()) {
      params = { ...params, ...{ [i]: window.$(`#${i}`).val() } }
    }
  }
  return params;
}

const filterUtils = {
  filterArrFn,
  getFilterParams
}
export default filterUtils;