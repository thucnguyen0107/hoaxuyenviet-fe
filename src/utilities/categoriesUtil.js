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
