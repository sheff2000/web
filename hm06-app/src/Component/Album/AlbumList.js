
import ButtonLoad from "../ButtonLoad";
import AlbumCard from "./AlbunCard";
import FotoList from './FotoList';

function AlbumList(props) {

    return (
        <div className="albums-div">
            <ButtonLoad text="Back to User list" value="back" onClick={props.btnBack}/>
            <ButtonLoad text="To all albums" value="post" onClick={props.btnBackFromFoto} disabled={!props.showFoto}/> 
            
            <h1>Album list by 
                <small className="text-body-secondary"><u> {props.currentUserName}</u></small> 
                <span className="badge text-bg-warning"> {props.albums.length} </span>
            </h1>
            <hr/>
            
                {
                    !props.showFoto
                    ? (
                        <div className="row row-cols-3">
                            {props.albums.map(album => 
                                <div className="col" key={`alb-${album.id}`}>
                                    <AlbumCard 
                                        setFoto={props.setFoto}
                                        setShowFoto={props.setShowFoto}
                                        setCurrentTitleAlbum={props.setCurrentTitleAlbum}
                                        album={album}
                                    />
                                </div>
                            )}
                        </div>
                      )
                    : <FotoList 
                            fotos={props.foto}
                            currentTitleAlbum={props.currentTitleAlbum}
                            btnBackFromFoto={props.btnBackFromFoto}
                        />
                }
            </div>
       
    )
}

export default AlbumList;