import type { InjectionKey, Ref } from 'vue';

export type NavigationLevel = {
  title: string;
  to?: string;
  children?: NavigationLevel[];
};

export type AsideNavigationContext = {
  navigation: Ref<NavigationLevel[]>;
  setNavigation: (newNavigation: NavigationLevel[]) => void;
  resetNavigation: () => void;
};

export const asideNavigationContextKey = Symbol('asideNavigationContextKey') as InjectionKey<AsideNavigationContext>;
