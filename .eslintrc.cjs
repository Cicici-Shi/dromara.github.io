module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ["standard-with-typescript", "plugin:vue/vue3-essential"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"]
  },
  plugins: ["vue"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": ["error", "double"]
  }
};
