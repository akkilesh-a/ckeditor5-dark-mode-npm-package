const CKEditorDarkModeWrapper = ({
  children,
  theme,
}: {
  children?: React.ReactNode;
  theme?: string | undefined;
}) => {
  return <div className={`${theme === "dark" ? "dark" : ""}`}>{children}</div>;
};

export default CKEditorDarkModeWrapper;
