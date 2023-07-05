<template>
  <section>
    <h2>Page Infinite scroll</h2>
    <h3>The logic</h3>
    <p>
      This example demonstrates an infinite scroll with a page range from <code>0</code> to <code>5</code>.
    </p>
    <p>
      We are using a <mk-link
        :to="customHookUrl"
        underline
        target="_blank"
      >
        custom hook
      </mk-link> called <code>useMockList</code> to mock the behavior of a paged list.
    </p>
    <blockquote>
      Page infinite scroll works with both <code>top</code> & <code>bottom</code> props active, counter to many implementations on the web.
    </blockquote>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/infinite-scroll/window-example/example.vue.hbs"
        :variables="{
          list: '<!-- List render -->'
        }"
        :language="CodeLanguage.vue"
      />
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/infinite-scroll/window-example/example.ts.hbs"
        :variables="{
          comment: `/**
* useMockList is not part of ${appName},
* you can check this custom hook with the link above
*/`
        }"
        :language="CodeLanguage.typescript"
      />
    </div>
    <h3>Render</h3>
    <div>
      <div class="pux-InfiniteScrollWindowExample-list">
        <div class="pux-InfiniteScrollWindowExample-list-tracker">
          <span>Pages</span>
          <div>[{{ range[0] }}, {{ range[1] }}]</div>
        </div>
        <AppDemoBlock>
          <mk-infinite-scroll
            :bottom="canAppend"
            @infinite="handleInfinite"
          >
            <AppGridList :list="list">
              <template #item="{ item }">
                {{ item }}
              </template>
            </AppGridList>
          </mk-infinite-scroll>
          <template v-if="!canAppend">
            <div class="pux-InfiniteScrollWindowExample-reachedEnd">
              Reached last page <mk-icon icon="done" />
            </div>
          </template>
          <transition name="fade">
            <div
              v-if="loading"
              class="pux-InfiniteScrollWindowExample-loader"
            >
              <AppSpinner />
            </div>
          </transition>
        </AppDemoBlock>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VerticalDirection } from '@patriarche/melkor';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppGridList from '@/components/AppGridList.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import useMockList from '@/composables/useMockList';
import { CodeLanguage } from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';

const {
  list, loading, append, range, canAppend,
} = useMockList({
  pageMax: 5,
});

function handleInfinite(direction: VerticalDirection) {
  if (direction === VerticalDirection.bottom) {
    append();
  }
}

const customHookUrl = `${import.meta.env.VITE_APP_GIT_REPO_URL}/blob/main/src/composables/useMockList.ts`;
const appName = import.meta.env.VITE_APP_NAME;
</script>

<style lang="scss">
.pux-InfiniteScrollWindowExample {
    &-loader {
        position: fixed;
        right: var(--app-m-3);
        bottom: var(--app-m-3);
        padding: var(--app-m-2);
        background-color: var(--app-primary-color);
        border-radius: 50%;

        .pux-AppSpinner {
            --pux-spinner-color: var(--app-text-color-on-primary);
        }
    }

    &-list {
        position: relative;
        display: flex;
        gap: var(--app-m-3);

        &-tracker {
            position: sticky;
            top: 50%;
            display: flex;
            flex-direction: column;
            height: 100%;
            font-size: 30px;
            text-align: center;

            span {
                color: var(--app-text-color-soft);
            }
        }

        .pux-AppDemoBlock {
            flex: 0 1 100%;
        }
    }

    &-reachedEnd {
        display: flex;
        gap: var(--app-m-1);
        align-items: center;
        justify-content: center;
        margin-top: var(--app-m-3);
        font-size: 20px;
        text-align: center;

        .mk-AppIcon {
            font-size: 1.2em;
        }
    }
}
</style>
