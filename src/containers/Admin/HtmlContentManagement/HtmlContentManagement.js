import React from "react";
import Actions from "../../../redux/rootActions";
import { connect } from "react-redux";
import { htmlContentFormModel } from "../../../models/formModel";
import {
  cloneData,
  isNotEmpty,
  initGalleryZoom
} from "../../../utilities/fnUtil";
import Form from "../../../components/UI/Form/Form";
class HtmlContentManagement extends React.Component {
  state = {
    createModal: {
      show: false,
      showModal: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: true } }
        }),
      handleOk: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: false } }
        }),
      handleCancel: () =>
        this.setState({
          createModal: { ...this.state.createModal, ...{ show: false } }
        })
    },
    htmlContentForm: cloneData(htmlContentFormModel)
  };

  constructor(props) {
    super(props);
    props.getHtmlContent();
  }

  componentWillReceiveProps(nextProps) {
    if (isNotEmpty(nextProps.htmlContentStore.htmlContent)) {
      this.convertDataToFormData(nextProps.htmlContentStore.htmlContent);
    }
  }

  componentDidUpdate = () => {
    if (isNotEmpty(this.props.htmlContentStore.htmlContent)) {
      for (let i = 0; i < 6; i++) {
        initGalleryZoom(".gallery_create_product" + i);
      }
    }
  };

  convertDataToFormData = data => {
    let formData = cloneData(htmlContentFormModel);
    for (const key in data) {
      switch (key) {
        case "bannerSlide":
          for (const i in data[key]) {
            formData.bannerSlide.value.push(data[key][i].image);
            formData.eventLinkBannerSlide.value.push(data[key][i].eventLink);
          }
          break;

        case "eventSlide":
          for (const i in data[key].firstSlide) {
            formData.firstEventSlide.value.push(data[key].firstSlide[i].image);
            formData.eventLinkFirstEventSlide.value.push(
              data[key].firstSlide[i].eventLink
            );
          }

          for (const i in data[key].secondSlide) {
            formData.secondEventSlide.value.push(
              data[key].secondSlide[i].image
            );
            formData.eventLinkSecondEventSlide.value.push(
              data[key].secondSlide[i].eventLink
            );
          }
          break;

        case "otherSlide":
          formData.nameFirstOtherSlide.value = data[key].firstSlide.name;
          for (const i in data[key].firstSlide.categoryDisplay) {
            formData.categoryDisplayFirstOtherSlide.value.push(
              data[key].firstSlide.categoryDisplay[i].image
            );
            formData.eventCategoryDisplayFirstOtherSlide.value.push(
              data[key].firstSlide.categoryDisplay[i].eventLink
            );
          }

          formData.nameSecondOtherSlide.value = data[key].secondSlide.name;
          for (const i in data[key].secondSlide.categoryDisplay) {
            formData.categoryDisplaySecondOtherSlide.value.push(
              data[key].secondSlide.categoryDisplay[i].image
            );
            formData.eventCategoryDisplaySecondOtherSlide.value.push(
              data[key].secondSlide.categoryDisplay[i].eventLink
            );
          }
          break;

        case "social":
          for (const i in data[key]) {
            formData.socialLink.value.push(data[key][i].link);
            formData.visibleLink.value.push(data[key][i].visible);
          }
          break;

        default:
          break;
      }
    }
    this.setState({ htmlContentForm: formData });
  };

  convertFormDataToData = formData => {
    let data = {
      _id: "htmlContent",
      bannerSlide: [],
      eventSlide: {
        firstSlide: [],
        secondSlide: []
      },
      otherSlide: {
        firstSlide: {
          id: "tab-1",
          name: null,
          active: "active",
          categoryDisplay: []
        },
        secondSlide: {
          id: "tab-2",
          name: null,
          active: "",
          categoryDisplay: []
        }
      },
      social: [
        {
          id: "facebook",
          visible: true,
          link: "https://facebook.com",
          iconName: "fa fa-facebook"
        },
        {
          id: "twitter",
          visible: true,
          link: "https://twitter.com",
          iconName: "fa fa-twitter"
        },
        {
          id: "googleplus",
          visible: true,
          link: "https://plus.google.com",
          iconName: "fa fa-google-plus"
        },
        {
          id: "youtube-play",
          visible: true,
          link: "https://youtube.com",
          iconName: "fa fa-youtube-play"
        },
        {
          id: "instagram",
          visible: true,
          link: "https://instagram.com",
          iconName: "fa fa-instagram"
        },
        {
          id: "zalo",
          visible: true,
          link: "https://zalo.me",
          iconName: "fa fa-zalo"
        }
      ]
    };

    for (const key in data) {
      let imgLength, elLength;
      switch (key) {
        case "bannerSlide":
          imgLength = formData.bannerSlide.value.length;
          elLength = formData.eventLinkBannerSlide.value.length;
          for (
            let i = 0;
            i < (imgLength <= elLength ? imgLength : elLength);
            i++
          ) {
            data[key].push({
              image: formData.bannerSlide.value[i],
              eventLink: formData.eventLinkBannerSlide.value[i]
            });
          }
          break;

        case "eventSlide":
          imgLength = formData.firstEventSlide.value.length;
          elLength = formData.eventLinkFirstEventSlide.value.length;
          for (
            let i = 0;
            i < (imgLength <= elLength ? imgLength : elLength);
            i++
          ) {
            data[key].firstSlide.push({
              image: formData.firstEventSlide.value[i],
              eventLink: formData.eventLinkFirstEventSlide.value[i]
            });
          }
          
          imgLength = formData.secondEventSlide.value.length;
          elLength = formData.eventLinkSecondEventSlide.value.length;
          for (
            let i = 0;
            i < (imgLength <= elLength ? imgLength : elLength);
            i++
          ) {
            data[key].secondSlide.push({
              image: formData.secondEventSlide.value[i],
              eventLink: formData.eventLinkSecondEventSlide.value[i]
            });
          }
          break;

        case "otherSlide":
          imgLength = formData.categoryDisplayFirstOtherSlide.value.length;
          elLength = formData.eventCategoryDisplayFirstOtherSlide.value.length;
          data[key].firstSlide.name = formData.nameFirstOtherSlide.value;
          for (
            let i = 0;
            i < (imgLength <= elLength ? imgLength : elLength);
            i++
          ) {
            data[key].firstSlide.categoryDisplay.push({
              image: formData.categoryDisplayFirstOtherSlide.value[i],
              eventLink: formData.eventCategoryDisplayFirstOtherSlide.value[i]
            });
          }

          imgLength = formData.categoryDisplaySecondOtherSlide.value.length;
          elLength = formData.eventCategoryDisplaySecondOtherSlide.value.length;
          data[key].secondSlide.name = formData.nameSecondOtherSlide.value;
          for (
            let i = 0;
            i < (imgLength <= elLength ? imgLength : elLength);
            i++
          ) {
            data[key].secondSlide.categoryDisplay.push({
              image: formData.categoryDisplaySecondOtherSlide.value[i],
              eventLink: formData.eventCategoryDisplaySecondOtherSlide.value[i]
            });
          }
          break;

        case "social":
          for (let i = 0; i < 5; i++) {
            if (formData.socialLink.value[i]) {
              data[key][i].link = formData.socialLink.value[i];
              data[key][i].visible = formData.visibleLink.value[i];
            }
          }
          break;
        default:
          break;
      }
    }
    return data;
  };

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        const data = this.convertFormDataToData(this.state.htmlContentForm);
        console.log(data);
        this.props.updateHtmlContent(data);
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <Form
            idForm="htmlContent"
            nameForm="htmlContentForm"
            originalForm={this.state.htmlContentForm}
            setState={this.setStateForm}
            btnName="Lưu"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    htmlContentStore: state.htmlContent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHtmlContent: () =>
      dispatch(Actions.htmlContentActions.getHtmlContentFromSV()),
    updateHtmlContent: data =>
      dispatch(Actions.htmlContentActions.updateHtmlContentToSV(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HtmlContentManagement);
