module.exports = {
  root: false,
  extends: "../../.eslintrc.js",
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
};
