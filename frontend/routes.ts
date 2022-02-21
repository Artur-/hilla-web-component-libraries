import { Route } from '@vaadin/router';
import './views/helloworld/hello-vaadin';
import './views/helloworld/hello-ui5';
import './views/helloworld/hello-spectrum';
import './views/helloworld/hello-wired';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'hello-vaadin',
    icon: '',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-vaadin',
    icon: 'la la-globe',
    title: 'Hello Vaadin',
  },
  {
    path: 'hello-ui5',
    component: 'hello-ui5',
    icon: 'la la-globe',
    title: 'Hello UI5',
  },
  {
    path: 'hello-spectrum',
    component: 'hello-spectrum',
    icon: 'la la-globe',
    title: 'Hello Spectrum',
  },
  {
    path: 'hello-wired',
    component: 'hello-wired',
    icon: 'la la-globe',
    title: 'Hello Wired',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
