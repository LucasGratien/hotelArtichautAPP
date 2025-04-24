// Middleware avec pour condition la route, la connection du user et le role (+de 2)

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    authStore.initializeAuth();

    //pour les routes d'admin
    if (to.path.startsWith('/admin')) {
        // isLoggedIn doit être true
        if (!authStore.isLoggedIn) {
            console.log('admin auth was not logged in.');
            alert(`pas connécté !`);
            //sinon retour à la homepage
            return navigateTo('/');
        }

        // le role_id doit être suffisant
        if (authStore.tokenUser.role_id < 3) {
            console.log('admin auth was not unable to access.');
            // Rediriger vers une page accès refusé
            return navigateTo('/unauthorized');
        }
    }
});
