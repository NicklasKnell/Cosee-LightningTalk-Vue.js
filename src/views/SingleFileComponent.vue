<template>
  <div class="coloredTitle">{{ title }}</div>
</template>

<script>
export default {
  data: () => {
    return {
      title: "Cosee"
    };
  }
};
</script>

<style lang="sass" scoped>
.coloredTitle
  color: #d4d800
  font-weight: light
  font-size: 35px
</style>