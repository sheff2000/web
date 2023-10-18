function ButtonLoad(props) {

    /*
        props.value = 
            'list' - список бзеров
            'post' - загрузка постов(альбомов) одного юзера
            'back' - возврат к списку юзеров
    */

    const btn_class = {
        list: 'btn-outline-info',
        post: 'btn-outline-dark',
        back: 'btn-outline-success',
        album:'btn-outline-warning'
    };

    return (
        <button className={`btn ${btn_class[props.value]}`}  
              typeof="button" 
              onClick={() => props.onClick(props.value)} 
              disabled={props.disabled}>
            {props.text} 
        </button>
    )
}

export default ButtonLoad;