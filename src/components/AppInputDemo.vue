<template>
  <mk-wysiwyg-preview>
    <h3>
      <i18n-t
        keypath="view.input.inputType"
        scope="global"
      >
        <template #inputType>
          <code>{{ t(`view.input.component.${props.i18nKey}`) }}</code>
        </template>
      </i18n-t>
    </h3>
    <p v-if="slots['sub-header']">
      <slot name="sub-header" />
    </p>
  </mk-wysiwyg-preview>
  <template v-if="props.example">
    <mk-tabs v-model="codeIndex">
      <mk-tab value="code">
        Code example
      </mk-tab>
    </mk-tabs>
    <mk-layers v-model="codeIndex">
      <mk-layer value="code">
        <AppAsyncCodeBlock
          :file-path="props.example"
          :language="CodeLanguage.vue"
        />
      </mk-layer>
    </mk-layers>
  </template>
  <AppCodeBlock
    :language="CodeLanguage.json"
    :code="JSON.stringify(props.input.state.value, null, 2)"
  />
  <AppDemoBlock>
    <slot name="input" />
  </AppDemoBlock>
</template>

<script lang="ts" setup>
import { ref, useSlots } from 'vue';
import { useI18n } from 'vue-i18n';
import type { InputModel } from '@patriarche/melkor';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';

type Props = {
  i18nKey: string;
  input: InputModel<any>;
  example?: string;
};

const props = defineProps<Props>();

const { t } = useI18n();

const slots = useSlots();

const codeIndex = ref(null);
</script>

<style lang="scss">
.pux-AppInputDemo {
    // &-code {
    //     display: flex;
    //     gap: 16px;
    // }
}
</style>
