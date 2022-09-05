import React ,{useState,useEffect,useRef} from 'react'
import Message from './message'
import SendMessage from './SendMessage.jsx';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const style = {
  main: `flex flex-col p-[10px]`,
};
export default function ChatRoom() {
  const [messages,setMessages] = useState([])
  const scroll = useRef()

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  // const messageRef = collection('messages');
  // const query = messageRef.orderBy('createdAt').limit(25);
  // const[messages] = useCollection(query,{idField:'id'});
  return (
    <>
    <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    
    </>
  )
}

