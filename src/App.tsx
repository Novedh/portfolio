import "bootstrap/dist/css/bootstrap.css";

import Button from "./components/Button";
import ProfileImage from "./assets/images/temp.jpeg";
import Body from "./components/Body";
function App() {
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
          className="col-6 bg-danger bg-gradient d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="img-fluid"
            style={{ maxWidth: "60%" }}
          />
        </div>
        <div
          className="col-6 bg-white d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="text-center">
            <Body heading="Devon Huang" description="Ready to work">
              Body paragraph
            </Body>
            <div className="d-flex gap-2 justify-content-center align-items-center mt-3">
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
    </div>
  );
}

export default App;
