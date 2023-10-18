import ButtonLoad from "./ButtonLoad";
import {loadAllUsers} from '../APIFunc/Api_func';

function UserCard(props) {

    const user = props.user;

    const handleLoadPosts = async (value) => {
        const arg = {
            value: value,
            id: user.id
        }
        const data = await loadAllUsers(arg);
        props.setCurrentUserName(user.username);
        props.setAlbums(data);
        props.setShowUsers(false);
    };

    return (
        <div className="container text-left user-card" id={`userCard${user.id}`}>
            <div className="row align-items-center">
                <div className="col-9 col-md-9 user-info">
                    <div className="row">
                        <div className="col-8 col-md-8"><h4>{user.username}</h4></div>
                        <div className="col-4 col-md-4"><a href={`http://${user.website}`}>{user.website}</a></div>
                        <hr className="border border-danger border-1 opacity-30" />
                    </div>
                    <div className="row">
                        <div className="col">{user.name}</div>
                        <div className="col">{user.email} <hr/> {user.phone}</div>
                        <div className="col"><b>Company:</b> {user.company.name} <hr/> {user.company.bs}</div>
                    </div>
                </div>
                <div className="col-3 col-md-3 user-btn">
                    <ButtonLoad  onClick={handleLoadPosts} value='post'  text='Load Albums'/>
                </div>
            </div>
            <hr className="border border-danger border-2 opacity-50" />
        </div>
    );
}

export default UserCard;