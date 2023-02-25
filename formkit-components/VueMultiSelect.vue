<script setup>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";

const props = defineProps({
  context: Object,
});
</script>

<template>
  <Multiselect
    v-bind="context.attrs"
    :model-value="context._value"
    @update:model-value="context.node.input($event)"
    :id="context.id"
    :name="context.node.name"
    @blur="context.handlers.blur"
    :disabled="context.disabled"
    :class="context.classes.input"
  ></Multiselect>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.formkit-input.multiselect {
  padding: 0;
}
</style>
