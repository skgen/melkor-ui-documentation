<template>
  <div class="pux-FormView">
    <!-- <AppCmsLayout :title="`${t('component.form.name')}`">
      <template #content>
        <h2>Les formulaires automatiques</h2>
        <p>
          <AppCodeShowHide>
            <p>
              <AppAsyncCodeBlock
                :file-path="example2Code.template"
                :language="CodeLanguage.template"
              />
            </p>
            <AppAsyncCodeBlock
              :file-path="example2Code.script"
              :language="CodeLanguage.typescript"
            />
          </AppCodeShowHide>
        </p>
        <p>
          <AppDemoBlock>
            <template #left>
              <div class="pux-FormView-quadBlock">
                <div>
                  <p>
                    <strong>Firstname</strong>
                    <AppInputText
                      v-model="example2State.firstName.state"
                      name="firstName"
                      :validate="example2State.firstName.validate"
                    />
                  </p>
                  <p>
                    <strong>Lastname</strong>
                    <AppInputText
                      v-model="example2State.lastName.state"
                      name="lastName"
                      :validate="example2State.lastName.validate"
                    />
                  </p>
                </div>
                <div>
                  <p>
                    Une variable
                    <code>data</code> contient le model prêt à l'emploi
                  </p>
                  <p>
                    <AppAsyncCodeBlock
                      :file-path="example2Code.useFormData"
                      :language="CodeLanguage.vue"
                    />
                  </p>
                  <AppCodeBlock
                    :code="example2Code.formData"
                    :language="CodeLanguage.json"
                  />
                </div>
              </div>
            </template>
            <template #right>
              <p>
                Le state du formulaire :
              </p>
              <AppCodeBlock
                :code="example2Code.formState"
                :language="CodeLanguage.json"
              />
            </template>
          </AppDemoBlock>
        </p>
        <p>
          Le formulaire est: <strong>{{ example2Valid ? 'Valide' : 'Invalide' }}</strong>
        </p>
      </template> -->
    <!-- </AppCmsLayout> -->
  </div>
</template>

<script lang="ts" setup>
// import { computed, reactive } from 'vue';
// import { useI18n } from 'vue-i18n';
// import { AppInputText, type FormInput, useForm } from '@patriarche/melkor';
// import AppDemoBlock from '@/components/AppDemoBlock.vue';
// import AppCmsLayout from '@/components/layout/AppCmsLayout.vue';
// import AppCodeBlock, { CodeLanguage } from '@/components/AppCodeBlock.vue';
// import AppAsyncCodeBlock from '@/components/AppAsyncCodeBlock.vue';
// import AppCodeShowHide from '@/components/AppCodeShowHide.vue';

// const { t } = useI18n();

// Example 2

// const example2State: {
//   firstName: FormInput<string>;
//   lastName: FormInput<string>;
// } = reactive({
//   firstName: {
//     state: {
//       value: '',
//       valid: false,
//       touched: false,
//       error: null,
//     },
//     validate: (value) => (value.length === 0 ? 'Lastname is required' : null),
//   },
//   lastName: {
//     state: {
//       value: '',
//       valid: false,
//       touched: false,
//       error: null,
//     },
//     validate: (value) => (value.length === 0 ? 'Firstname is required' : null),
//   },
// });

// const { valid: example2Valid, data: example2Data } = useForm({
//   state: example2State,
//   validate: (state) => state.firstName.state.valid && state.lastName.state.valid,
// });

// const example2Code = computed(() => ({
//   useFormData: '/code/views/form/example-2-hook-data.txt',
//   formState: JSON.stringify(example2State, null, 2),
//   formData: JSON.stringify(example2Data.value, null, 2),
//   script: '/code/views/form/example-2-script.txt',
//   template: '/code/views/form/example-2-template.txt',
// }));

</script>

<style lang="scss">
.pux-FormView {
    &-bound {
        display: inline-block;
        padding: 4px 8px;
        background-color: var(--app-background-color-soft);
    }

    &-quadBlock {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        pre {
            max-width: 100%;
            margin: 0;
        }
    }
}
</style>
