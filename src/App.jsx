import Nav from './component/nav'
import ChatRoom from './component/chatRoom';
import SignIn from './component/signIn';
import Page404 from './component/page404';
import 'firebase/firestore'
import 'firebase/auth'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};
function App() {
  const [user]=  useAuthState(auth)

  return (
    <div className={style.appContainer}>
    <section className='{style.sectionContainer}'>
      {/* Navbar */}
      <Nav />
      {user ? <ChatRoom /> : null}
    </section>
  </div>
  );
}

export default App;
