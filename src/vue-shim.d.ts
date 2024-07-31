import { ComponentCustomProperties } from 'vue';
import { Route, Router } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router;
    $route: Route;
  }
}