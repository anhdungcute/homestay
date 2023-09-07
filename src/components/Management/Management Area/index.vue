<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h5>Danh sách khu vực</h5>
      <div>
        <el-button type="primary" @click="showFormArea(true)"
          >Thêm khu vực
        </el-button>
      </div>
    </div>
    <div>
      <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Tên khu vực" prop="name" />
        <el-table-column label="Địa chỉ" prop="address" />
        <el-table-column label="Giới thiệu" prop="demo" />
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="small"
              placeholder="Type to search"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="showFormArea(false)">Sửa</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Xóa</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Form thêm sửa khu vực -->
    <div>
      <el-dialog
        v-model="dialogTableVisible"
        :title="isCheck ? 'Thêm khu vực' : 'Chỉnh sửa khu vực'"
      >
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formArea"
        >
          <el-form-item label="Tên khu vực">
            <el-input
              v-model="formArea.name"
              placeholder="Nhập tên khu vực..."
            />
          </el-form-item>
          <el-form-item label="Địa chỉ">
            <el-input
              v-model="formArea.address"
              placeholder="Nhập địa chỉ..."
            />
          </el-form-item>
          <el-form-item label="Giới thiệu">
            <el-input
              v-model="formArea.demo"
              :rows="2"
              type="textarea"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
          <el-form-item label="Tiện ích">
            <el-input
              v-model="formArea.demo"
              :rows="2"
              type="textarea"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
        </el-form>
        <div class="mt-5" align="right">
          <el-button type="danger" @click="dialogTableVisible = false"
            >Hủy</el-button
          >
          <el-button type="primary" @click="handleACtion">{{
            isCheck ? "Thêm khu vực" : "Chỉnh sửa khu vực"
          }}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const dialogTableVisible = ref(false);
    const isCheck = ref(false);
    const formArea = ref({
      name: "",
      address: "",
      demo: "",
    });
    const tableData = ref([
      {
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
        demo: "xin chào",
      },
      {
        name: "John",
        address: "No. 189, Grove St, Los Angeles",
        demo: "xin chào",
      },
      {
        name: "Morgan",
        address: "No. 189, Grove St, Los Angeles",
        demo: "xin chào",
      },
      {
        name: "Jessy",
        address: "No. 189, Grove St, Los Angeles",
        demo: "xin chào",
      },
    ]);
    const search = ref("");
    const filterTableData = computed(() =>
      tableData.value.filter(
        (data) =>
          !search.value ||
          data.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };

    function showFormArea(check) {
      isCheck.value = check;
      dialogTableVisible.value = true;
    }
    function handleACtion() {
      if (isCheck) {
      }
    }
    return {
      dialogTableVisible,
      isCheck,
      formArea,
      tableData,
      filterTableData,
      search,
      handleEdit,
      handleDelete,
      showFormArea,
      handleACtion,
    };
  },
};
</script>

<style></style>
