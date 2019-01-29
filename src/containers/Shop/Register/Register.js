import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { Link } from 'react-router-dom';


class Register extends React.Component {
  state = {
    registerForm1: {
      id: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Vui lòng nhập số điện thoại của bạn',
          name: 'Tài khoản đăng nhập'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 11,
          letterValid: /^\+?[0-9]+$/,
          errorMessage: "Số điện thoại không hợp lệ"
        },
        valid: true
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Vui lòng nhập mật khẩu của bạn',
          name: 'Mật khẩu'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Mật khẩu phải nhiều hơn 5 ký tự và ít hơn 32 ký tự"
        },
        valid: true,
      },
      // passwordConfirm: {
      //   elementType: 'input',
      //   elementConfig: {
      //     type: 'password',
      //     placeholder: 'Xác nhận mật khẩu'
      //   },
      //   value: '',
      //   validation: {
      //     required: true,
      //     minLength: 5,
      //     maxLength: 32,
      //     letterValid: /^[a-zA-Z]+$/,
      //     errorMessage: "Xác nhận mật khẩu không chính xác"
      //   },
      //   valid: true,
      // },
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Vui lòng nhập họ và tên của bạn',
          name: 'Họ và tên'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 50,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Họ và tên phải có nhiều hơn 10 ký tự và ít hơn 50 ký tự"
        },
        valid: true,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Vui lòng nhập địa chỉ E-Mail của bạn',
          name: 'E-Mail'
        },
        value: '',
        validation: {
          required: true,
          minLength: 15,
          maxLength: 32,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Email không hợp lệ"
        },
        valid: true,
      },
      address: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Vui lòng nhập địa chỉ của bạn',
          name: 'Địa chỉ'
        },
        value: '',
        validation: {
          required: true,
          minLength: 15,
          maxLength: 50,
          letterValid: /^[a-zA-Z]+$/,
          errorMessage: "Địa chỉ không hợp lệ"
        },
        valid: true,
      },
      // birth: {
      //   elementType: 'input',
      //   elementConfig: {
      //     type: 'datepicker',
          
      //     name: 'Ngày tháng năm sinh'
      //   },
      //   value: '',
        
      //   valid: true,
      // },
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
              idForm="registerForm1"
              nameForm="registerForm1"
              originalForm={this.state.registerForm1}
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