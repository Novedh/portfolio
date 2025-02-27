import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  let items = ["list 1", "list 2", "list 3", "list 4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      color: "primary",
    },
    {
      name: "GitHub",
      url: "https://github.com/Novedh",
      color: "dark",
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Alert>hloow</Alert>
      <ListGroup
        items={items}
        heading="Header"
        onSelectItem={handleSelectItem}
      />
      <div className="d-flex gap-2">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            color={link.color}
            onClick={() => handleLinkClick(link.url)}
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
