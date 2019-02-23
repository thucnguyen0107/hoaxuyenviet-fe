import React from "react";
import { slideShowDelayTime } from "../../../services/config";
import CategorySlider from "../../../components/Shop/Slider/CategoriesSlider/CategorySlider/CategorySlider";
import TabCategories from "../../../components/Shop/TabCategories/TabCategories";
import classes from "./Home.scss";
import axios from "axios";
import { endPoints } from "../../../services/config";
import loadingScreen from "../../../utilities/loadingScreen";
import { htmlContentModel } from "../../../models/htmlContentModel";
import { isNotEmpty } from "../../../utilities/fnUtil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Iimg from "../../../components/UI/LoadingImage/Limg";
import  './Home.css';
class Body extends React.Component {
  state = {
    htmlContentModel
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

  
  render() {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: slideShowDelayTime,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      
    };

    const settings_tab = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: slideShowDelayTime,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:true
    };

    let catSliderList = [];

    for (const i in this.state.htmlContentModel.eventSlide) {
      catSliderList.push(
        (
          <div key={i}>
            <CategorySlider sliderItem={this.state.htmlContentModel.eventSlide[i]} />
            </div>
        )
      )
    }

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
              {this.state.htmlContentModel.bannerSlide.length ? <Slider {...settings}>
              
                {
                  this.state.htmlContentModel.bannerSlide.map((banner, index) => {
                    return(
                      <div key={index}>
                        <Link to={banner.eventLink}><Iimg src={banner.image} alt={`Main-banner-${index + 1}`} className="img-responsive background_img" /></Link>
                     </div>
                    );

                    
                  })

                }
              </Slider>: null}
              
              {/**End Slider */}

              {/**Test Category Block SlideShow */}

              {isNotEmpty(this.state.htmlContentModel.eventSlide) ? (
                <Slider {...settings_tab}>
                    {catSliderList}
               </Slider>

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
