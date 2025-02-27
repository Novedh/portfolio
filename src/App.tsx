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
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-6 bg-danger bg-gradient"
          style={{ minHeight: "100vh" }}
        ></div>
        <div className="col-6 bg-white" style={{ minHeight: "100vh" }}>
          <ListGroup
            items={items}
            heading="Devon Huang"
            onSelectItem={handleSelectItem}
          />
          <div className="d-flex gap-2 justify-content-center align-items-center h-100">
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
      </div>
    </div>
  );
}

export default App;
