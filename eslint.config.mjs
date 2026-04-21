import globals from "globals";

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "commonjs", // Précise qu'on utilise module.exports
        globals: {
            ...globals.node // Ajoute les variables globales de Node (module, process, etc.)
        }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];