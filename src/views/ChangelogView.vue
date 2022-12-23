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
            v-for="(version, index) in versions"
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
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppDocLayout from '@/components/layouts/AppDocLayout.vue';
import V0_8_0 from '@/components/changelogs/TheV0-8-0.vue';
import V0_9_0 from '@/components/changelogs/TheV0-9-0.vue';
import V0_9_1 from '@/components/changelogs/TheV0-9-1.vue';
import V0_9_2 from '@/components/changelogs/TheV0-9-2.vue';
import V0_9_3 from '@/components/changelogs/TheV0-9-3.vue';
import V0_9_4 from '@/components/changelogs/TheV0-9-4.vue';
import V0_10_0 from '@/components/changelogs/TheV0-10-0.vue';
import V1_0_0 from '@/components/changelogs/TheV1-0-0.vue';

const versions = [
  V1_0_0,
  V0_10_0,
  V0_9_4,
  V0_9_3,
  V0_9_2,
  V0_9_1,
  V0_9_0,
  V0_8_0,
];
</script>

<style lang="scss">
.pux-ChangelogView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);

    h2,
    p {
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
