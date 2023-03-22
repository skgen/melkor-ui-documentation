<template>
  <div class="pux-AppVirtualComponentDoc">
    <mk-alert info>
      <mk-wysiwyg-preview>
        <slot />
        <template v-if="$slots['component']">
          # <code><em><slot name="component" /></em></code>
        </template>
      </mk-wysiwyg-preview>
      <template #content>
        This component is not meant to be instanciated manually
        <br>
        You can still customize its global style according to this documentation
        <br>
        Props playground help toggling some CSS contextual styles
      </template>
    </mk-alert>
  </div>
</template>
