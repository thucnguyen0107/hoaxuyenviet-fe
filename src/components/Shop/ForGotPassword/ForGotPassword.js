import React from 'react';

const ForGotPassWord = () => {
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
                <p>Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.</p>
                <form action="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/forgotten" method="post" enctype="multipart/form-data" className="form-horizontal">
                    <fieldset>
                        <legend>Your E-Mail Address</legend>
                        <div className="form-group required">
                            <label className="col-sm-2 control-label" htmlFor="input-email">E-Mail Address</label>
                            <div className="col-sm-10">
                                <input type="text" name="email" defaultValue="" placeholder="E-Mail Address" id="input-email" className="form-control" />
                            </div>
                        </div>
                    </fieldset>
                    <div className="buttons clearfix">
                        <div className="pull-left"><a href="http://splashythemes.com/opencart/OPC01/OPC010011/OPC3/index.php?route=account/login" className="btn btn-default">Back</a></div>
                        <div className="pull-right">
                            <input type="submit" defaultValue="Continue" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default ForGotPassWord;