import instaLogo from '../../assets/images/instagram-logo.webp'
import googlePlay from '../../assets/images/google-play.png'
import microsoft from '../../assets/images/microsoft.png'

import './index.scss';

function App() {
  return (
    <div className="App">
      <div className='loginScreen'>
        <div className='LogoSection'>
          <i className='imgLogo'></i>

        </div>
        <div className='inputs'>
          
          <div>
            <span>Telefone, nome de usuario ou email</span>
            <input type='text' placeholder='' />
          </div>

          <div>
            <span> senha</span>
            <input type='password' />
          </div>
          <button>Entrar</button>
        </div>
        <a className='RecPwd' href=''>Esqueceu a senha?</a>
      </div>
      <div className='NewAccount'>
        <p>Não tem uma conta? <span>Cadastre-se</span></p>
      </div>
      <div className='getApp'>
          <p>Obtenha o aplicativo</p>
          <div className='sites'>
            <img src={googlePlay} className='googlePlay' />
            <img src={microsoft} className='microsoft'/>
          </div>
      </div>

      <footer>
        <div className='links'>
          <a href='' >Meta</a>
          <a href='' >Sobre</a>
          <a href='' >Blog</a>
          <a href='' >Carreiras</a>
          <a href='' >Ajuda</a>
          <a href='' >API</a>
          <a href='' >Privacidade</a>
          <a href='' >Termos</a>
          <a href='' >Principais Contas</a>
          <a href='' >Localizações</a>
          <a href='' >instagram Lite</a>
          <a href='' >Threads</a>
          <a href='' >Carregamento de contatos e não usuarios</a>
          <a href='' >Meta Verified</a>
          <a href='' >Principais</a>
        </div>
        <div>
          <a href=''>Português (Brasil)  </a> 
          <a href=''>
          &copy; 2023 Instagram from Meta
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
