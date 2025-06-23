<div align="center">
  <h1>ckeditor5-dark-mode</h1>
  <p>
    <a href="https://www.npmjs.com/package/ckeditor5-dark-mode">
      <img src="https://img.shields.io/npm/v/ckeditor5-dark-mode.svg" alt="npm version" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
    </a>
  </p>
</div>

## Description

**ckeditor5-dark-mode** provides a simple, customizable dark mode wrapper and theme for CKEditor5, using [shadcn](https://ui.shadcn.com/) color variables for seamless integration with modern React and Next.js projects. Easily toggle between light and dark themes for your CKEditor5 instance.

## Features

- Plug-and-play dark mode for CKEditor5
- Uses shadcn color variables for easy theming
- React component wrapper for theme toggling
- Fully typed with TypeScript
- Lightweight and easy to integrate

## Installation

```bash
npm install ckeditor5-dark-mode
# or
yarn add ckeditor5-dark-mode
```

## Usage

Wrap your CKEditor5 component with the `CKEditorDarkModeWrapper` and pass the `theme` prop:

```tsx
import CKEditorDarkModeWrapper from "ckeditor5-dark-mode";

function MyEditor({ theme }: { theme: "dark" | "light" }) {
  return (
    <CKEditorDarkModeWrapper theme={theme}>
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: "GPL",
          plugins: [Essentials, Paragraph, Bold, Italic],
          toolbar: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "|",
            "formatPainter",
          ],
          initialData: "<p>Hello from CKEditor 5 in React!</p>",
        }}
      />
    </CKEditorDarkModeWrapper>
  );
}
```

- `theme` should be either `'dark'` or `'light'` (or `undefined` for default).
- The wrapper applies dark mode styles when `theme` is `'dark'`.

## Theming & Customization

This package uses [shadcn](https://ui.shadcn.com/) color variables. Make sure your app defines these CSS variables (e.g., `--background`, `--foreground`, `--primary`, etc.) for the dark mode styles to take effect.

The CSS (`dark-mode.css`) maps CKEditor5 color variables to shadcn variables, ensuring your editor matches your app's dark theme.

## API

### `<CKEditorDarkModeWrapper>`

| Prop     | Type                  | Description                         |
| -------- | --------------------- | ----------------------------------- |
| children | `ReactNode`           | The CKEditor5 component(s)          |
| theme    | `string or undefined` | Set to `'dark'` to enable dark mode |

## License

This project is licensed under the [MIT License](LICENSE).

## Contributors

- [akkilesh](https://www.akkilesh.in/)
- [sasank-v](https://sasank-three.vercel.app/)

## Links

- [GitHub Repository](https://github.com/akkilesh-a/ckeditor5-dark-mode)
- [NPM Package](https://www.npmjs.com/package/ckeditor5-dark-mode)
