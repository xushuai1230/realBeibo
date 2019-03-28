<template>
    <div class="extensionData">
        <sub-nav :navList='extensionNav'></sub-nav>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
// import dataTable from "./data.vue";
// import resources from "./resources.vue";
export default {
  name: "extension-data",
  data() {
    return {
      extensionNav: [
        {
          title: "推广域名",
          path: '/extension/domain'
        },
        {
          title: "推广资源",
          path: '/extension/data'
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.extensionData {
  width: 100%;
  height: auto;

  > .tablist {
    width: 100%;
    height: 83px;
    background: rgba(243, 243, 243, 1);
    line-height: 83px;

    > li {
      float: left;
      padding: 0 83px;
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);

      &:nth-child(1) {
        margin-left: 83px;
      }
    }

    .listTab {
      font-size: 17px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(30, 90, 220, 1);
    }
  }
}
</style>
