<template>
  <AppChangelogVersion stable>
    v1.20.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <div>
    <AppChangelogCommit sha="5660400d9f4e0cd539ce3733e415f3f13e9419e6">
      <p>
        <mk-link to="/component/input-time">
          {{ $t('component.inputTime.name') }}
        </mk-link>
      </p>
    </AppChangelogCommit>
  </div>
  <h3>Enhancements</h3>
  <div>
    <AppChangelogCommit sha="00892ebac6bed3f74c986416d8273b8e5b41f94c">
      <p>
        Enhanced <mk-link to="/component/input-file">
          {{ $t('component.inputFile.name') }}
        </mk-link> with new props & slot
      </p>
    </AppChangelogCommit>
  </div>
  <div>
    <AppChangelogCommit sha="c93ad390099103e0a53b97e77e7be07c759f7897">
      <p>
        Enhanced <mk-link to="/component/link">
          {{ $t('component.link.name') }}
        </mk-link> active resolution strategy
      </p>
      <p>
        A new prop <code>matchStrategy</code> has been added
      </p>
    </AppChangelogCommit>
  </div>
  <h3>Minor</h3>
  <div>
    <AppChangelogCommit sha="53d7dcaac71c5092560923488e02eafa3710fa42">
      <p>
        Added a <code>CSS</code> variable on <mk-link to="/component/table">
          {{ $t('component.table.name') }}
        </mk-link>
      </p>
    </AppChangelogCommit>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogCommit from '@/components/AppChangelogCommit.vue';
</script>
