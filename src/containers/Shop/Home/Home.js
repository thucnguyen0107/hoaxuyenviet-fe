import React from "react";
// import emailInputImage from '../../../assets/images/themeimage/special-discount-block.jpg';
import { slideShowDelayTime } from "../../../services/config";
import BannersSlider from "../../../components/Shop/Slider/BannersSlider/BannersSlider";
import CategoriesSlider from "../../../components/Shop/Slider/CategoriesSlider/CategoriesSlider";
import TabCategories from "../../../components/Shop/TabCategories/TabCategories";
// import Blog_News from '../../../components/Slider/Blog_News/Blog_News';
import classes from "./Home.scss";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import { htmlContentModel } from "../../../models/htmlContentModel";
import { isNotEmpty } from "../../../utilities/fnUtil";

class Body extends React.Component {
  state = {
    htmlContentModel
  };

  createNewSlider = id => {
    const slideShow = {
      mode: "horizontal",
      slidesPerView: 1,
      pagination: false,
      paginationClickable: true,
      nextButton: `.swiper-button-next.${id}`,
      prevButton: `.swiper-button-prev.${id}`,
      spaceBetween: 0,
      autoplay: slideShowDelayTime,
      autoplayDisableOnInteraction: true,
      loop: true,
      preloadImages: true
    };

    return slideShow;
  };

  createSwiper = (...arg) => {
    for (const item of arg) {
      window.$(`#${item}`).swiper(this.createNewSlider(item));
    }
  };

  hoverBanner = (element, childElement = "") => {
    window.$(`${element} ${childElement}`).hover(
      function() {
        document.querySelector(element).swiper.stopAutoplay();
      },
      function() {
        document.querySelector(element).swiper.startAutoplay();
      }
    );
  };

  componentWillMount() {
    loadingScreen.showLoading();
    axios
      .get(endPoints.HTML_CONTENT)
      .then(res => {
        this.setState({ htmlContentModel: res }, loadingScreen.hideLoading);
      })
      .catch(err => {
        loadingScreen.hideLoading();
        console.error(err);
      });
  }

  componentDidUpdate() {
    this.createSwiper("slideshow0", "slideshow1");
    this.hoverBanner("#slideshow0");
    this.hoverBanner("#slideshow1", ".categorycmsblock-wrapper");
  }

  render() {
    return (
      <>
        <div
          id="common-home"
          className="container-fluid"
          style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
        >
          <div className="content-top">
            <div className={classes.GlobalBanner}>
              <strong>
                Không chỉ là HOA …<br /> Mà còn là những Khoảnh Khắc ý nghĩa!
              </strong>
            </div>
            <div id="content">
              {/**Slider */}
              {
                <BannersSlider
                  listBannerSlider={this.state.htmlContentModel.bannerSlide}
                />
              }
              {/**End Slider */}

              {/**Test Category Block SlideShow */}

              {isNotEmpty(this.state.htmlContentModel.eventSlide) ? (
                <CategoriesSlider
                  listCatBannerSlider={this.state.htmlContentModel.eventSlide}
                />
              ) : null}
              {/**END Test Category Block SlideShow */}

              {/*--------------TAB CATEGORY --------------- */}
              <div id="Tab_Category_Slider" className="category_tab box">
                {isNotEmpty(this.state.htmlContentModel.otherSlide) ? (
                  <TabCategories
                    listTabCategory={this.state.htmlContentModel.otherSlide}
                  />
                ) : null}
                {/**------------- END--TAB CATEGORY--------------------- */}

                <span
                  className="blog_default_width"
                  style={{ display: "none", visibility: "hidden" }}
                />
                <span
                  className="module_default_width"
                  style={{ display: "none", visibility: "hidden" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
