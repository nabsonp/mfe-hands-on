import {registerApplication, start} from 'single-spa';

// Registra a root-config: https://single-spa.js.org/docs/api/#registerapplication
registerApplication({
  name: "@nabstore/root-config",
  app: () => import('./nabstore-monolito.js'),
  activeWhen: ["/"],
});

// Inicia a aplicação: https://single-spa.js.org/docs/api/#start
start();
 