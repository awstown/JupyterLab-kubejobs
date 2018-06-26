import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-kubejobs extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-kubejobs',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-kubejobs is activated!');
  }
};

export default extension;
