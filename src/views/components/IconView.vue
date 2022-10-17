<template>
  <div class="mk-IconView">
    <mk-wysiwyg-preview>
      <h1>{{ t('component.icon.name') }}</h1>
      <blockquote>
        <i18n-t
          keypath="view.icon.description"
          scope="global"
        >
          <template #sourceName>
            <code><strong>{{ t('view.icon.sourceName') }}</strong></code>
          </template>
          <template #url>
            <a
              :href="iconPath"
              target="_blank"
            >{{ iconPath }}</a>
          </template>
        </i18n-t>
      </blockquote>
      <h2>{{ t('view.icon.default') }}</h2>
    </mk-wysiwyg-preview>

    <mk-wysiwyg-preview>
      <p>{{ t('view.icon.simpleLabel') }}</p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/label.txt"
      :language="CodeLanguage.vue"
      :variables="{ label: 'Headphones recommended' }"
    />
    <AppDemoBlock>
      <span class="mk-IconView-label">
        <mk-icon icon="headphones" /> Headphones recommended
      </span>
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <p>{{ t('view.icon.withButton') }}</p>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/button.txt"
      :language="CodeLanguage.vue"
      :variables="{ label: 'Save to disk' }"
    />
    <AppDemoBlock>
      <mk-button>
        <mk-icon icon="save" /> Save to disk
      </mk-button>
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <h2>
        {{ t("view.icon.sized", { size: '30px' }) }}
      </h2>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/30px.txt"
      :language="CodeLanguage.scss"
    />

    <AppDemoBlock>
      <span
        class="mk-IconView-label"
        data-size="30"
      >
        <mk-icon icon="desktop_windows" />
      </span>
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <h2>
        {{ t("view.icon.sized", { size: '50px' }) }}
      </h2>
    </mk-wysiwyg-preview>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/50px.txt"
      :language="CodeLanguage.scss"
    />

    <AppDemoBlock>
      <span
        class="mk-IconView-label"
        data-size="50"
      >
        <mk-icon icon="desktop_windows" />
      </span>
    </AppDemoBlock>

    <mk-wysiwyg-preview>
      <h2>
        {{ t("view.icon.dynamic") }}
      </h2>
    </mk-wysiwyg-preview>
    <div class="mk-IconView-binding">
      <mk-input-number
        v-model="size"
      />
    </div>
    <AppAsyncCodeBlock
      file-path="/code/view/component/icon/dynamicPx.txt"
      :language="CodeLanguage.scss"
      :variables="{ value: size.value }"
    />
    <AppDemoBlock>
      <span
        class="mk-IconView-label"
        data-size="dynamic"
      >
        <mk-icon icon="desktop_windows" />
      </span>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { createInputState } from '@patriarche/melkor';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import { CodeLanguage } from '@/components/AppCodeBlock.vue';

const { t } = useI18n();

const iconPath = 'https://fonts.google.com/icons';

const size = ref(createInputState({ value: 30 }));

// const numberInput = reactive<NumInputModel>({
//   state: ,
//   options: {
//     name: 'number-demo',
//     validate: validateNumberInput,
//   },
// });

const sizeInPx = computed(() => `${size.value.value}px`);
</script>

<style lang="scss">
.mk-IconView {
    --icon-view-dynamic-size: v-bind(sizeInPx);

    &-binding {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    &-label {
        display: inline-flex;
        gap: 8px;
        align-items: center;

        &[data-size="30"] {
            --mk-icon-size: 30px;
        }

        &[data-size="50"] {
            --mk-icon-size: 50px;
        }

        &[data-size="dynamic"] {
            --mk-icon-size: var(--icon-view-dynamic-size);
        }
    }
}
</style>
