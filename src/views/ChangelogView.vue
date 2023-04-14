<template>
  <div class="pux-ChangelogView">
    <AppDocLayout>
      <div>
        <div class="pux-ChangelogView-title">
          <AppPageTitle>
            {{ $t('view.changelog.title') }}
          </AppPageTitle>
          <div class="pux-ChangelogView-legend">
            <span data-success>
              <mk-icon icon="task_alt" /> Stable version
            </span>
            <span data-error>
              <mk-icon
                icon="error"
                fill
              /> Breaking change
            </span>
            <span data-warning>
              <mk-icon
                icon="warning"
                fill
              /> Warning change
            </span>
          </div>
        </div>
        <mk-wysiwyg-preview>
          <section
            v-for="(version, index) in versionsComponents"
            :key="index"
          >
            <component :is="version" />
          </section>
        </mk-wysiwyg-preview>
      </div>
    </AppDocLayout>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppDocLayout from '@/components/layouts/AppDocLayout.vue';

const versions = [
  '1.14.0',
  '1.13.1',
  '1.13.0',
  '1.12.0',
  '1.11.0',
  '1.10.0',
  '1.9.1',
  '1.9.0',
  '1.8.1',
  '1.8.0',
  '1.7.4',
  '1.7.3',
  '1.7.2',
  '1.7.1',
  '1.7.0',
  '1.6.0',
  '1.5.0',
  '1.4.1',
  '1.4.0',
  '1.3.0',
  '1.2.1',
  '1.2.0',
  '1.1.0',
  '1.0.0',
  '0.10.0',
  '0.9.4',
  '0.9.3',
  '0.9.2',
  '0.9.1',
  '0.9.0',
  '0.8.0',
];

const versionsComponents = versions.map((v) => defineAsyncComponent(() => import(`@/components/changelogs/TheV${v}.vue`)));
</script>

<style lang="scss">
.pux-ChangelogView {
    h2 {
        .mk-AppIcon {
            color: var(--app-success-color);
            transform: translate(0, 0.15em);
        }
    }

    &-legend {
        display: inline-flex;
        gap: var(--app-m-2);
        margin-left: var(--app-m-5);
        font-size: 20px;

        span {
            display: flex;
            gap: var(--app-m-1);
            align-items: baseline;

            .mk-AppIcon {
                line-height: 1;
                transform: translate(0, 25%);

                --mk-icon-size: 30px;
            }

            &[data-success] {
                .mk-AppIcon {
                    --mk-icon-color: var(--app-success-color);
                }
            }

            &[data-error] {
                .mk-AppIcon {
                    --mk-icon-color: var(--app-error-color);
                }
            }

            &[data-warning] {
                .mk-AppIcon {
                    --mk-icon-color: var(--app-warning-color);
                }
            }
        }
    }

    &-title {
        display: flex;
        align-items: baseline;

        h1 {
            display: inline-block;
        }
    }
}
</style>
