<template>
  <section>
    <h2>
      Focus on advanced error handling
    </h2>
    <p>
      If you want to generate a computed error on any tree level or the input itself,
      based on the global state, you can do it with a simple watcher on the global state.
      <br>
      It is achieved in 4 steps here:
    </p>
    <p>
      <ol>
        <li>Find the level you want to target the children with <code>findCheckboxTreeLevel</code></li>
        <li>Count how many children are actually checked with <code>countCheckedCheckboxTreeLevels</code></li>
        <li>Revalidate the state of the level you want to put the computed error on with <code>validateInputState</code></li>
        <li><strong>Revalidate the state of the input</strong> with <code>validateInputState</code></li>
      </ol>
    </p>
    <blockquote>
      Don't forget to validate the input state with <code>validateInputState</code>
      because it also calculates other state properties, like <code>valid</code> property for example
    </blockquote>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-checkbox-tree/advanced/errors.hbs"
        :language="CodeLanguage.typescript"
        :variables="{
          minCount,
          errors: {
            global: $t('view.inputCheckboxTree.errors.global'),
            maiar: $t('view.inputCheckboxTree.errors.maiar'),
          }
        }"
      />
    </div>
    <div>
      <mk-alert warning>
        Don't mix a basic & an advanced error handling on the same tree level or the input,
        it would result in an override of the basic error handling by the advanced one (as the watcher is always called last)
      </mk-alert>
    </div>
    <div>
      <mk-alert warning>
        If you use advanced error handling on any tree level, use advanced error handling on input too,
        it would otherwise end up in an out of sync error state on input.
      </mk-alert>
    </div>
    <p>
      Example of an out of sync sequence with input basic error handling instead of advanced one:
    </p>
    <p>
      <ol>
        <li><code>maiar</code> validation with basic error handling throught its validate option (detects an error)</li>
        <li><code>input</code> validation with basic error handling throught its validate option (detects an error because of step 1)</li>
        <li>
          <code>maiar</code> validation with advanced error handling through the watcher
          (detects no error because of different test than step 1 and doesn't pick up old error)
        </li>
        <li>
          <code>input</code> state error is still on step 2 and out of sync
          <br>
          <code>input</code> has an error even tho none of the tree level has anymore.
          <br>
          <code>input</code> is <em>out of sync</em> with tree levels
        </li>
      </ol>
    </p>
    <blockquote>
      The out of sync example above doesn't mean that it's impossible/bad to handle the error exclusively on the <code>input</code>.
      <br>
      To handle it exclusively on the <code>input</code>, you can use both basic or advanced error handling.
    </blockquote>
    <div>
      <mk-alert info>
        <p>
          Two things to notice here:
        </p>
        <ul>
          <li>We compare previous and new state values to prevent infinite loop as we potentially update part of the state in the watcher.</li>
          <li>We spread the new state and reassign it at the end of the watcher to avoid triggering unnecessary watcher callbacks.</li>
        </ul>
      </mk-alert>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/io/input-checkbox-tree/advanced/warning.hbs"
        :language="CodeLanguage.typescript"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  CodeLanguage,
} from '@/lib/definition';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';

const minCount = 3;
</script>
