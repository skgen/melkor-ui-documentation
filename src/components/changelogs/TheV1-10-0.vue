<template>
  <AppChangelogVersion stable>
    v1.10.0
  </AppChangelogVersion>
  <h3>New components</h3>
  <p>
    <mk-link to="/component/infinite-scroll">
      {{ $t('component.infiniteScroll.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/pagination">
      {{ $t('component.pagination.name') }}
    </mk-link>
  </p>
  <p>
    <mk-link to="/component/draggable">
      {{ $t('component.draggable.name') }}
    </mk-link>
  </p>
  <h3>Enhancements</h3>
  <p>
    Added global components options <mk-link to="/config/components-options">
      here
    </mk-link>
  </p>
  <div>
    <AppChangelogWarningChange>
      <p>
        Changed <mk-link to="/component/icon">
          {{ $t('component.icon.name') }}
        </mk-link> rendering logic
        <br>
        Icons now load <code>rounded</code> and <code>sharp</code> variants of <code>Material Symbols</code>
        <br>
        <code>rounded</code> is the default variant loaded
        <br>
        <code>outlined</code> variant is no longer packaged with {{ appName }}
      </p>
    </AppChangelogWarningChange>
  </div>
  <p>
    Enhanced <mk-link to="/component/table">
      {{ $t('component.table.name') }}
    </mk-link> with:
  </p>
  <p>
    <ul>
      <li>
        New prop <code>activeColumn</code>
      </li>
      <li>
        <mk-link to="/component/table#draggable-basic">
          Draggable feature
        </mk-link>
      </li>
    </ul>
  </p>
  <div>
    <AppChangelogBreakingChange>
      Changed <mk-link to="/component/table">
        {{ $t('component.table.name') }}
      </mk-link> display logic from <code>grid + contents</code> to classic <code>table</code> layout for compatibility & accessibility reasons
    </AppChangelogBreakingChange>
  </div>
  <p>
    Exported <code>SCSS</code> grey nuances from 0 to 100 based on brightness :
    <code>--c-grey-<span :style="{ color: 'var(--app-primary-color)' }">N</span></code>
  </p>
  <p>
    Updated material symbols icon versions <em>(more icons)</em>
  </p>
  <p>
    Improved <mk-link to="/component/alert">
      {{ $t('component.alert.name') }}
    </mk-link> css variables
  </p>
  <p>
    Improved <mk-link to="/component/button">
      {{ $t('component.button.name') }}
    </mk-link> css variables
  </p>
  <p>
    Improved <mk-link to="/component/table-cell">
      {{ $t('component.tableCell.name') }}
    </mk-link> css variables
  </p>
  <h3>Minor</h3>
  <div>
    <AppChangelogBreakingChange>
      <p>
        Changed <mk-link to="/component/table-cell">
          {{ $t('component.tableCell.name') }}
        </mk-link>  data-attribute from <code>data-filtered</code> to <code>data-is-filtered-x</code>
      </p>
    </AppChangelogBreakingChange>
  </div>
</template>

<script lang="ts" setup>
import AppChangelogVersion from '@/components/AppChangelogVersion.vue';
import AppChangelogBreakingChange from '@/components/AppChangelogBreakingChange.vue';
import AppChangelogWarningChange from '@/components/AppChangelogWarningChange.vue';

const appName = import.meta.env.VITE_APP_NAME;
</script>
