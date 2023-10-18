import React from 'react';
import ButtonLoad from "./ButtonLoad";
import {loadAllUsers} from '../APIFunc/Api_func';

function Nav(props) {

    const handleLoadUsers = async (value) => {
        
        props.reset();
        const data = await loadAllUsers({value});
        props.setUsers(data);
    };

    return (
        <>
            <div className="menu-div-btn">
                <ButtonLoad onClick={handleLoadUsers} value={'list'} text = {'Load Users'} />
            </div>
            <div className="menu-div-btn">
                <span className="label-name">Number of Users <span className="badge " id="lb_numberUsers">{props.numberUsers}</span></span>
                    
            </div>
            <div className="menu-div-btn" id="userInfo">
                    
            </div>
        </>
    );
}

export default Nav;