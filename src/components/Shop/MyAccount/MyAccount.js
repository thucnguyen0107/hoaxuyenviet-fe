import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';

const hideLS = () => {
    window.$(document).ready(() => {
        loadingScreen.hideLoading();
    })
}

const myAccount = () => {
    return (
        <>
            <div id="breadcrumb">
                <div className="container">
                    <div className="row">
                        <ul className="breadcrumb">
                            <h2 className="page-title">TÀI KHOẢN CỦA TÔI</h2>
                            <li><a href="/"><i className="fa fa-home"></i></a></li>
                            <li><a href="/" style={{ pointerEvents: 'none', cursor: "default"}}>Tài Khoản Của Tôi</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="content" className="col-sm-9" style={{ height: '425px', marginBottom:'30px' }}>
                <h2>Tài khoản của tôi</h2>
                <ul className="list-unstyled">
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/edit">Chỉnh sửa thông tin tài khoản</a></li>
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/password">Đổi mật khẩu</a></li>
                </ul>
                <h2>Đơn hàng của tôi</h2>
                <ul className="list-unstyled">
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/order">Lịch sử giao dịch</a></li>
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/reward">Điểm thưởng của tôi</a></li>
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/transaction">Giao dịch</a></li>
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/recurring">Thông tin thanh toán</a></li>
                </ul>
                <h2>Tài khoản liên kết</h2>
                <ul className="list-unstyled">
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/affiliate/add">Đăng ký tài khoản liên kết</a></li>
                </ul>
                <h2>Bản tin</h2>
                <ul className="list-unstyled">
                    <li><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/newsletter">Bản tin</a></li>
                </ul>
            </div>
            
            {hideLS()}
        </>
    );
}
export default myAccount;