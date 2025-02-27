import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  let items = ["list 1", "list 2", "list 3", "list 4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>hloow</Alert>
      <ListGroup
        items={items}
        heading="Header"
        onSelectItem={handleSelectItem}
      />
      <Button color="secondary" onClick={() => console.log("click")}>
        my linkedin
      </Button>
    </div>
  );
}

export default App;
