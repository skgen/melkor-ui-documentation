<template>
  <div class="pux-InputsView">
    <mk-wysiwyg-preview>
      <h1>{{ t('app.inputs') }}</h1>
    </mk-wysiwyg-preview>
    <AppInputDemo
      i18n-key="text"
      :input="textInput"
      example="/code/view/component/inputs/text-input.txt"
    >
      <template #sub-header>
        <blockquote>
          Chaque input est controllé & réactif via le <i>v-model</i>
          <p>
            <i>e.g. :</i> <strong>{{ textInput.state.value || 'Empty string' }}</strong>
          </p>
        </blockquote>
      </template>
      <template #input>
        <mk-input-text
          v-model="textInput.state"
          v-bind="textInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="number"
      :input="numberInput"
    >
      <template #input>
        <mk-input-number
          v-model="numberInput.state"
          v-bind="numberInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="password"
      :input="passwordInput"
    >
      <template #input>
        <mk-input-password
          v-model="passwordInput.state"
          v-bind="passwordInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="textarea"
      :input="textareaInput"
    >
      <template #input>
        <mk-input-textarea
          v-model="textareaInput.state"
          v-bind="textareaInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="date"
      :input="dateInput"
    >
      <template #input>
        <mk-input-date
          v-model="dateInput.state"
          v-bind="dateInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="checkbox"
      :input="checkboxInput"
    >
      <template #input>
        <mk-input-checkbox
          v-model="checkboxInput.state"
          v-bind="checkboxInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="radio"
      :input="radioInput"
    >
      <template #input>
        <mk-input-radio
          v-model="radioInput.state"
          v-bind="radioInput.options"
          value="typescript is awesome !"
        />
        <mk-input-radio
          v-model="radioInput.state"
          v-bind="radioInput.options"
          :value="{ leet: 5678 }"
        />
        <mk-input-radio
          v-model="radioInput.state"
          v-bind="radioInput.options"
          :value="false"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="toggle"
      :input="toggleInput"
    >
      <template #input>
        <mk-input-toggle
          v-model="toggleInput.state"
          v-bind="toggleInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="range"
      :input="rangeInput"
    >
      <template #input>
        <mk-input-range
          v-model="rangeInput.state"
          v-bind="rangeInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="file"
      :input="fileInput"
    >
      <template #input>
        <mk-input-file
          v-model="fileInput.state"
          v-bind="fileInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="color"
      :input="colorInput"
    >
      <template #input>
        <mk-input-color
          v-model="colorInput.state"
          v-bind="colorInput.options"
        />
      </template>
    </AppInputDemo>
    <AppInputDemo
      i18n-key="select"
      :input="selectInput"
    >
      <template #input>
        <mk-input-select
          v-model="selectInput.state"
          v-bind="selectInput.options"
        />
      </template>
    </AppInputDemo>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  createInputState,
  type StrInputModel,
  type NumInputModel,
  type RadioInputModel,
  type CheckableInputModel,
  type RangeInputModel,
  type FileInputModel,
  type SelectInputModel,
  type DateInputModel,
  type ToggleInputModel,
} from '@patriarche/melkor';
import AppInputDemo from '@/components/AppInputDemo.vue';

const { t } = useI18n();

function validateTextInput(value: string) {
  if (value.length === 0) {
    return 'String is empty';
  }
  if (value.length <= 5) {
    return 'Value length must be > 5';
  }
  return null;
}

function validateNumberInput(value: number) {
  if (value > 5) {
    return 'Value must be < 5';
  }
  return null;
}

const textInput = reactive<StrInputModel>({
  state: createInputState({ value: '' }),
  options: {
    name: 'text-demo',
    validate: validateTextInput,
    hint: '5 characters minimum',
    label: 'First name',
  },
});

const numberInput = reactive<NumInputModel>({
  state: createInputState({ value: 0 }),
  options: {
    name: 'number-demo',
    validate: validateNumberInput,
    hint: 'Number must be less than 5',
    label: 'Age',
  },
});

const passwordInput = reactive<StrInputModel>({
  state: createInputState({ value: '' }),
  options: {
    name: 'password-demo',
    hint: 'Must be complex',
    label: 'Password',
  },
});

const textareaInput = reactive<StrInputModel>({
  state: createInputState({ value: '' }),
  options: {
    name: 'textarea-demo',
    hint: 'I\'m a textarea',
    label: 'Description',
  },
});

const checkboxInput = reactive<CheckableInputModel<'checked', 1337>>({
  state: createInputState({ value: 'checked' }),
  options: {
    name: 'checkbox-demo',
    checked: 'checked',
    unchecked: 1337,
  },
});

const radioInput = reactive<RadioInputModel<['typescript is awesome !', { leet: number }, false]>>({
  state: createInputState({ value: { leet: 5678 } }),
  options: {
    name: 'radio-demo',
  },
});

const toggleInput = reactive<ToggleInputModel<'toggled', 31173>>({
  state: createInputState({ value: 'toggled' }),
  options: {
    name: 'toggle-demo',
    checked: 'toggled',
    unchecked: 31173,
    checkedLabel: 'Available',
    uncheckedLabel: 'Unavailable',
    label: 'Availablity',
    hint: 'Blablabla',
    fill: true,
  },
});

const rangeInput = reactive<RangeInputModel>({
  state: createInputState({ value: 0 }),
  options: {
    name: 'range-demo',
    min: -100,
    max: 100,
    step: 10,
  },
});

const fileInput = reactive<FileInputModel>({
  state: createInputState({
    value: [
      {
        name: 'Yuri',
        url: 'https://patriarche-ux.fr/wp-content/uploads/2022/01/yuri-patriarche-ux-official.jpg',
        size: null,
        type: 0,
        file: null,
      },
    ],
  }),
  options: {
    name: 'file-demo',
  },
});

const colorInput = reactive<StrInputModel>({
  state: createInputState({
    value: '#ff0000',
  }),
  options: {
    name: 'color-demo',
    hint: 'I\'m a color picker',
    label: 'Color',
  },
});

const selectInput = reactive<SelectInputModel<{
  name: string;
  gender: 'male' | 'female';
}>>({
  state: createInputState({
    value: { name: 'rémi', gender: 'male' },
  }),
  options: {
    name: 'select-demo',
    options: [
      { label: 'lucas', value: { name: 'lucas', gender: 'male' } },
      { label: 'rémi', value: { name: 'rémi', gender: 'male' } },
      { label: 'juliette', value: { name: 'juliette', gender: 'female' } },
    ],
  },
});

const tomorow = new Date();
tomorow.setDate(new Date().getDate() + 1);

const dateInput = reactive<DateInputModel>({
  state: createInputState({ value: tomorow }),
  options: {
    name: 'date-demo',
  },
});

</script>
