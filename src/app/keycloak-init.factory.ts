import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) {

    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8180/',
                realm: 'keycloak-sample-realm',
                clientId: 'security-angular-keycloak-sample-client',
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri:
                    window.location.origin + '/assets/silent-check-sso.html'
            }
        });
}