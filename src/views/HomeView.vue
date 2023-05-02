<template>
  <AppDocLayout>
    <div class="pux-HomeView">
      <AppPageTitle>
        {{ $t('app.welcome', { appName }) }}
      </AppPageTitle>

      <mk-wysiwyg-preview>
        <section>
          <h2>{{ $t('view.home.titles.intro') }} - Yet another UI library ?</h2>
          <p>Finding a UI library in {{ year }} is a no brain task regarding the amount of existing ones all around the web.</p>
          <p>{{ appName }} is not intended to be <em>better</em> nor <em>a replacement</em> to existing UI Libraries.</p>
          <p>Most of them cover all the basics and maybe way more than {{ appName }} do at the moment.</p>
          <p>
            <strong>BUT</strong>, even though they do many things, they might not do it the way we <em>(Application developers)</em>
            need it, at least not for complexe UI.
          </p>
          <h2>The problem</h2>
          <p>Multiple assessments were done from these UI Libraries:</p>
          <p>
            <ul>
              <li>Most of them handle inputs through <strong>basic scalar</strong> types, no complex model</li>
              <li>
                They provide <strong>poor DX</strong> with mostly components but:
                <p>
                  <ul>
                    <li>No software design patterns</li>
                    <li>No <em>good practices</em></li>
                    <li>Custom APIs for animations & complex stuff</li>
                  </ul>
                </p>
              </li>
              <li>The documentation is complicated to read over time because of too much text</li>
              <li>They lack some <em>advanced</em> features like <strong>theme context</strong> or <strong>unified API over inputs</strong></li>
            </ul>
          </p>
          <h2>The goals to solve it</h2>
          <p>
            Based on these assessments, {{ appName }} goals are to:
          </p>
          <p>
            <ul>
              <li>Enable developers to handle inputs through basic but also complex models</li>
              <li>Deliver a deadly simple and straight to the point documentation</li>
              <li>Integrates some every project features (of course they are optionnals) such as <code>i18n</code> & <code>routing</code></li>
              <li>Avoid custom APIs and be as close as possible to native Vue implementations <em>(Hello animations)</em></li>
              <li>Keep things where they belong to <em>(Hello style in JS)</em></li>
              <li>Provide a full <code>Typescript</code> supported library <em>(Hello {{ year }})</em></li>
            </ul>
          </p>
          <p>{{ appName }} might no fit for every developers and we're fine with it, it's not intended to.</p>
          <p>But if you want a solid UI library that tries things differently based on solid app building experiences, then you're welcome.</p>
          <h2>Why Melkor ?</h2>
          <p>Because <em>The Lord of the Rings</em> is the best universe ever, don't you think ?</p>
          <p>
            By the way, <mk-link to="https://lotr.fandom.com/wiki/Melkor">
              if you don't know who Melkor is
            </mk-link>.
          </p>
          <p>We ain't vilains, we just like badass characters, no harm.</p>
          <h2>Still here ?</h2>
          <p>
            If you're not already gone, you might want to <mk-link to="/config/setup">
              try it out
            </mk-link>.
          </p>
        </section>
      </mk-wysiwyg-preview>
    </div>
  </AppDocLayout>
</template>

<script lang="ts" setup>
import AppPageTitle from '@/components/AppPageTitle.vue';
import AppDocLayout from '@/components/layouts/AppDocLayout.vue';

const appName = import.meta.env.VITE_APP_NAME;
const year = new Date().getFullYear();

</script>
