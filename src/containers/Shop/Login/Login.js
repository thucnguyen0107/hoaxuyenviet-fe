import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import Form from '../../../components/UI/Form/Form';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        orderForm: {
            telephone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Số điện thoại',
                    name: 'Số Điện Thoại'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 9,
                    maxLength: 32,
                    numberValid: /^\+?[0-9]+$/,
                    errorMessage: "Số điện thoại không đúng hoặc chưa được đăng ký!"
                },
                valid: true,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Mật khẩu',
                    name: 'Mật Khẩu'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 32,
                    errorMessage: "Mật khẩu không đúng. Vui lòng nhập lại!"
                },
                valid: true,
            },
        },
        formIsValid: false
    }



    checkValidity(value, rules) {

        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.letterValid) {
            isValid = rules.letterValid.test(value) && isValid;
        }

        if (rules.numberValid) {
            isValid = rules.numberValid.test(value) && isValid;
        }

        return isValid;
    }

    componentDidMount() {
        loadingScreen.hideLoading();
    }

    inputChangedHandler = (event, inputIdentifier) => {

        // clone form object
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        // get changed input element from cloned form object
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        // update value for changed input element
        updatedFormElement.value = event.target.value;

        // update changed input element in cloned form object
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({ orderForm: updatedOrderForm });

    }

    validateForm = () => {
        if (!this.state.submitIsClick) {
            this.setState({ submitIsClick: true });
        }

        const form = {
            ...this.state.orderForm
        }

        let formIsValid = true;
        for (let input in form) {
            // validate input element
            form[input].valid = this.checkValidity(form[input].value, form[input].validation);
            formIsValid = form[input].valid && formIsValid;
        }
        this.setState({ orderForm: form, formIsValid: formIsValid });
    }
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
                                <h2 className="page-title">ĐĂNG NHẬP</h2>
                                <li><a href="/"><i className="fa fa-home"></i></a></li>
                                <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Đăng Nhập</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="content" className="col-sm-9" style={{ height: '430px' }}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="well">
                                <h2>Khách Hàng Mới</h2>
                                <p><strong>Đăng Ký</strong></p>
                                <p>Bằng cách tạo tài khoản, bạn sẽ có thể mua sắm nhanh hơn, cập nhật trạng thái của đơn hàng và theo dõi các đơn hàng bạn đã thực hiện trước đó.</p>
                                <Link to="/register" className="btn btn-default">Tiếp tục</Link>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="well">
                                <h2>Đăng Nhập</h2>
                                <p><strong>Chào mừng bạn quay trở lại!</strong></p>
                                <Form idForm="loginForm" formElementsArray={formElementsArray} changed={this.inputChangedHandler} />
                                <div className="col text-center">
                                    <Tooltip placement="bottom" title="Vui lòng điền đầy đủ thông tin">
                                        <button style={{ marginBottom: '20px' }} className="btn btn-default" id="button-login" data-loading-text="Loading..." onClick={this.validateForm}>Đăng nhập</button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Login;