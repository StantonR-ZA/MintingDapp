import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import { ToastContainer } from 'react-toastify';
import NavBar from "./react/nav"
import Home from "./react/home"
import RoadMap from "./react/roadmap"

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<>
    <ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
          theme='light' />
  </>, document.getElementById('notifications'));


  ReactDOM.render(<>  
    <Dapp />
  </>, document.getElementById('minting-dapp'));


});
