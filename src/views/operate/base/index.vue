<!--
 * @Author: Custer
 * @Date: 2022-04-06 20:41:43
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:22:23
 * @Description: file content
-->
<template>
  <div class="operate-base-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="运营配置" name="operate">
        <div class="p-10">
          <CusterForm
            v-model="formData.operateData"
            :formRules="operateRules"
            :formConfig="formConfig"
            :formColumn="operateColumn"
          >
            <template v-slot:operate_map="{ row, form }">
              <el-input-number
                :min="row.min"
                v-model="form[`${row.key}`]"
                :placeholder="row.placeholder"
              ></el-input-number>
              <el-button class="ml-10" @click="showViewFun">预览地图</el-button>
            </template>
          </CusterForm>
        </div>
      </el-tab-pane>
      <el-tab-pane label="骑手配置" name="rider">
        <div class="p-10">
          <CusterForm
            v-model="formData.riderData"
            :formRules="riderRules"
            :formConfig="formConfig"
            :formColumn="riderColumn"
          >
          </CusterForm>
        </div>
      </el-tab-pane>
      <el-tab-pane label="订单配置" name="order">
        <div class="p-10">
          <CusterForm
            v-model="formData.orderData"
            :formRules="orderRules"
            :formConfig="formConfig"
            :formColumn="orderColumn"
          ></CusterForm>
        </div>
      </el-tab-pane>
      <!-- <el-tab-pane label="地图配置" name="map">地图配置</el-tab-pane>
      <el-tab-pane label="客服配置" name="service">客服配置</el-tab-pane>
      <el-tab-pane label="短信配置" name="message">短信配置</el-tab-pane>
      <el-tab-pane label="OSS配置" name="oss">OSS配置</el-tab-pane> -->
    </el-tabs>
    <div class="formButton px-10">
      <el-button type="primary">保存配置</el-button>
      <el-button type="default" @click="refreshForm()">重置</el-button>
    </div>
    <el-dialog
      title="预览运营范围"
      :visible.sync="showView"
      width="600px"
      top="50px"
    >
      <div class="schoolContentBox">
        <div id="container"></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showView = false">关 闭</el-button>
      </span>
    </el-dialog>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="接单范围，一公里多少钱等等" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
export default {
  name: "Operate-Base",
  data() {
    return {
      activeName: "operate",
      map: null,
      showView: false,
      formData: {
        operateData: {},
        riderData: {},
        orderData: {},
      },
      ...config,
    };
  },
  methods: {
    showViewFun() {
      this.cleanMap();
      this.showView = true;
      let lat = 22.532742;
      let lng = 113.936696;
      this.$nextTick(() => {
        let center = new TMap.LatLng(lat, lng);
        //初始化地图
        this.map = new TMap.Map("container", {
          zoom: 13, //设置地图缩放级别
          center,
        });
        this.buildCircle(center);
      });
    },
    cleanMap(){
      document.getElementById("container") ? document.getElementById("container").innerHTML = "" : "";
    },
    refreshForm() {
      for (let key in this.formData) {
        for (let k in this.formData[key]) {
          this.formData[key][k] = undefined;
        }
      }
    },
    buildCircle(center) {
      //创建圆形覆盖物
      this.circle = new TMap.MultiCircle({
        map: this.map,
        styles: {
          // 设置圆形样式
          circle: new TMap.CircleStyle({
            color: "rgba(41,91,255,0.16)",
            showBorder: true,
            borderColor: "rgba(41,91,255,1)",
            borderWidth: 2,
          }),
        },
        geometries: [
          {
            styleId: "circle",
            center, //圆形中心点坐标
            radius: (((this?.formData?.operateData?.operate_map || 0) / 2) || 2.5) * 1000, //半径（单位：米）
          },
        ],
      });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.operate-base-container {
  padding: calc(#{$base-padding}) !important;
  padding-top: $base-padding - 15px !important;
  ::v-deep {
    .el-dialog__body {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .schoolContentBox {
    #container {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
