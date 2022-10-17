<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ t('component.alert.name') }}</h1>
    </mk-wysiwyg-preview>

    <AppDemoBlock>
      <mk-alert>
        This is a basic alert — check it out!
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert error>
        This is an error alert — check it out!
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert warning>
        This is a warning alert — check it out!
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert info>
        This is an info alert — check it out!
      </mk-alert>
    </AppDemoBlock>

    <AppDemoBlock>
      <mk-alert success>
        This is a success alert — check it out!
      </mk-alert>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import AppDemoBlock from '@/components/AppDemoBlock.vue';

const { t } = useI18n();

</script>
