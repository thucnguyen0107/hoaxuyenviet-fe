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
                    placeholder: 'Số điện thoại'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 9,
                    maxLength: 32,
                    numberValid: '^[0-9]+$',
                    errorMessage: "Số điện thoại không đúng hoặc chưa được đăng ký!"
                },
                valid: true,
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
                    letterValid: /^[a-zA-Z]+$/,
                    errorMessage: "Mật khẩu không đúng. Vui lòng nhập lại!"
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
                                <Form
                                    idForm="registerForm"
                                    nameForm="rgisterForm"
                                    originalForm={this.state.orderForm}
                                    setState={this.setStateForm}
                                    btnName="Lưu Lại"
                                />
                                {/* {this.state.noEdit ?
                                    <div className="text-center">
                                        <button className="btn" style={{ marginBottom: "20px" }} onClick={() => this.setState({ noEdit: false })}> Đăng ký</button>
                                    </div> : null}
                                {form} */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Login;