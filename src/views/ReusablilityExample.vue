<template>
  <div>
    <h1>Reusability Example</h1>
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from "../components/Foo";
import Bar from "../components/Bar";

export default {
  components: {
    Foo,
    Bar
  }
};
</script>

<style lang="sass" scoped>

*
  color: #d4d800
  
h1
  font-weight: 300
  font-size: 35px
  margin-bottom: 10px

p
  font-size: 30px

</style>

