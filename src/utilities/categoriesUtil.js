import { headerContent } from '../data/data';

export const convertCategories = (catParent, cat, fn) => {
  let arrayCategories = headerContent.categories.slice();
  let catParentItem = arrayCategories.find((item) => {
    return catParent === item.id
  })
  if (catParentItem) {
    if (!cat) {
      return {
        catParentName: catParentItem.name
      };
    }
    else {
      let catItem = catParentItem.subCategories.find((item) => {
        return cat === item.id;
      })
      if (catItem) {
        return {
          catParentName: catParentItem.name,
          catName: catItem.subName
        }
      }
      else {
        fn('/pageNotFound');
        return false;
      }

    }
  } else {
    fn('/pageNotFound');
    return false;
  }

}

export const convertFilters = (catParent) => {
  let arrayCategories = headerContent.categories.slice(1, 6);
  let arrFilters = arrayCategories.filter((item) => catParent !== item.id);
  return arrFilters;
}

// export const convertArr = () => {
//   let array = ["rose", "chrysanthemum", "peony"];
//   let catParent = "type"
//   // Clone categories array
//   let arrayCategories = headerContent.categories.slice();
//  // Find catParentItem
//  let catParentItem = arrayCategories.find((item) => {
//   return catParent === item.id
//   })
//   let arrayFilters = catParentItem.subCategories.filter((item) => array.includes(item.id) );

//   return arrayFilters;

// }

export const convertItemToName = (arr, cat) => {
  let arrayCategories = headerContent.categories.find(item => cat === item.id);
  let arrCatName = [];
  arrCatName = arr.map(catId => {
    let item = arrayCategories.subCategories.find(item => item.id === catId);
    return item.subName;
  })
  return arrCatName;


}