import { createRoot } from 'react-dom/client'
import './index.css'

function Picture(){
  return(
    <img src="https://mikki32sw.github.io/assets/good7.png" />
  );
}

function Gallary(){
  return(
    <div>
      <Picture />
      <Picture />
      <Picture />
    </div>
    
  );
}

createRoot(document.getElementById('root')).render(

  <Gallary />
)
