import Component from '../packages/Component';
import './index.scss'


function App() {
  return (
    <>
      <Component src='/a8ccb573aeb231c14a84a3c7ea7364431550564.jpg'
        height={350}
        backgroundStyle={{
          backgroundSize: '130vw',
          backgroundPosition: '-69px 5%'
        }}
        test
        content={<Content />} />
    </>
  );
}

function Content() {
  return <div className='content'>
    <h1>强势动力来自</h1>
    <div>
      <div className='content-mask' />
      <span>CNB</span>
    </div>
  </div>
}

export default App;
