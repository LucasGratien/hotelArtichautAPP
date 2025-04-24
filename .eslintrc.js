module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        'eslint:recommended', // règles de base recommandées
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended' // intégrer Prettier pour éviter les conflits
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off', // Autorise les consoles
        'no-unused-vars': 'warn', // Avertissement pour les variables inutilisées
        'prettier/prettier': 'warn', // Avertissement pour les violations de Prettier
        'vue/no-unused-vars': 'warn', // Avertissement pour les variables inutilisées en Vue
        'vue/require-default-prop': 'off', // Permet de ne pas exiger des valeurs par défaut pour les props Vue
        'vue/no-mutating-props': 'off', // Permet de muter les props dans Vue
        'no-debugger': 'off', // Autorise l'utilisation de `debugger`
        'no-empty-function': 'warn', // Avertissement pour les fonctions vides
        'no-duplicate-imports': 'warn', // Avertissement pour les imports dupliqués
        'no-magic-numbers': 'off' // Permet d'utiliser des nombres "magiques" sans générer d'erreurs
    }
};
