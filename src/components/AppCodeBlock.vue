<template>
  <div
    v-theme="{ scheme: ThemeScheme.dark }"
    class="pux-AppCodeBlock"
    :data-language="mapping[props.language].lang"
    :data-copied="!!copied || undefined"
  >
    <span class="pux-AppCodeBlock-language">
      {{ mapping[props.language].lang }}
    </span>
    <button
      class="pux-AppCodeBlock-copy"
      @click="handleCopy"
    >
      <mk-icon icon="content_copy" />
      <span class="pux-AppCodeBlock-copy-text">Copied</span>
    </button>
    <div class="pux-AppCodeBlock-editor">
      <PrismEditor
        v-model="code"
        :highlight="handleHighlight"
        readonly
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs';
import 'vue-prism-editor/dist/prismeditor.min.css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import { copyToClipboard, isValue, ThemeScheme } from '@patriarche/melkor';

type Props = {
  code: string;
  language?: CodeLanguage;
  variables?: Record<string, string | number | boolean>;
};

const props = withDefaults(defineProps<Props>(), {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  language: CodeLanguage.typescript,
  variables: undefined,
});

const code = computed(() => {
  if (!props.variables) {
    return props.code;
  }

  let newCode = props.code;
  const keys = Object.keys(props.variables);
  for (const key of keys) {
    if (isValue(props.variables[key])) {
      const search = `{${key}}`;
      const replace = props.variables[key].toString();
      newCode = newCode.replaceAll(search, replace);
    }
  }

  return newCode;
});

const copied = ref<ReturnType<typeof setTimeout> | null>(null);

function handleHighlight(code: string) {
  return highlight(code, languages[mapping[props.language].prisma], mapping[props.language].prisma);
}

function handleCopy() {
  copyToClipboard(code.value);
  if (copied.value) {
    clearTimeout(copied.value);
  }
  copied.value = setTimeout(() => {
    copied.value = null;
  }, 2000);
}
</script>

<script lang="ts">
// eslint-disable-next-line import/prefer-default-export
export enum CodeLanguage {
  typescript = 'typescript',
  json = 'json',
  template = 'template',
  vue = 'vue',
  scss = 'scss',
}

export const mapping:
{ [key in CodeLanguage]: { lang:string; prisma: string } } = {
  typescript: {
    lang: 'ts',
    prisma: 'typescript',
  },
  json: {
    lang: 'json',
    prisma: 'json',
  },
  template: {
    lang: 'template',
    prisma: 'html',
  },
  vue: {
    lang: 'vue',
    prisma: 'html',
  },
  scss: {
    lang: 'scss',
    prisma: 'scss',
  },
};
</script>

<style lang="scss">
.pux-AppCodeBlock {
    position: relative;
    min-height: 48px;
    overflow: hidden;
    border-radius: 8px;

    &-language {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 12px;
        transition: opacity 128ms;
    }

    &-copy {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 1;
        width: 40px;
        height: 40px;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 128ms, background-color 128ms;

        .mk-AppIcon {
            --mk-icon-size: 20px;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &:hover {
            background-color: var(--app-background-color-soft);
        }

        &-text {
            position: absolute;
            top: 0;
            right: 41px;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 10px;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
            pointer-events: none;
            background-color: inherit;
            border-radius: 4px 0 0 4px;
            opacity: 0;
            transition: opacity 128ms;
        }
    }

    &-editor {
        padding: var(--app-m-2) var(--app-m-6) var(--app-m-2) var(--app-m-3);

        /* you must provide font-family font-size line-height. Example: */
        font-family: "Fira code", "Fira Mono", Consolas, Menlo, Courier, monospace;
        font-size: 14px;
        line-height: 1.5;
        color: #ccc;
        background: #2d2d2d;

        /* optional class for removing the outline */
        textarea:focus {
            outline: none;
        }
    }

    &:hover {
        .pux-AppCodeBlock {
            &-language {
                opacity: 0;
            }

            &-copy {
                opacity: 1;
            }
        }
    }

    &[data-copied="true"] {
        .pux-AppCodeBlock {
            &-language {
                opacity: 0;
            }

            &-copy {
                background-color: var(--app-background-color-soft);
                border-radius: 0 4px 4px 0;
                opacity: 1;

                &-text {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
