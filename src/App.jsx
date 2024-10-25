import Navbar from "./Component/Navbar";
import Todo from "./Component/Todo";
const App = () => {
  return (
    <div className="bg-stone-900 py-4 min-h-screen">
      <div className=" mb-20">
        <Navbar />
      </div>
      <main>
        <Todo />
      </main>
    </div>
  );
};

export default App;
