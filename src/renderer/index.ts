import './index.css';

import {remote} from 'electron';
import keymaster from 'keymaster';

console.log('renderer process');

document.getElementById('content')!.innerText = 'hello from javascript';

const {FindInPage} = require('electron-find');
const findInPage = new FindInPage(remote.getCurrentWebContents());

keymaster('command+f', () => {
  findInPage.openFindWindow();
});
