import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { memo } from "react";
const Navbar = () => {
const { user, isAuthenticated } = useAuth0();
  return (
    <div className="navbar-content">
      <div>
        <div className="navbar-brand" style={{ marginBottom: "-22px" }}>
          <Link className="navbar-link-brand" to="/">
            <p
              className="logo-Name"
              style={{
                background:
                  "linear-gradient(90deg, green, blue, indigo, violet)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                position: "absolute",
              }}
            >
              RESUME ERA
            </p>
            {isAuthenticated && (
              <p
                style={{
                  marginTop: "-35px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Welcome {user.name} !
              </p>
            )}
          </Link>
        </div>
      </div>

      <div className="navbar-links">
        {[
          { to: "/", label: "Home" },
          { to: "/template", label: "TEMPLATES" },
          { to: "/myresume", label: "MY RESUME" },
          { to: "/cover_letter", label: "COVER LETTER" },
        ].map((link) => (
          <Link
            key={link.to}
            className="navbar-link"
            to={link.to}
            style={{
              fontSize: ".8rem",
              textAlign: "center",
              marginTop: "auto",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default memo(Navbar);
