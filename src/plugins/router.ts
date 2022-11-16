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
      path: '/colors',
      component: () => import('@/views/ColorsView.vue'),
    },
    {
      path: '/translations',
      component: () => import('@/views/TranslationsView.vue'),
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
        { path: 'wysiwyg-preview', component: () => import('@/views/components/WysiwygPreviewView.vue') },
        { path: 'tabs', component: () => import('@/views/components/TabsView.vue') },
        { path: 'table', component: () => import('@/views/components/TableView.vue') },
        { path: 'form', component: () => import('@/views/components/FormView.vue') },
        { path: 'modal', component: () => import('@/views/components/ModalView.vue') },
        { path: 'skeleton', component: () => import('@/views/components/SkeletonView.vue') },
        { path: 'alert', component: () => import('@/views/components/AlertView.vue') },
        { path: 'image', component: () => import('@/views/components/ImageView.vue') },
        { path: 'tooltip', component: () => import('@/views/components/TooltipView.vue') },
        { path: 'icon', component: () => import('@/views/components/IconView.vue') },
        { path: 'input-text', component: () => import('@/views/components/io/InputTextView.vue') },
        { path: 'input-number', component: () => import('@/views/components/io/InputNumberView.vue') },
        { path: 'input-password', component: () => import('@/views/components/io/InputPasswordView.vue') },
        { path: 'input-textarea', component: () => import('@/views/components/io/InputTextareaView.vue') },
        { path: 'input-toggle', component: () => import('@/views/components/io/InputToggleView.vue') },
        { path: 'input-file', component: () => import('@/views/components/io/InputFileView.vue') },
        { path: 'input-color', component: () => import('@/views/components/io/InputColorView.vue') },
        { path: 'input-select', component: () => import('@/views/components/io/InputSelectView.vue') },
        { path: 'input-radio', component: () => import('@/views/components/io/InputRadioView.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
