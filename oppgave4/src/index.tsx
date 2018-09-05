if (process.env.NODE_ENV === 'development') {
  const hot: any | undefined = (module as any).hot;
  if (hot) {
    hot.accept();
  }
}

import { render } from 'react-dom';
import * as React from 'react';
import App from './components/App';

render(<App />, document.getElementById('root'));
