module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    //继承插件规则
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended", //避免perttier与eslint配置冲突
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["functions", "arrowFunctions", "methods"] },
    ],
  },
};
