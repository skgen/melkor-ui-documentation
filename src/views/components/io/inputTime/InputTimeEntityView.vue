<template>
  <section>
    <h2>
      <code>Time</code>
      model
    </h2>
    <p>A <code>Date</code> model exists to manipulate dates, but no such things stands for time.</p>
    <p><code>{{ appName }}</code> introduces a <code>Time</code> model that intends to mimic <code>Date</code> behavior.</p>
    <p>
      <strong>String format :</strong> <code>HH:mm:ss.SSS</code> based on
      <mk-link
        to="https://date-fns.org/docs/format"
        target="_blank"
      >
        date-fns
      </mk-link> format
    </p>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-time/time-model.ts.hbs"
        full-size
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';

const appName = import.meta.env.VITE_APP_NAME;

</script>
