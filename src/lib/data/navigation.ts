import i18n from '@/plugins/i18n';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { t } = i18n.global;

export type NavigationLevel = {
  title: string;
  to?: string;
  children?: NavigationLevel[];
};

export const sidebar: NavigationLevel[] = [
  {
    title: t('app.setup'),
    children: [
      {
        title: t('app.translations'),
        to: '/translations',
      },
      {
        title: t('app.colors'),
        to: '/colors',
      },
    ],
  },
  {
    title: t('app.cta'),
    children: [
      {
        title: t('component.button.name'),
        to: '/component/button',
      },
      {
        title: t('component.link.name'),
        to: '/component/link',
      },
      {
        title: t('component.localeSelector.name'),
        to: '/component/locale-selector',
      },
      {
        title: t('component.themeSelector.name'),
        to: '/component/theme-selector',
      },
    ],
  },
  {
    title: t('app.dataInputs'),
    children: [
      {
        title: t('component.input-text.name'),
        to: '/component/input-text',
      },
      {
        title: t('component.input-number.name'),
        to: '/component/input-number',
      },
      {
        title: t('component.input-password.name'),
        to: '/component/input-password',
      },
      {
        title: t('component.input-textarea.name'),
        to: '/component/input-textarea',
      },
      {
        title: t('component.input-toggle.name'),
        to: '/component/input-toggle',
      },
      {
        title: t('component.input-file.name'),
        to: '/component/input-file',
      },
      {
        title: t('component.input-color.name'),
        to: '/component/input-color',
      },
      {
        title: t('component.input-select.name'),
        to: '/component/input-select',
      },
      {
        title: t('component.input-radio.name'),
        to: '/component/input-radio',
      },
      // {
      //   title: t('component.form.name'),
      //   to: '/component/form',
      // },
    ],
  },
  {
    title: t('app.typography'),
    children: [
      {
        title: t('component.heading.name'),
        to: '/component/heading',
      },
      {
        title: t('component.icon.name'),
        to: '/component/icon',
      },
      {
        title: t('component.wysiwygPreview.name'),
        to: '/component/wysiwyg-preview',
      },
    ],
  },
  {
    title: t('app.global'),
    children: [
      {
        title: t('component.alert.name'),
        to: '/component/alert',
      },
      {
        title: t('component.image.name'),
        to: '/component/image',
      },
      {
        title: t('component.table.name'),
        to: '/component/table',
      },
    ],
  },
  {
    title: t('app.layout'),
    children: [
      {
        title: t('app.modals'),
        to: '/component/modal',
      },
      {
        title: t('component.skeleton.name'),
        to: '/component/skeleton',
      },
      {
        title: t('component.tabs.name'),
        to: '/component/tabs',
      },
      {
        title: t('component.tooltip.name'),
        to: '/component/tooltip',
      },
    ],
  },
];
