<template>
  <div class="cu-tabs">
    <div class="cu-tabs-nav" ref="container">
      <div class="cu-tabs-nav-item" v-for="(t, index) in titles" @click="handleSelect(t)"
        :class="{ selected: t === selected }" :key="index" :ref="(el) => {
            if (t === selected) {
              selectedItem = el;
            }
          }
          ">
        {{ t }}
      </div>
      <div class="cu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cu-tabs-content">
      <component class="cu-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";

const container = ref<HTMLDivElement>();
const selectedItem = ref<unknown>(null);
const indicator = ref<HTMLDivElement>();
const props = defineProps({
  selected: {
    type: String,
  },
});
const emit = defineEmits(["update:selected"]);
const slots = defineSlots();
const defaults = slots.default();

defaults.forEach((tag: any) => {
  if (tag.type.name !== Tab.name) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});

const titles = defaults.map((tag: any) => {
  return tag.props.title;
});

const current = computed(() => {
  return defaults.filter((tag: any) => {
    return tag.props.title === props.selected;
  })[0];
});

const handleSelect = (val: string) => {
  emit("update:selected", val);
};

onMounted(() => {
  watchEffect(() => {
    const containerDiv = container.value;
    const selectedDiv = selectedItem.value as HTMLDivElement;
    const indicatorDiv = indicator.value;

    const { width } = selectedDiv!.getBoundingClientRect();
    indicatorDiv!.style.width = width + "px";

    const { left: left1 } = containerDiv!.getBoundingClientRect();
    const { left: left2 } = selectedDiv.getBoundingClientRect();
    const left = left2 - left1;
    indicatorDiv!.style.left = left + "px";
  });
})

</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.cu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;

      @media (min-width: 960px) {
          cursor: pointer; 
      }

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
