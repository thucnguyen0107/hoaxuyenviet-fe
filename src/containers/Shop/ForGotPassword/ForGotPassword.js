import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';


class ForGotPassWord extends React.Component{
    componentDidMount() {
        loadingScreen.hideLoading();
      }
      render(){
    return (
        <>
            <div id="breadcrumb">
                <div className="container">
                    <div className="row">
                        <ul className="breadcrumb">
                            <h2 className="page-title">QUÊN MẬT KHẨU</h2>
                            <li><a href="/"><i className="fa fa-home"></i></a></li>
                            <li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Quên Mật Khẩu</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="content" style={{ margin: 'auto', width: '60%' }}>
                <p>Vui lòng nhập địa chỉ E-mail có liên kết với tài khoản của bạn. Sau đó bấm nút xác nhận để nhận mật khẩu mới qua E-mail.</p>
                <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/forgotten" method="post" enctype="multipart/form-data" className="form-horizontal">
                    <fieldset>
                        <legend>E-mail của bạn</legend>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail Address </label>
                            <div className="col-sm-10">
                                <input type="text" name="email" defaultValue="" placeholder="Vui lòng nhập địa chỉ E-mail" id="input-email" className="form-control" />
                            </div>
                        </div>
                    </fieldset>
                    <div className="buttons clearfix">
                        <div className="pull-left"><a href="http://localhost:3000/login" className="btn btn-default">Trở về</a></div>
                        <div className="pull-right">
                            <input defaultValue="Xác nhận" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
}
export default ForGotPassWord;