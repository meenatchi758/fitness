// src/components/Layout.js
import useWindowSize from "../hooks/useWindowSize";

export default function Layout({ children }) {
  const { width } = useWindowSize();
  return (
    <div className={width < 600 ? "mobile-layout" : "desktop-layout"}>
      {children}
    </div>
  );
}
