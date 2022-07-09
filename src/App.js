import './App.css';
import {useState, useEffect} from 'react';
import Card from './components/Card.js';

function App() {
  const [userData,setUserData] = useState(null);
  const [token, setToken] = useState(null); 

 
  useEffect(() =>{
    fetch("https://api.spotify.com/v1/me/top/artists/", requestOptions)
    .then(response => response.json())
    .then(result => {
      //  console.log( result.items)
       setUserData(result.items); 
      })
    .catch(error => console.log('error', error));
  

  },[token])

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}` );

let requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};


  const handleSubmit = event =>{
    console.log("handle submit triggered! ");
    event.preventDefault(); 
    setToken('');
    console.log("token: " + token);
  }




  return (
    <div className='main-content'>
      <div className="Header">
      <h1>Whatcha listening to? </h1>
      <h3>Retrives your top spotify Artists!</h3>
    <p>Note: To <a href="https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/" target="blank"> generate your token  </a>  click "fill sample data" at the bottom, then press get token, check off only user-top-read, and then request token.</p>
      </div>

    <div className="form">
      
      <form onSubmit={handleSubmit} >
        Enter token:
        <input type="text" 
        id='token'
        name='token'
        onChange={event => setToken(event.target.value)} 
        
        />
 
      </form>
    </div>



     {userData==null ? <h1>No valid input!</h1> : userData.map((artist,index)=>{
      return <div> 
          <Card title = {artist.name} image={artist.images[0].url} popularity = {artist.popularity} genres={artist.genres.map((genre)=>{
          
            // console.log("genres " + genre);
               
            return <spread>

              {genre + ", "}
            </spread> 
          })} link = {artist.external_urls.spotify}/> 
      
         
        </div> 
     })}

    </div>
  );
}

export default App;
