<script setup>
import { FormKitSchema, createInput } from "@formkit/vue";
import VueMultiSelectFormKit from "./formkit-components/VueMultiSelect.vue";

const ms = createInput(VueMultiSelectFormKit);
const formData = ref({
  username: "zlarkisz",
  password: "",
});

async function handleSubmit(data) {
  await wait(3000);

  console.log(data);
}
</script>

<template>
  <div>
    <FormKit
      :classes="{
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner:
          'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input:
          'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
      }"
      type="text"
      label="name"
      name="name"
    />

    <FormKit
      :classes="{
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner:
          'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input:
          'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
      }"
      type="password"
      validation="required"
      label="name"
      name="name"
    />

    <FormKitSchema
      :data="{
        formData,
        attrs: {
          onSubmit: handleSubmit,
        },
      }"
      :schema="[
        {
          $formkit: 'form',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          children: [
            {
              $el: 'h1',
              children: 'Login',
            },
            {
              $formkit: 'text',
              label: 'Username',
              name: 'username',
              validation: '(500)username_is_unique',
              help: 'Please fill out your username',
            },
            {
              $formkit: 'password',
              label: 'Password',
              name: 'password',
              if: '$value.username',
            },
            {
              $formkit: ms,
              label: `Framework`,
              value: 'Vue',
              options: ['Vue', 'React', 'Svelte'],
              multiple: 'multiple',
            },
          ],
        },
      ]"
    />
  </div>
</template>
