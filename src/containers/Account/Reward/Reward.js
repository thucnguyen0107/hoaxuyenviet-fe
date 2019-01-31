import React from 'react';
import { cloneData } from '../../../utilities/fnUtil';
import { userProfileFormModel } from '../../../models/formModel';
import axios from 'axios';
import { endPoints } from "../../../services/config";
import loadingScreen from '../../../utilities/loadingScreen';

class Reward extends React.Component{
    state = {
        noEdit: true,
        inforForm: cloneData(userProfileFormModel),
        user: null
    };

    init() {
        const userPhone = JSON.parse(localStorage.getItem('authUser')).userPhone;
        axios.get(endPoints.GET_USER_BY_ID + userPhone)
        .then(res => {
            let inforForm = cloneData(this.state.inforForm);
            inforForm.Reward.value = res.userInfo.Reward;
            this.setState({ inforForm, user: res});
        })
    }
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        loadingScreen.hideLoading();
    }
    render(){
        return(
            <>
            <h2>Điểm thưởng hiện có của bạn là:
            <span style={{color: "#DC143C"}}>{this.state.inforForm.Reward.value}</span>
            </h2>
            </>
        );
    }
}
export default Reward;