import Avatar from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="wrapper">
        <div class="resume_block">
            <div class="profile_data">
                <img src={Avatar} class="profile_data_img" alt="avatar"></img>
                <div class='profile_data_name_block'>
                  <p class="profile_data_name" title="Shrek Ogrbekuly Ogrsinabek Akenin Akesi Papanin Papasynyn balasy">Shrek Ogrbekuly Ogrsinabek Akenin Akesi Papanin Papasynyn balasy</p>
                  <span>@shrek</span>
                </div>
            </div>
            <p class="quote">
                Всем привет, я живу на болоте!<br></br>
                Вот мой адрес: <a target="_blank" rel="noopener noreferrer" href="https://2gis.kz/nur_sultan">
                  https://2gis.kz/nur_sultan
                  </a>
            </p>
            <div class="hints">
                <div class="time_block">
                    <span>11:32 •</span>
                    <span>2 марта 2022г</span>
                </div>
                <div class="like_block">
                    <span>Нравится: 255 •</span>
                    <span>Комментарии: 7 •</span>
                    <span>Репоcт: 3</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
