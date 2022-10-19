<template>
  <div class="pux-ColorsView">
    <AppDocLayout>
      <mk-wysiwyg-preview>
        <h1>{{ t('app.colors') }}</h1>
      </mk-wysiwyg-preview>
      <div
        ref="colorExample"
        class="pux-ColorsView-interactive"
      >
        <div class="pux-ColorsView-interactive-inputs">
          <mk-input-text
            v-model="nameInput.state"
            v-bind="nameInput.options"
          />
          <div class="pux-ColorsView-interactive-tones">
            <mk-input-text
              v-model="toneInput.state"
              v-bind="toneInput.options"
            />
            <mk-input-text
              v-model="toneNameInput.state"
              v-bind="toneNameInput.options"
            />
          </div>
          <mk-input-number
            v-model="lightInput.state"
            v-bind="lightInput.options"
          />
        </div>
        <div class="pux-ColorsView-interactive-preview">
          <AppColorPreview :color="nameInput.state.value" />
          <div class="pux-ColorsView-interactive-preview-code">
            <mk-wysiwyg-preview>
              <p>Raw</p>
            </mk-wysiwyg-preview>
            <AppCodeBlock
              :code="cssAttribute"
              :language="CodeLanguage.scss"
            />
            <mk-wysiwyg-preview>
              <p>Named</p>
            </mk-wysiwyg-preview>
            <AppCodeBlock
              :code="cssAttributeNamed"
              :language="CodeLanguage.scss"
            />
          </div>
        </div>
      </div>
      <AppColorPreview color="--c-white" />
      <AppColorPreview color="--c-black" />
      <!-- <AppColorPreview color="--c-red-60" />
      <AppColorPreview color="--c-white-100" />
      <AppColorPreview color="--c-black-100" /> -->
      <!-- <AppColorPreview /> -->
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import {
  computed, reactive, ref, watch,
} from 'vue';
import {
  isValue, type NumInputModel, type StrInputModel, createInputState,
} from '@patriarche/melkor';
import AppDocLayout from '@/components/layout/AppDocLayout.vue';
import AppColorPreview from '@/components/AppColorPreview.vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

const { t } = useI18n();

function map(value: number, fromStart: number, fromEnd: number, toStart: number, toEnd: number) {
  return toStart + (toEnd - toStart) * (value / (fromEnd - fromStart));
}

const colorExample = ref<HTMLElement | null>(null);

const toneInput = reactive<StrInputModel>({
  state: createInputState({ value: '257 90%' }),
  options: {
    name: 'tone',
    label: 'Tone',
  },
});

const toneNameInput = reactive<StrInputModel>({
  state: createInputState({ value: '--t-primary' }),
  options: {
    name: 'tone-name',
    label: 'Tone name',
  },
});

const nameInput = reactive<StrInputModel>({
  state: createInputState({ value: '--test-color' }),
  options: {
    name: 'name',
    label: 'Color name',
  },
});

const lightInput = reactive<NumInputModel>({
  state: createInputState({ value: 0 }),
  options: {
    name: 'light',
    label: 'Light',
    hint: '10 = 10% lighter',
    min: 0,
    max: 100,
  },
});

const light = computed(() => `${map(lightInput.state.value, 0, 100, 50, 100)}%`);

const cssAttribute = computed(() => `${nameInput.state.value}: ${toneInput.state.value} ${light.value};`);
const cssAttributeNamed = computed(() => `${nameInput.state.value}: var(${toneNameInput.state.value}) ${light.value};`);

watch(
  [colorExample, cssAttribute],
  ([el, attr]) => {
    if (!isValue(el)) {
      return;
    }
    el.setAttribute('style', attr);
  },
);

</script>

<style lang="scss">
.pux-ColorsView {
    flex: 1;
    padding: 30px 50px;

    &-interactive {
        padding: var(--app-m-3) var(--app-m-4);
        margin: var(--app-m-2) 0;
        background-color: var(--app-background-color);
        border: 3px dashed var(--app-border-color);
        border-radius: 8px;

        &-inputs,
        &-preview,
        &-tones, {
            display: flex;
            gap: var(--app-m-2);
        }

        &-preview {
            align-items: center;

            &-code {
                display: flex;
                flex-direction: column;
                gap: var(--app-m-1);
            }
        }

        &-tones {
            flex-direction: column;
        }
    }

    // --t-primary: 205 97%;

    --test-primary-color: var(--t-primary) v-bind(light);

    // --test-primary-color-50: var(--t-primary) 75%;
    // --test-primary-color-87: var(--t-primary) 56.5%;

    // 50 + 50 * 100-87

    // 50 + (100 - 50) / 2
    // 50 + (100 - 87) / 2

    // --test-c-white: 255 255 255;
    // --test-black: 24 24 24;

    // //
    // --red-tone-color: 353;
    // --blue-tone-color: 353;
    // --green-tone-color: 353;
    // --orange-tone-color: 353;
    // --t-primary: 205 97%;

    // //
    // --c-white-100: 0 0% 100%;
    // --c-black-100: 0 0% 0%;

    // //
    // --c-red-100: var(--red-tone-color) 100% 50%;
    // --c-red-60: var(--red-tone-color) 60% 50%;
    // --test-c-blue: 59 142 237;
    // --test-c-green: 45 190 42;
    // --test-c-orange: 255 197 23;
}
</style>
