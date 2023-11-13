<template>
  <div class="o-badge">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'o-badge',
  };
</script>

<style lang="scss" scoped>
.o-badge {
  display: flex;
  align-items: center;
  background-color: #009688;
  font-size: 10px;
  height: 16px;
  padding: 0 6px;
  color: #ffffff;
  border-radius: 4px;
}
</style>
