import { useRecoilValue,RecoilRoot} from "recoil" 
import {networkAtom} from "./atom" 





function App() {

  return <RecoilRoot>
    <Main></Main>
  </RecoilRoot>
}



function Main(){

const notificationCount = useRecoilValue(networkAtom)
  return (
    <>
    <button>Home</button>
    <button>My network({notificationCount > 99? "99+":notificationCount})</button>
    <button>Jobs()</button>
    <button>Messaging()</button>
    <button>Notification()</button>
    <button>Me</button>
   </>
  )
}


export default App;





