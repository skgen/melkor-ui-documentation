<template>
  <div class="pux-ChangelogView">
    <AppDocLayout>
      <div>
        <AppPageTitle>
          {{ $t('view.changelog.title') }}
        </AppPageTitle>
        <V0_9_1 />
        <V0_9_0 />
        <V0_8_0 />
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
</script>

<style lang="scss">
.pux-ChangelogView {
    flex: 1;
    padding: var(--app-m-5) var(--app-m-8);
}
</style>
