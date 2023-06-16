<template>
  <AppChangelogVersion>
    v1.19.0
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogBreakingChange>
      <AppChangelogCommit sha="a4484b9ebf4a9241544573889e433b4dd118db2f">
        <p>
          Normalized <mk-link to="/component/input-select">
            {{ $t('component.inputSelect.name') }}
          </mk-link> <code>options</code> prop
        </p>
        <blockquote>
          <p>
            <code>options</code> prop was formerly composed of an array of objects, each containing a <code>label</code> attribute,
            this attribute has been removed in favor of a slot called <code>option</code> to render a custom string
          </p>
          <p>
            If you were passing an <code>Object</code> in the <code>value</code> of each option, you might see <code>[Object Object]</code>
            in your select value & options.
            This results of default option render now being based on <code>value</code> of each option, and not <code>label</code> anymore
          </p>
        </blockquote>
      </AppChangelogCommit>
    </AppChangelogBreakingChange>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
</script>
