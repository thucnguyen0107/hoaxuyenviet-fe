import React from "react";
import FooterLogo from "../../../assets/images/catalog/footer-logo.png";
import axios from "axios";
import { endPoints } from "../../../services/config";
class Footer extends React.Component {
  state = {
    HTMLSocialModel: []
  };

  componentWillMount() {
    axios
      .get(endPoints.HTML_CONTENT)
      .then(res => {
        this.setState({ HTMLSocialModel: res.social });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let listSocial;
    listSocial = (
      <>
        {this.state.HTMLSocialModel.map(social => {
          if (social.visible) {
            return (
              <li key={social._id} className={social._id}>
                <a href={social.link} rel="noopener noreferrer" target="_blank">
                  <i className={social.iconName} />
                </a>
              </li>
            );
          }
        })}
      </>
    );

    return (
      <footer>
        <div id="footer">
          <div className="content_footer_top">
            <div id="footer-about-us-block" className="footer-about-us-block">
              <div className="container">
                <div className="row">
                  <div className="footer-about-us-block-wrapper">
                    <div className="footer-logo footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <a href="index9328.html?route=common/home">
                        <img alt="" src={FooterLogo} />
                      </a>
                    </div>
                    <div className="footer-contact footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <div className="footer-contact-wrapper">
                        <h5 className="footer-about-us-block-item-title">
                          Liên hệ
                        </h5>
                        <div className="footer-contact-discription">
                          (91)-261 3023333 , +84 8866888222
                        </div>
                      </div>
                    </div>
                    <div className="footer-address footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <div className="footer-contact-wrapper">
                        <h5 className="footer-about-us-block-item-title">
                          Địa chỉ
                        </h5>
                        <div className="footer-contact-discription">
                          307/12 Nguyễn Văn Trỗi, Tân Bình, HCM{" "}
                        </div>
                      </div>
                    </div>
                    <div className="footer-share footer-about-us-block-item col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                      <h5 className="footer-about-us-block-item-title">
                        Share
                      </h5>
                      <ul className="social-media-list discription">
                        {listSocial}
                      </ul>
                      <a
                        className="footer-about-us-link"
                        href="mailto:sales@yourcompany.com"
                      >
                        sales@yourcompany.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
