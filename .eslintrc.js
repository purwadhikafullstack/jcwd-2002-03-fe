module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@next/next/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": 0,
    quotes: ["error", "double"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "arrow-body-style": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
  },
};

