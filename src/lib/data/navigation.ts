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
    title: t('app.components'),
    children: [
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
            title: t('app.inputs'),
            to: '/component/inputs',
          },
          {
            title: t('component.form.name'),
            to: '/component/form',
          },
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
          {
            title: t('app.colors'),
            to: '/colors',
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
    ],
  },

];
