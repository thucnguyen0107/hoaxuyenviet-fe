import React from "react";
import { slideShowDelayTime } from "../../../services/config";
import CategorySlider from "../../../components/Shop/Slider/CategoriesSlider/CategorySlider/CategorySlider";
import TabCategories from "../../../components/Shop/TabCategories/TabCategories";
import classes from "./Home.scss";
import { connect } from "react-redux";
import { isNotEmpty } from "../../../utilities/fnUtil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Iimg from "../../../components/UI/LoadingImage/Limg";
import "./Home.css";
import loadingScreen from "../../../utilities/loadingScreen";

// function CustomNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style }}
//       onClick={onClick}
//       title="Next"
//     />
//   );
// }

// function CustomPrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style }}
//       onClick={onClick}
//       title="Prev"
//     />
//   );
// }

class Body extends React.Component {
  componentWillMount() {
    loadingScreen.showLoading();
  }
  componentDidMount() {
    loadingScreen.hideLoading();
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
      draggable: false,
      arrows: false,
      customPaging: i => <div className="slick-next" />
    };

    const settings_tab = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: slideShowDelayTime,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false,
      arrows: false,
      customPaging: i => <div className="slick-next" />
    };

    let catSliderList = [];

    for (const i in this.props.htmlContentModel.eventSlide) {
      catSliderList.push(
        <div key={i}>
          <CategorySlider
            sliderItem={this.props.htmlContentModel.eventSlide[i]}
          />
        </div>
      );
    }

    return (
      <>
        <div
          id="common-home"
          className="container-fluid"
          style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
        >
          <div className="content-top banner">
            <div className={classes.GlobalBanner}>
              <strong>
                Không chỉ là HOA …<br /> Mà còn là những Khoảnh Khắc ý nghĩa
              </strong>
            </div>
            <div id="content">
              {/**Slider */}
              {this.props.htmlContentModel.bannerSlide ? (
                <Slider {...settings}>
                  {this.props.htmlContentModel.bannerSlide.map(
                    (banner, index) => {
                      return (
                        <div key={index}>
                          <Link to={banner.eventLink}>
                            <Iimg
                              src={banner.image}
                              alt={`Main-banner-${index + 1}`}
                              className="img-responsive background_img"
                            />
                          </Link>
                        </div>
                      );
                    }
                  )}
                </Slider>
              ) : null}

              {/**End Slider */}

              {/** Category Block SlideShow */}

              {isNotEmpty(this.props.htmlContentModel.eventSlide) ? (
                <Slider {...settings_tab}>{catSliderList}</Slider>
              ) : null}
              {/**  Category Block SlideShow */}

              {/*--------------TAB CATEGORY --------------- */}
              <div id="Tab_Category_Slider" className="category_tab box">
                {isNotEmpty(this.props.htmlContentModel.otherSlide) ? (
                  <TabCategories
                    listTabCategory={this.props.htmlContentModel.otherSlide}
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

const mapStateToProps = state => {
  return {
    htmlContentModel: state.htmlContent.htmlContent
  };
};

export default connect(mapStateToProps)(Body);
