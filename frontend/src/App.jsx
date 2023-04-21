import Welcome from './Welcome'
import ColorText from './ColorText'
import services from "./services";
function App() {
  // services.user.getAll().then((data) => {
  //   console.log(data);
  //   }); 
  return (
    <div>
      <Welcome name="Yiting" />
      <ColorText color="red" message="OwO" />
    </div>
  );
}
export default App;