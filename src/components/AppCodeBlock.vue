<template>
  <div
    v-theme="{ theme: Theme.dark }"
    class="pux-AppCodeBlock"
    :data-language="mapping[props.language].lang"
    :data-copied="!!copied || undefined"
    :data-expanded="expanded || props.fullSize || undefined"
    :data-filename="!isEmpty(props.filename) || undefined"
  >
    <div
      v-if="props.filename"
      class="pux-AppCodeBlock-filename"
    >
      {{ props.filename }}
    </div>
    <span class="pux-AppCodeBlock-language">
      {{ mapping[props.language].lang }}
    </span>
    <button
      class="pux-AppCodeBlock-cta pux-AppCodeBlock-copy"
      @click="handleCopy"
    >
      <mk-icon icon="content_copy" />
      <span class="pux-AppCodeBlock-cta-text">Copied</span>
    </button>
    <button
      v-if="canExpand"
      class="pux-AppCodeBlock-cta pux-AppCodeBlock-expand"
      @click="handleExpand"
    >
      <mk-icon :icon="expanded ? 'remove' : 'add'" />
    </button>
    <div
      class="pux-AppCodeBlock-editor"
    >
      <PrismEditor
        ref="editor"
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
import 'prismjs/components/prism-bash';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import { copyToClipboard, Theme, isEmpty } from '@patriarche/melkor';
import Handlebars from 'handlebars';
import { useElementSize } from '@vueuse/core';
import { CodeLanguage } from '@/lib/definition';

type Props = {
  code: string;
  language?: CodeLanguage;
  variables?: Record<string, unknown>;
  fullSize?: boolean;
  filename?: string;
};

const props = withDefaults(defineProps<Props>(), {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  language: CodeLanguage.typescript,
  variables: undefined,
  filename: undefined,
});

const mapping:
{ [key in CodeLanguage]: { lang:string; prism: string } } = {
  typescript: {
    lang: 'ts',
    prism: 'typescript',
  },
  json: {
    lang: 'json',
    prism: 'json',
  },
  template: {
    lang: 'template',
    prism: 'html',
  },
  vue: {
    lang: 'vue',
    prism: 'html',
  },
  scss: {
    lang: 'scss',
    prism: 'scss',
  },
  bash: {
    lang: 'bash',
    prism: 'bash',
  },
};

const maxHeightNum = 400;
const maxHeight = computed(() => `${maxHeightNum}px`);

const editor = ref<HTMLElement | null>(null);
const { height } = useElementSize(editor);
const canExpand = computed(() => !props.fullSize && height.value > maxHeightNum);

const code = computed(() => {
  if (!props.variables) {
    return props.code;
  }

  const hbsTemplate = Handlebars.compile(props.code);
  const newCode = hbsTemplate(props.variables);

  return newCode.trim();
});

const copied = ref<ReturnType<typeof setTimeout> | null>(null);
const expanded = ref(false);

function handleHighlight(codeToHighlight: string) {
  return highlight(codeToHighlight, languages[mapping[props.language].prism], mapping[props.language].prism);
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

function handleExpand() {
  expanded.value = !expanded.value;
}
</script>

<style lang="scss">
.pux-AppCodeBlock {
    $this: &;

    position: relative;
    min-height: 48px;
    overflow: hidden;
    color: var(--c-grey-80);

    &-filename {
        position: absolute;
        padding: calc(var(--app-m-1) / 2) var(--app-m-1);
        font-size: 13px;
        font-weight: 700;
        background: var(--c-grey-20);
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    &-language {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 12px;
        transition: opacity 128ms;
    }

    &-cta {
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

    &-copy {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 1;
    }

    &-expand {
        position: absolute;
        top: 48px;
        right: 4px;
        z-index: 1;
    }

    &-editor {
        max-height: v-bind(maxHeight);
        padding: var(--app-m-2) var(--app-m-6) var(--app-m-2) var(--app-m-3);
        overflow: auto;

        // Meslo vs Source Code based on current emotions
        font-family: "MesloLGS NF", "Source Code Pro", monospace;
        font-size: 14px;
        line-height: 1.5;
        background: var(--c-grey-12);
        border-radius: 8px;

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

            &-copy,
            &-expand {
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

                .pux-AppCodeBlock-cta-text {
                    opacity: 1;
                }
            }
        }
    }

    &[data-expanded="true"] {
        .pux-AppCodeBlock {
            &-editor {
                max-height: none;
            }
        }
    }

    &[data-filename="true"] {
        #{$this} {
            &-editor {
                padding-top: var(--app-m-5);
            }
        }
    }
}
</style>
