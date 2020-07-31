import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './Googlelogin.css';
import App from './App'
 
 
const responseGoogle = (response) => {
  if(!response.error){
    ReactDOM.render(
      <React.StrictMode>
        <div className="googledetails">
          <img src={response.profileObj.imageUrl}></img>
          <br></br>
          </div>
          <div className="detail">
          <a><b>Hello {response.profileObj.givenName} {response.profileObj.familyName}</b></a>
          </div>
        
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}
function Googlelogin(){
  return(
    <div className="googlelogin">
      <GoogleLogin
        clientId="425979505207-n65vk709tfclnajjqs4lsn3ftjpn7ipb.apps.googleusercontent.com"
        buttonText="Login to i8 labs Using Google"
        onSuccess={responseGoogle}
        isSignedIn={true}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Googlelogin;