import React from 'react';
import DropdownSelect from './DropdownSelect';
import filterUtils from '../../utilities/filter';



const dropdownContainer = {
  marginBottom: '30px',
}

const changeFilter = (params, fn) => {
  fn(filterUtils.getFilterParams(params));
}

const filterBar = (props) => {

  let arrayFilter = props.catFilter.slice();
  let priceFilter = {
    id: 'price', name: 'Giá', type: 'dropdown', subCategories:
      [
        { id: 'increase', subName: 'Tăng dần' },
        { id: 'decrease', subName: 'Giảm dần' },

      ]
  };
  arrayFilter.push(priceFilter);
  let dropdownBtnHTML = [];

  dropdownBtnHTML = (
    <>
      {
        arrayFilter.map((filter, index) => {
          return (
            <DropdownSelect key={index} change={() => changeFilter(props.filterParams, props.filter)} idSelect={filter.id} nameSelect={filter.name} subCatFilter={filter.subCategories}>
              {filter.name}
            </DropdownSelect>
          )
        })
      }
    </>
  );



  return (
    <>
      <div style={dropdownContainer} id="filterGroup">
        {dropdownBtnHTML}
      </div>

      <button style={{ display: 'none' }} type="button" id="grid-view" className="btn btn-default grid active"><i className="fa fa-th"></i></button>


    </>
  );
}

export default filterBar;