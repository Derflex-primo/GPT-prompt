import '@styles/global.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  title: 'GPT-prompt',
  description: 'Uncover while Share some Awesome Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
           {children}
          </main>
      
      </body>
    </html>
  )
}

export default RootLayout;