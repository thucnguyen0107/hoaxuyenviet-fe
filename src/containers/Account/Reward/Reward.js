import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import { connect } from "react-redux";
import { isNotEmpty } from "../../../utilities/fnUtil";

class Reward extends React.Component{
    

    
    componentWillMount() {
        loadingScreen.showLoading();
        
      }
    
      componentWillReceiveProps(nextProps) {
        if (isNotEmpty(nextProps.user)) {
          loadingScreen.showLoading();
          this.initForm(nextProps.user);
        }
      }
    componentDidMount() {
        loadingScreen.hideLoading();
    }
    render(){
        return(
            <>
            <h2>Điểm thưởng hiện có của bạn là:
            <span style={{color: "#DC143C"}}>{this.props.user.userInfo.rewardPoints}</span>
            </h2>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
      authUser: state.authUser,
      user: state.userList.user
    };
  };
 
export default connect(mapStateToProps)(Reward);