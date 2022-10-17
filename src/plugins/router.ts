import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/component',
      component: () => import('@/views/ComponentView.vue'),
      children: [
        { path: 'button', component: () => import('@/views/components/ButtonView.vue') },
        { path: 'link', component: () => import('@/views/components/LinkView.vue') },
        { path: 'locale-selector', component: () => import('@/views/components/LocaleSelectorView.vue') },
        { path: 'theme-selector', component: () => import('@/views/components/ThemeSelectorView.vue') },
        { path: 'heading', component: () => import('@/views/components/HeadingView.vue') },
        { path: 'tabs', component: () => import('@/views/components/TabsView.vue') },
        { path: 'table', component: () => import('@/views/components/TableView.vue') },
        { path: 'inputs', component: () => import('@/views/components/InputsView.vue') },
        { path: 'form', component: () => import('@/views/components/FormView.vue') },
        { path: 'modal', component: () => import('@/views/components/ModalView.vue') },
        { path: 'skeleton', component: () => import('@/views/components/SkeletonView.vue') },
        { path: 'alert', component: () => import('@/views/components/AlertView.vue') },
        { path: 'image', component: () => import('@/views/components/ImageView.vue') },
        { path: 'tooltip', component: () => import('@/views/components/TooltipView.vue') },
        { path: 'icon', component: () => import('@/views/components/IconView.vue') },
      ],
    },
    {
      path: '/colors',
      component: () => import('@/views/ColorsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
