<template>
  <AppChangelogVersion stable>
    v1.25.1
  </AppChangelogVersion>
  <h3>Enhancements</h3>
  <AppChangelogBreakingChange>
    <AppChangelogCommit sha="322a26773de38476e74a32e5ec3269b25eb6dc50">
      <p>
        Updated slots of <mk-link to="/component/input-select-x">
          {{ $t('component.inputSelectX.name') }}
        </mk-link>
      </p>
      <p>
        <ul>
          <li>[+] <code>options</code> (wraps the <code>AppMenuGroup</code>)</li>
          <li>[rename] <code>options-empty</code> => <code>options-empty-label</code> (wraps the string)</li>
          <li>[+] <code>options-empty</code> (wraps the <code>AppMenuEntry</code> when no options)</li>
          <li>[+] <code>options-list</code> (wraps the list of options when options)</li>
        </ul>
      </p>
    </AppChangelogCommit>
  </AppChangelogBreakingChange>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="f218887e756e40ef14d5334cd25644ef8c84630e">
      <p>
        Fixed an issue on <code>AppInputHint</code> where line-break didnt work correctly
      </p>
    </AppChangelogCommit>
  </div>
  <div>
    <AppChangelogCommit :sha="['c182fffb0b948e8ae9325f9fee6b131a351891f2', '7bd8705aad5f08766618980460e47dc7c6a7935e']">
      <p>
        Fixed overall input heights
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
// import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

// const appName = import.meta.env.VITE_APP_NAME;
</script>
