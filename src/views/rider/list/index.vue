<!--
 * @Author: Custer
 * @Date: 2022-04-06 17:08:58
 * @LastEditors: custer 525966315@qq.com
 * @LastEditTime: 2022-05-20 17:45:54
 * @Description: file content
-->
<template>
  <div class="rider-list-container">
    <CusterCrud
      :screenColumn="screenColumn"
      :screenConfig="screenConfig"
      :handleColumn="handleColumn"
      :tableColumn="tableColumn"
      :tableConfig="tableConfig"
      :tableData="tableData"
      :paginationPage.sync="pageParams.page"
      :paginationLimit.sync="pageParams.pageSize"
      :paginationTotal="total"
      :tableLoading="loading"
      @on-search="searchBackFun"
      @page-change="getListFun"
      @table-refresh="getListFun"
      @handle-click="handleClickFun"
      @table-selection="tableSelectionChange"
    >
      <template v-slot:screen-status="{ row, form }">
        <el-select class="w-100" v-model="form[row.key]" clearable> </el-select>
      </template>
      <template v-slot:table-name="{ row }">
        <div class="nameBox d-flex ai-center w-100">
          <el-avatar :size="30" fit="fill" :src="row.avatar"></el-avatar>
          <div class="name ml-10 textEllipsis-1">{{ row.nickname }}</div>
        </div>
      </template>
      <template v-slot:table-wallet="{ row }">
        <span class="text-color-price">{{ row.wallet | formatPrice }}</span>
      </template>
      <template v-slot:table-status="{ row }">
        <el-switch
          v-model="row.status"
          :active-value="10"
          :inactive-value="20"
        ></el-switch>
      </template>
      <template v-slot:table-praise="{ row }"> {{ row.praise }}% </template>
      <template v-slot:table-onTime="{ row }"> {{ row.onTime }}% </template>
      <template v-slot:table-handle="{ row }">
        <el-button type="text" @click="openEditRider(row)">编辑查看</el-button>
        <el-button type="text" @click="openPassportRider(row)"
          >审核信息</el-button
        >
        <el-button type="text" @click="sendMessage(row)">发站内信</el-button>
        <el-button type="text" @click="opendSettlementRider(row)">提现记录</el-button>
      </template>
    </CusterCrud>
    <el-dialog
      title="查看编辑骑手信息"
      :visible.sync="editRiderDialog"
      width="600px"
      top="50px"
    >
      <div class="editRiderFormBox" v-loading="dialogLoading">
        <el-form label-position="top">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="头像">
                <div class="d-flex">
                  <el-input v-model="editForm.avatar"></el-input>
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                  >
                    <el-button size="small" class="ml-10" type="primary"
                      >点击上传</el-button
                    >
                  </el-upload>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="姓名">
                <el-input v-model="editForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="手机号">
                <el-input v-model="editForm.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别">
                <el-select v-model="editForm.sex" class="w-100">
                  <el-option :value="1" label="男"></el-option>
                  <el-option :value="2" label="女"></el-option>
                  <el-option :value="3" label="未知"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生日">
                <el-date-picker
                  class="w-100-important"
                  v-model="editForm.birthday"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <div class="mt-10">
              <el-col :span="6">
                <div class="d-flex ai-center flex-column">
                  <div>余额</div>
                  <div class="mt-10">{{ editForm.balance | formatPrice }}</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="d-flex ai-center flex-column">
                  <div>接单数</div>
                  <div class="mt-10">{{ editForm.orderNum }}单</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="d-flex ai-center flex-column">
                  <div>好评率</div>
                  <div class="mt-10">{{ editForm.praise }}%</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="d-flex ai-center flex-column">
                  <div>准时率</div>
                  <div class="mt-10">{{ editForm.onTime }}%</div>
                </div>
              </el-col>
            </div>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRiderDialog = false">关 闭</el-button>
        <el-button type="primary">确 认</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="查看骑手审核信息"
      :visible.sync="passportRiderDialog"
      width="600px"
      top="50px"
    >
      <el-form label-position="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="身份证（正面）">
              <img
                @click="previewPassport(1)"
                class="w-100 v-align-bottom"
                :src="passprtForm.idImagePositive"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证（反面）">
              <img
                @click="previewPassport(2)"
                class="w-100 v-align-bottom"
                :src="passprtForm.idImageBack"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="校园卡（正面）">
              <img
                @click="previewPassport(3)"
                class="w-100 v-align-bottom"
                :src="passprtForm.schoolImagePositive"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="校园卡（反面）">
              <img
                @click="previewPassport(4)"
                class="w-100 v-align-bottom"
                :src="passprtForm.schoolImageBack"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="passportRiderDialog = false">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="骑手提现记录"
      :visible.sync="settlementRiderDialog"
      width="800px"
      top="50px"
    >
      <RiderSettlement :hideScreen="true" :hideHandle="true" :riderId="settlementRiderForm.id"></RiderSettlement>
    </el-dialog>
    <MessageDialog :drawer.sync="messageDrawer" :selectUser="messageSelectUser" :allRider.sync="messageAllRider"/>
    <!-- <h3>应有的功能</h3>
    <el-input type="textarea" value="增删查改，查看审核信息，启用，停用（禁止接单），余额（可提现金额），订单数，提现记录" :rows="4"></el-input>
    <h3>待考虑的功能</h3>
    <el-input type="textarea" value="" :rows="4"></el-input> -->
  </div>
</template>
<script>
import config from "./config";
import * as API_RIDER_LIST from "@/api/rider/list";
import RiderSettlement from '../settlement/index.vue';
import MessageDialog from '@/components/messageDialog';
export default {
  name: "Rider-List",
  components: {
    RiderSettlement,
    MessageDialog
  },
  data() {
    return {
      tableData: [],
      total: 0,
      pageParams: {
        pageSize: 10,
        page: 1,
      },
      loading: false,
      editRiderDialog: false,
      passportRiderDialog: false,
      settlementRiderDialog: false,
      dialogLoading: false,
      messageDrawer: false,
      editForm: {},
      passprtForm: {},
      settlementRiderForm: {},
      messageSelectUser: [],
      tableSelectionArr: [],
      messageAllRider: false,
      ...config,
    };
  },
  methods: {
    searchBackFun(val) {
      this.getListFun(val);
    },
    tableSelectionChange(arr){
      this.tableSelectionArr = arr;
    },
    opendSettlementRider(row){
      this.settlementRiderDialog = true;
      this.settlementRiderForm = row;
    },
    sendMessage(row){
      this.messageSelectUser = [row];
      this.messageDrawer = true;
    },
    handleClickFun(val){
      if(val === 'partMessage'){
        this.messageSelectUser = this.tableSelectionArr;
      }
      if(val === 'allMessage'){
        this.messageAllRider = true;
      }
      this.messageDrawer = true;
    },
    previewPassport(num) {
      let arr = Object.values(this.passprtForm);
      this.$viewerApi({
        images: arr,
        options: {
          initialViewIndex: num - 1,
        },
      });
    },
    async openEditRider(row) {
      this.editRiderDialog = true;
      this.dialogLoading = true;
      try {
        let { data } = await API_RIDER_LIST.getDetail(row.id);
        this.editForm = data;
      } catch (err) {
      } finally {
        this.dialogLoading = false;
      }
    },
    async openPassportRider(row) {
      this.passportRiderDialog = true;
      this.dialogLoading = true;
      try {
        let { data } = await API_RIDER_LIST.getPassport(row.id);
        this.passprtForm = data;
      } catch (err) {
      } finally {
        this.dialogLoading = false;
      }
    },
    async getListFun(searchParams = {}) {
      if (this.loading) return;
      this.loading = true;
      try {
        let { data } = await API_RIDER_LIST.getList({
          ...this.pageParams,
          ...searchParams,
        });
        this.total = data.total;
        this.tableData = data.data.map(item => {
          return {
            ...item,
            wallet: parseFloat(item.wallet)
          }
        });
      } catch (err) {
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getListFun();
  },
};
</script>
<style lang="scss" scoped>
.rider-list-container {
  & .nameBox {
    height: 30px;
    & > .name {
      flex: 1;
    }
  }
}
</style>
