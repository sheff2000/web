
function FotoList(props) {

    return (
        <div>
            <h2>
                List of photos from album 
                "<small className="text-body-secondary">{props.currentTitleAlbum}</small>"
            </h2>
            
            <div className="row row-cols-lg-4 g-2 g-lg-3">
                {props.fotos.map(foto => 
                    <div className="col" key={`ft-${foto.id}`}>
                        <div className="card">
                            <img src={foto.thumbnailUrl} className="card-img-top" alt={foto.title}/>
                            <div className="card-body">
                                <p className="card-text"><b>#{foto.id}</b> {foto.title}</p>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div> 
    )
}

export default FotoList;