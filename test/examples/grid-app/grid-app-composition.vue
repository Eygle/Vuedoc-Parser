<script>
import DemoGrid from './Grid.vue';
import { ref } from 'vue';

export default {
  components: {
    DemoGrid,
  },
  setup() {
    const searchQuery = ref('');
    const gridColumns = ['name', 'power'];
    const gridData = [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 },
    ];

    return {
      searchQuery,
      gridColumns,
      gridData,
    };
  },
};

</script>

<template>
<form id="search">
  Search <input name="query" v-model="searchQuery"/>
</form>
<DemoGrid
  :data="gridData"
  :columns="gridColumns"
  :filter-key="searchQuery">
</DemoGrid>
</template>