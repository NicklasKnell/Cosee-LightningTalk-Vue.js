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
