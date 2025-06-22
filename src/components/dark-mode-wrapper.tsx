import "../styles/dark-mode.css";
import { ReactNode } from "react";

const CKEditorDarkModeWrapper = ({
  children,
  theme,
}: {
  children?: ReactNode;
  theme: "dark" | "light";
}) => {
  return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
};

export default CKEditorDarkModeWrapper;
