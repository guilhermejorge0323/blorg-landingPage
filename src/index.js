// webpack
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import { dropAdm } from './modules/dropdowns';
import { menuAtivo } from './modules/navbar';
import { verificaLargura, verificaRedimensinamento } from './modules/imagesMob';


dropAdm();
menuAtivo();
verificaLargura();
verificaRedimensinamento();





