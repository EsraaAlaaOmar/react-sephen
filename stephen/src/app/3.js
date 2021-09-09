import Comment from "./components/comment";
import Approval  from './components/Aproval';
function getTime(){
  return (new Date().toLocaleTimeString())
}
function App() {
  return (
   
    <div className="ui container  App">
      <Approval ><Comment avatar ={faker.image.avatar()}  author='sam' timeAgo="Today at 4:45PM" content="Nice blog post"/></Approval>
      <Approval > <Comment avatar ={faker.image.avatar()} author='Esraa' timeAgo="Today at 2:30PM" content="I like the subject"/></Approval>
      <Approval > <Comment avatar ={faker.image.avatar()} author='Alaa' timeAgo="yesterday at 4:00PM" content="I Like the writing"/></Approval>
        
        
       
    <div >Current Time:</div>
  <h3>{getTime()}</h3>
    </div>
  );
}

export default App;
