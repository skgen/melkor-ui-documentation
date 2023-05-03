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
      path: '/@playground',
      name: 'playground',
      component: () => import('@/views/PlaygroundView.vue'),
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: () => import('@/views/ChangelogView.vue'),
    },
    {
      path: '/config',
      component: () => import('@/views/ConfigView.vue'),
      children: [
        {
          path: 'setup',
          component: () => import('@/views/config/SetupView.vue'),
        },
        {
          path: 'components-options',
          component: () => import('@/views/config/ComponentsOptionsView.vue'),
        },
      ],
    },
    {
      path: '/concept',
      component: () => import('@/views/ComponentView.vue'),
      children: [
        {
          path: 'using-theme',
          component: () => import('@/views/concepts/theme/UsingThemeView.vue'),
        },
        {
          path: 'custom-theme',
          component: () => import('@/views/concepts/theme/CustomThemeView.vue'),
        },
        {
          path: 'i18n-setup',
          component: () => import('@/views/concepts/i18n/I18nSetupView.vue'),
        },
        {
          path: 'i18n-keys',
          component: () => import('@/views/concepts/i18n/I18nKeysView.vue'),
        },
        {
          path: 'router-setup',
          component: () => import('@/views/concepts/router/RouterSetupView.vue'),
        },
      ],
    },
    {
      path: '/component',
      component: () => import('@/views/ComponentView.vue'),
      children: [
        { path: 'button', component: () => import('@/views/components/ButtonView.vue') },
        { path: 'link', component: () => import('@/views/components/LinkView.vue') },
        { path: 'locale-selector', component: () => import('@/views/components/LocaleSelectorView.vue') },
        { path: 'theme-selector', component: () => import('@/views/components/ThemeSelectorView.vue') },
        { path: 'theme-toggle', component: () => import('@/views/components/ThemeToggleView.vue') },
        { path: 'theme-context', component: () => import('@/views/components/ThemeContextView.vue') },
        { path: 'heading', component: () => import('@/views/components/HeadingView.vue') },
        { path: 'wysiwyg-preview', component: () => import('@/views/components/WysiwygPreviewView.vue') },
        { path: 'tabs', component: () => import('@/views/components/TabsView.vue') },
        { path: 'table', component: () => import('@/views/components/TableView.vue') },
        { path: 'table-cell', component: () => import('@/views/components/TableCellView.vue') },
        { path: 'form', component: () => import('@/views/components/FormView.vue') },
        { path: 'fullscreen-view', component: () => import('@/views/components/FullscreenViewView.vue') },
        { path: 'skeleton', component: () => import('@/views/components/SkeletonView.vue') },
        { path: 'alert', component: () => import('@/views/components/AlertView.vue') },
        { path: 'image', component: () => import('@/views/components/ImageView.vue') },
        { path: 'tooltip', component: () => import('@/views/components/TooltipView.vue') },
        { path: 'menu', component: () => import('@/views/components/MenuView.vue') },
        { path: 'icon', component: () => import('@/views/components/IconView.vue') },
        { path: 'input-text', component: () => import('@/views/components/io/InputTextView.vue') },
        { path: 'input-number', component: () => import('@/views/components/io/InputNumberView.vue') },
        { path: 'input-password', component: () => import('@/views/components/io/InputPasswordView.vue') },
        { path: 'input-textarea', component: () => import('@/views/components/io/InputTextareaView.vue') },
        { path: 'input-toggle', component: () => import('@/views/components/io/InputToggleView.vue') },
        { path: 'input-file', component: () => import('@/views/components/io/InputFileView.vue') },
        { path: 'input-color', component: () => import('@/views/components/io/InputColorView.vue') },
        { path: 'input-select', component: () => import('@/views/components/io/InputSelectView.vue') },
        { path: 'input-icon', component: () => import('@/views/components/io/InputIconView.vue') },
        { path: 'input-radio', component: () => import('@/views/components/io/InputRadioView.vue') },
        { path: 'input-date', component: () => import('@/views/components/io/InputDateView.vue') },
        { path: 'input-range', component: () => import('@/views/components/io/InputRangeView.vue') },
        { path: 'input-checkbox', component: () => import('@/views/components/io/InputCheckboxView.vue') },
        { path: 'input-checkbox-tree', component: () => import('@/views/components/io/InputCheckboxTreeView.vue') },
        { path: 'infinite-scroll', component: () => import('@/views/components/InfiniteScrollView.vue') },
        { path: 'pagination', component: () => import('@/views/components/PaginationView.vue') },
        { path: 'draggable', component: () => import('@/views/components/DraggableView.vue') },
        { path: 'media-query', component: () => import('@/views/components/MediaQueryView.vue') },
        { path: 'checkbox', component: () => import('@/views/components/checkables/CheckboxView.vue') },
        { path: 'radio', component: () => import('@/views/components/checkables/RadioView.vue') },
        { path: 'toggle', component: () => import('@/views/components/checkables/ToggleView.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        top: 20,
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
