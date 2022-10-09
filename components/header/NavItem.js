export default function NavItem({ children, href, selectedTheme, onCloseMobileMenu }) {
  const setTheme = {
    "light": "text-white",
    "dark": "text-black",
  }
  return (
    <li>
      <a
        onClick={onCloseMobileMenu}
        href={href}
        className={`${setTheme[selectedTheme]} opacity-60 md:text-base lg:text-lg font-semibold font-main hover:opacity-100 transition`}
      >
        {children}
      </a>
    </li>
  );
}
