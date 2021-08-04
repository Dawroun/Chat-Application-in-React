import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () =>  {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height = "100vh"
      projectID = "ae49d65d-b0bb-45c8-bd13-343e07d90d48"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(ChatAppProps) => <ChatFeed { ...ChatAppProps} />}
    />
  );
}
export default App;
