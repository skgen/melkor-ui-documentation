<template>
  <div>
    <mk-wysiwyg-preview>
      <h1>{{ $t('component.heading.name') }}</h1>
    </mk-wysiwyg-preview>
    <mk-wysiwyg-preview>
      <h2>
        {{ $t('view.heading.h1') }}
      </h2>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-heading h1>
        Lorem ipsum dolor sit amet
      </mk-heading>
    </AppDemoBlock>
    <mk-wysiwyg-preview>
      <h2>
        {{ $t('view.heading.h2') }}
      </h2>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-heading h2>
        Lorem ipsum dolor sit amet
      </mk-heading>
    </AppDemoBlock>
    <mk-wysiwyg-preview>
      <h2>
        {{ $t('view.heading.h3') }}
      </h2>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-heading h3>
        Lorem ipsum dolor sit amet
      </mk-heading>
    </AppDemoBlock>
    <mk-wysiwyg-preview>
      <h2>
        {{ $t('view.heading.h4') }}
      </h2>
    </mk-wysiwyg-preview>
    <AppDemoBlock>
      <mk-heading h4>
        Lorem ipsum dolor sit amet
      </mk-heading>
    </AppDemoBlock>
  </div>
</template>

<script lang="ts" setup>

import AppDemoBlock from '@/components/AppDemoBlock.vue';

</script>
