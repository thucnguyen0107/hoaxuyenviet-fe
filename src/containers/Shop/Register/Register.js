import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { Link } from 'react-router-dom';


class Register extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Họ và tên'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Họ và tên phải nhiều hơn 3 ký tự và ít hơn 32 ký tự"
        },
        valid: true
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Mật khẩu'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Mật khẩu phải nhiều hơn 3 ký tự và ít hơn 32 ký tự"
        },
        valid: true,
      },
      passwordConfirm: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Xác nhận mật khẩu'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Xác nhận mật khẩu không chính xác"
        },
        valid: true,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-Mail'
        },
        value: '',
        validation: {
          required: true,
          minLength: 1,
          maxLength: 32,
          errorMessage: "Email không hợp lệ"
        },
        valid: true,
      },
      telephone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Số điện thoại'
        },
        value: '',
        validation: {
          required: true,
          minLength: 9,
          maxLength: 32,
          numberValid: /^\+?[0-9]+$/,
          errorMessage: "Số điện thoại không hợp lệ"
        },
        valid: true,
      },
    },
    formIsValid: false
  }



  componentDidMount() {
    loadingScreen.hideLoading();
  }

  setStateForm = (object, submit = false) => {
    this.setState(object, () => {
      if (this.state.formIsValid && submit) {
        console.log("Valid Form Successfully");
      }
    });
  };
  
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <>
        <div id="breadcrumb">
          <div className="container">
            <div className="row">
              <ul className="breadcrumb">
                <h2 className="page-title">ĐĂNG KÝ</h2>
                <li><a href="/"><i className="fa fa-home"></i></a></li>
                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Đăng Ký</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="content" style={{ margin: 'auto', width: '50%' }}>
          <p>Nếu bạn đã có tài khoản. Vui lòng đăng nhập <Link to="/login" >tại đây</Link>.</p>
          <form className="form-horizontal">
            <fieldset id="account">
              <legend>Thông tin cá nhân</legend>
              <Form
              idForm="registerForm"
              nameForm="rgisterForm"
              originalForm={this.state.orderForm}
              setState={this.setStateForm}
              noEdit={this.state.noEdit}
              btnName="Lưu Lại"
            />
            { this.state.noEdit ? 
          <div className="text-center">
            <button className="btn" style={{ marginBottom: "20px" }} onClick={() => this.setState({noEdit: false})}> Đăng ký</button>
          </div> : null}
            {/* {form} */}
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}
export default Register;