<template>
  <section class="pux-TableCustomSlotsExample">
    <h2>Custom header/cell templates</h2>

    <h3>The logic</h3>
    <p>
      To customize the render of a column cells, create a slot named after the <code>key</code> of that column.
    </p>
    <blockquote>
      <p>To customize <code>name</code> column cells, create</p>
      <p>
        <AppCodeBlock
          code="<template #name />"
          :language="CodeLanguage.vue"
        />
      </p>
    </blockquote>
    <p>
      To customize the render of a column header cell, create a slot named after the <code>key</code>
      of that column too preceded by <code>header-</code>.
    </p>
    <blockquote>
      <p>
        To customize <code>name</code> column header cell, create
      </p>
      <p>
        <AppCodeBlock
          code="<template #header-name />"
          :language="CodeLanguage.vue"
        />
      </p>
    </blockquote>

    <h4>Following examples are based upon this data definition:</h4>
    <AppAsyncCodeBlock file-path="/code/view/components/table/custom-slots/script.ts.hbs" />

    <h3>What do these slots expose ?</h3>
    <h4>The <code>#header-<em>key</em></code> slot</h4>
    <p>
      <AppCodeBlock
        code="<template #header-key={ value, entry, pos } />"
        :language="CodeLanguage.vue"
      />
    </p>
    <blockquote>
      We assume the <em>key</em> used is <code>name</code>
    </blockquote>
    <p>
      <ul>
        <li>
          <p>
            <code>value</code> = The value of type <code>T</code> assigned to <code>value</code> attribute of the headers entry.
            <br>
            <em><strong>e.g.: </strong><code>Hero name</code></em>
          </p>
        </li>
        <li>
          <p>
            <code>entry</code> = The object representing the header entry.
            <br>
            <em><strong>e.g.: </strong><code>{ value: 'Hero name', key: 'name' }</code></em>
          </p>
        </li>
        <li>
          <p>
            <code>pos</code> = The object representing the header entry pos.
            <br>
            <em><strong>e.g.: </strong><code>{ x: 0, y: -1, key: 'name' }</code></em>
          </p>
        </li>
      </ul>
    </p>
    <h4>The <code>#<em>key</em></code> slot</h4>
    <p>
      <AppCodeBlock
        code="<template #key={ value, entry, pos  } />"
        :language="CodeLanguage.vue"
      />
    </p>
    <blockquote>
      We assume the <em>key</em> used is <code>race</code>
    </blockquote>
    <p>
      <ul>
        <li>
          <p>
            <code>value</code> = The value of type <code>T</code> assigned to the matching key of the items entry.
            <br>
            <em><strong>e.g.: </strong><code>Ainur</code></em>
          </p>
        </li>
        <li>
          <p>
            <code>entry</code> = The object representing the entry.
            <br>
            <em><strong>e.g.: </strong><code>{ name: 'Melkor', race: 'Ainur', maxAge: Infinity }</code></em>
          </p>
        </li>
        <li>
          <p>
            <code>pos</code> = The object representing the entry pos.
            <br>
            <em><strong>e.g.: </strong><code>{ x: 1, y: 0, key: 'race' }</code></em>
          </p>
        </li>
      </ul>
    </p>

    <h3>Static render</h3>
    <div>
      <AppDemoBlock>
        <mk-table
          :headers="headers"
          :items="items"
        >
          <template #header-name="{ value, entry, pos }">
            <mk-wysiwyg-preview>
              <h3><code>#header-name</code> / {{ value }}</h3>
              <p>
                <pre><em>pos.x</em> : {{ pos.x }}</pre>
              </p>
              <p>
                <pre><em>pos.y</em> : {{ pos.y }}</pre>
              </p>
              <p>
                <pre><em>pos.key</em> : {{ pos.key }}</pre>
              </p>
              <p>
                <pre>{{ entry }}</pre>
              </p>
            </mk-wysiwyg-preview>
          </template>
          <template #race="{ value, entry, pos }">
            <mk-wysiwyg-preview>
              <h3><code>#race</code> / {{ value }}</h3>
              <p><code>pos.x</code> : {{ pos.x }}</p>
              <p><code>pos.y</code> : {{ pos.y }}</p>
              <p><code>pos.key</code> : {{ pos.key }}</p>
              <p>
                <pre>{{ entry }}</pre>
              </p>
            </mk-wysiwyg-preview>
          </template>
        </mk-table>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/table/custom-slots/static.vue.hbs"
        :language="CodeLanguage.vue"
      />
    </div>
    <h3>Dynamic render</h3>
    <div>
      <AppDemoBlock>
        <mk-table
          :headers="headers"
          :items="items"
        >
          <template
            v-for="key of headers.map(h => h.key)"
            #[`header-${key}`]="{ value, entry, pos }"
            :key="key"
          >
            <mk-wysiwyg-preview>
              <h3><code>#header-{{ key }}</code> / {{ value }}</h3>
              <p>
                <pre><em>pos.x</em> : {{ pos.x }}</pre>
              </p>
              <p>
                <pre><em>pos.y</em> : {{ pos.y }}</pre>
              </p>
              <p>
                <pre><em>pos.key</em> : {{ pos.key }}</pre>
              </p>
              <p>
                <pre>{{ entry }}</pre>
              </p>
            </mk-wysiwyg-preview>
          </template>
          <template
            v-for="key of headers.map(h => h.key)"
            #[key]="{ value, entry, pos }"
            :key="key"
          >
            <mk-wysiwyg-preview>
              <h3><code>#{{ key }}</code> / {{ value }}</h3>
              <p><code>pos.x</code> : {{ pos.x }}</p>
              <p><code>pos.y</code> : {{ pos.y }}</p>
              <p><code>pos.key</code> : {{ pos.key }}</p>
              <p>
                <pre>{{ entry }}</pre>
              </p>
            </mk-wysiwyg-preview>
          </template>
        </mk-table>
      </AppDemoBlock>
    </div>
    <div>
      <AppAsyncCodeBlock
        file-path="/code/view/components/table/custom-slots/dynamic.vue.hbs"
        :language="CodeLanguage.vue"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TableHeader } from '@patriarche/melkor';
import { ref } from 'vue';
import AppDemoBlock from '@/components/AppDemoBlock.vue';
import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
import AppCodeBlock from '@/components/AppCodeBlock.vue';
import { CodeLanguage } from '@/lib/definition';

type TableItemValue = {
  name: string;
  race: string;
  maxAge: number;
};

type TableHeaderValue = string;

const headers: TableHeader<TableItemValue, TableHeaderValue>[] = [
  { value: 'Hero name', key: 'name' },
  { value: 'Race', key: 'race' },
  { value: 'Max age', key: 'maxAge' },
];

const items = ref<TableItemValue[]>([
  {
    name: 'Melkor', race: 'Ainur', maxAge: Infinity,
  },
  {
    name: 'Elrond', race: 'Elf', maxAge: Infinity,
  },
  {
    name: 'Aragorn', race: 'Human', maxAge: 210,
  },
]);
</script>
