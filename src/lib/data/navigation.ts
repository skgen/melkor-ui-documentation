export type NavigationLevel = {
  title: string;
  to?: string;
  children?: NavigationLevel[];
};

export const sidebar: NavigationLevel[] = [
  // {
  //   title: 'app.setup',
  //   children: [
  //     {
  //       title: 'navigation.theme',
  //       to: '/concept/theme',
  //     },
  //     // {
  //     //   title: 'app.translations',
  //     //   to: '/translations',
  //     // },
  //     // {
  //     //   title: 'app.colors',
  //     //   to: '/colors',
  //     // },
  //   ],
  // },
  {
    title: 'navigation.setup.category',
    children: [
      {
        title: 'view.home.titles.intro',
        to: '/',
      },
      {
        title: 'view.setup.titles.setup',
        to: '/concept/setup',
      },
    ],
  },
  {
    title: 'navigation.theme.category',
    children: [
      {
        title: 'view.theme.titles.use',
        to: '/concept/using-theme',
      },
      {
        title: 'view.theme.titles.custom',
        to: '/concept/custom-theme',
      },
      {
        title: 'component.themeToggle.name',
        to: '/component/theme-toggle',
      },
      {
        title: 'component.themeSelector.name',
        to: '/component/theme-selector',
      },
      {
        title: 'component.themeContext.name',
        to: '/component/theme-context',
      },
    ],
  },
  {
    title: 'navigation.i18n.category',
    children: [
      {
        title: 'view.i18n.titles.setup',
        to: '/concept/i18n-setup',
      },
      {
        title: 'view.i18n.titles.keys',
        to: '/concept/i18n-keys',
      },
      {
        title: 'component.localeSelector.name',
        to: '/component/locale-selector',
      },
    ],
  },
  {
    title: 'navigation.router.category',
    children: [
      {
        title: 'view.router.titles.setup',
        to: '/concept/router-setup',
      },
    ],
  },
  {
    title: 'app.cta',
    children: [
      {
        title: 'component.button.name',
        to: '/component/button',
      },
      {
        title: 'component.link.name',
        to: '/component/link',
      },
    ],
  },
  {
    title: 'app.dataInputs',
    children: [
      {
        title: 'component.input-text.name',
        to: '/component/input-text',
      },
      {
        title: 'component.input-number.name',
        to: '/component/input-number',
      },
      {
        title: 'component.input-password.name',
        to: '/component/input-password',
      },
      {
        title: 'component.input-textarea.name',
        to: '/component/input-textarea',
      },
      {
        title: 'component.input-toggle.name',
        to: '/component/input-toggle',
      },
      {
        title: 'component.input-file.name',
        to: '/component/input-file',
      },
      {
        title: 'component.input-color.name',
        to: '/component/input-color',
      },
      {
        title: 'component.input-select.name',
        to: '/component/input-select',
      },
      {
        title: 'component.input-radio.name',
        to: '/component/input-radio',
      },
      {
        title: 'component.input-date.name',
        to: '/component/input-date',
      },
      {
        title: 'component.input-range.name',
        to: '/component/input-range',
      },
      {
        title: 'component.input-checkbox.name',
        to: '/component/input-checkbox',
      },
      {
        title: 'component.input-checkbox-tree.name',
        to: '/component/input-checkbox-tree',
      },
      // {
      //   title: 'component.form.name',
      //   to: '/component/form',
      // },
    ],
  },
  {
    title: 'app.global',
    children: [
      {
        title: 'component.alert.name',
        to: '/component/alert',
      },
      {
        title: 'component.image.name',
        to: '/component/image',
      },
      {
        title: 'component.table.name',
        to: '/component/table',
      },
      {
        title: 'component.skeleton.name',
        to: '/component/skeleton',
      },
      {
        title: 'component.tabs.name',
        to: '/component/tabs',
      },
      {
        title: 'component.icon.name',
        to: '/component/icon',
      },
      {
        title: 'component.wysiwygPreview.name',
        to: '/component/wysiwyg-preview',
      },
    ],
  },
  {
    title: 'app.floatingViews',
    children: [
      {
        title: 'component.menu.name',
        to: '/component/menu',
      },
      {
        title: 'component.tooltip.name',
        to: '/component/tooltip',
      },
    ],
  },
  {
    title: 'app.fullscreenViews',
    children: [
      {
        title: 'component.fullscreenView.name',
        to: '/component/fullscreen-view',
      },
    ],
  },
];
