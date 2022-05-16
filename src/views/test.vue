<template>
    <div class="testPage">
        <CusterScreen v-model="obj" :screenColumn="screenColumn">
        </CusterScreen>
    </div>
</template>
<script>
import CusterScreen from "@/custer/components/CusterScreen/index";
export default {
  components: {
      CusterScreen
  },
  data() {
    return {
      obj: {},
      screenColumn: [
        {
          label: "姓名",
          key: "name"
        },
        {
          label: "姓名",
          key: "name1"
        },
        {
          label: "姓名",
          key: "name2"
        },
      ]
    };
  },
};
</script>
<style lang='scss' scoped>
</style>