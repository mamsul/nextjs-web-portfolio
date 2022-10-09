import NavItem from "./NavItem";

export default function Navbar({ direction, theme, closeMobileMenu }) {
  const setDirection = {
    horizontal: "flex-row space-x-12 items-center",
    vertical: "flex-col space-y-8 items-start",
  };
  return (
    <ul
      className={`flex ${setDirection[direction]} justify-center`}
    >
      <NavItem href="#profile" selectedTheme={theme} onCloseMobileMenu={closeMobileMenu}>
        Profile
      </NavItem>
      <NavItem href="#skill" selectedTheme={theme} onCloseMobileMenu={closeMobileMenu}>
        Skills
      </NavItem>
      <NavItem href="#project" selectedTheme={theme} onCloseMobileMenu={closeMobileMenu}>
        Projects
      </NavItem>
      <NavItem href="#contact" selectedTheme={theme} onCloseMobileMenu={closeMobileMenu}>
        Contact
      </NavItem>
    </ul>
  );
}
