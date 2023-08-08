import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <NavBar />
      {children}
    </div>
  );
}
