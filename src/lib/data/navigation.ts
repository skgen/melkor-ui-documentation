import type { NavigationLevel } from '@/features/navigation';

export const sidebar: NavigationLevel[] = [
  {
    title: 'navigation.setup.category',
    children: [
      {
        title: 'view.home.titles.intro',
        to: '/',
      },
      {
        title: 'view.setup.titles.setup',
        to: '/config/setup',
      },
      {
        title: 'view.componentsOptions.titles.setup',
        to: '/config/components-options',
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
    title: 'app.checkables',
    children: [
      {
        title: 'component.checkbox.name',
        to: '/component/checkbox',
      },
      {
        title: 'component.radio.name',
        to: '/component/radio',
      },
      {
        title: 'component.toggle.name',
        to: '/component/toggle',
      },
    ],
  },
  {
    title: 'app.dataInputs',
    children: [
      {
        title: 'component.inputText.name',
        to: '/component/input-text',
      },
      {
        title: 'component.inputNumber.name',
        to: '/component/input-number',
      },
      {
        title: 'component.inputPassword.name',
        to: '/component/input-password',
      },
      {
        title: 'component.inputTextarea.name',
        to: '/component/input-textarea',
      },
      {
        title: 'component.inputToggle.name',
        to: '/component/input-toggle',
      },
      {
        title: 'component.inputFile.name',
        to: '/component/input-file',
      },
      {
        title: 'component.inputColor.name',
        to: '/component/input-color',
      },
      {
        title: 'component.inputSelect.name',
        to: '/component/input-select',
      },
      {
        title: 'component.inputSelectX.name',
        to: '/component/input-select-x',
      },
      {
        title: 'component.inputRadio.name',
        to: '/component/input-radio',
      },
      {
        title: 'component.inputDate.name',
        to: '/component/input-date',
      },
      {
        title: 'component.inputRange.name',
        to: '/component/input-range',
      },
      {
        title: 'component.inputCheckbox.name',
        to: '/component/input-checkbox',
      },
      {
        title: 'component.inputCheckboxTree.name',
        to: '/component/input-checkbox-tree',
      },
      {
        title: 'component.inputIcon.name',
        to: '/component/input-icon',
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
        title: 'component.tableCell.name',
        to: '/component/table-cell',
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
      {
        title: 'component.infiniteScroll.name',
        to: '/component/infinite-scroll',
      },
      {
        title: 'component.pagination.name',
        to: '/component/pagination',
      },
      {
        title: 'component.mediaQuery.name',
        to: '/component/media-query',
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
