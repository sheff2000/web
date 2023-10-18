import React, { useState } from 'react';
import Nav from './Component/Nav';
import UserCard from './Component/UserCard';
import AlbumList from './Component/Album/AlbumList';

function App() {
  
    const [users, setUsers]   = useState([]);  // списко бзеров
    const [albums, setAlbums] = useState([]);  // список альбомов юзера
    const [currentUserName, setCurrentUserName] = useState(null); // для вывода имени текущего юзера
    const [showUsers, setShowUsers] = useState(true);  // активен или нет сейчас список юзеров
    const [foto, setFoto] = useState([]);
    const [showFoto, setShowFoto] = useState(false);   // просмотр фото альбома
    const [currentTitleAlbum, setCurrentTitleAlbum] = useState(null); // текущий альбом
 
  const btnBackFromFoto = () => {      // возврат с просмотра списка фото конкретного альбома
    setShowFoto(false);
    setFoto([]);
    setCurrentTitleAlbum(null);
  };
  
  const btn_newLoad = () => {   // reset всех и загрузка юзеров заново
    setShowUsers(true);
    setUsers([]);
    setAlbums([]);
    setCurrentUserName(null);
    setShowFoto(false);
    setCurrentTitleAlbum(null);
  }
  const btnBack = () => {      // возврат с просмотра списка альбомов
    setShowUsers(true);
    setAlbums([]);
    setCurrentUserName(null);
    setShowFoto(false);
    setCurrentTitleAlbum(null);
  };

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2 col-md-2 col-sm-3 menu-fixed sidebar">
                <h4>Home Work #06</h4>
                <small>ReactDOM</small>
                <Nav setUsers={setUsers} reset={btn_newLoad} numberUsers={users.length}/>
            </div>
            <div className="col-10 col-md-10 col-sm-9 offset-md-2 offset-sm-3 content">
                <div>
                    { !showUsers
                        ? <AlbumList 
                                    albums={albums} 
                                    foto={foto}
                                    currentUserName={currentUserName} 
                                    currentTitleAlbum={currentTitleAlbum}
                                    showFoto={showFoto}
                                    btnBack={btnBack}
                                    btnBackFromFoto={btnBackFromFoto}
                                    setFoto={setFoto}
                                    setShowFoto={setShowFoto}
                                    setCurrentTitleAlbum={setCurrentTitleAlbum}
                                    />
                        : users.map(user => <UserCard 
                                                key={user.id} 
                                                setAlbums={setAlbums} 
                                                setCurrentUserName={setCurrentUserName} 
                                                setShowUsers={setShowUsers}
                                                user={user} 
                                                />
                          )
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
