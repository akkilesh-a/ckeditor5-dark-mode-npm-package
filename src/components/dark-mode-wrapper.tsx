import "../styles/dark-mode.css";
import { ReactNode } from "react";

const CKEditorDarkModeWrapper = ({
  children,
  theme,
}: {
  children?: ReactNode;
  theme?: string | undefined;
}) => {
  return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
};

export default CKEditorDarkModeWrapper;
