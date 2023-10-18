import ButtonLoad from "../ButtonLoad";
import {loadAllUsers} from '../../APIFunc/Api_func';

function AlbumCard(props) {

    const style_bg = [
        'text-bg-primary',
        'text-bg-secondary',
        'text-bg-success',
        'text-bg-danger',
        'text-bg-info',
        'text-bg-light',
        'text-bg-dark'
    ];

    const randStyle = Math.floor(Math.random() * style_bg.length);

    const handleLoadFoto = async (value) => {
        const arg = {
            value:value,
            id:props.album.id
        }
        const data = await loadAllUsers(arg);
        props.setFoto(data);
        props.setCurrentTitleAlbum(props.album.title);
        props.setShowFoto(true);
    };

    return (
        <div className={`card ${style_bg[randStyle]} mb-3`}>
            <div className="card-header">Album #{props.album.id}</div>
            <div className="card-body">
                <p className="card-text">{props.album.title}</p>
                <ButtonLoad onClick={handleLoadFoto} text="Get Album" value="album"/>
            </div>
        </div>

    )
}

export default AlbumCard;