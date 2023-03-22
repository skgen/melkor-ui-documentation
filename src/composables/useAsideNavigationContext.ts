import { inject } from 'vue';
import { isValue } from '@patriarche/melkor';
import { asideNavigationContextKey } from '@/features/navigation';

export default () => {
  const context = inject(asideNavigationContextKey);
  if (!isValue(context)) {
    throw new Error('useAsideNavigationContext must be called inside an <AppAsideNavigationContextProvider />');
  }

  return context;
};
