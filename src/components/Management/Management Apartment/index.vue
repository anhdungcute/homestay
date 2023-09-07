<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h5>Danh sách căn hộ</h5>
      <div>
        <el-button type="primary" @click="showFormArea(true)"
          >Thêm căn hộ
        </el-button>
      </div>
    </div>
    <div>
      <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="Tiêu đề căn hộ" prop="date" />
        <el-table-column label="Vị trí" prop="name" />
        <el-table-column label="Giá" prop="name" />
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
        :title="isCheck ? 'Thêm căn hộ' : 'Chỉnh sửa căn hộ'"
      >
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formArea"
        >
          <el-form-item label="Tiêu đề ">
            <el-input
              v-model="formArea.title"
              placeholder="Nhập tiêu đề phòng..."
            />
          </el-form-item>
          <el-form-item label="Giới thiệu">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
          <el-form-item label="Tiêu đề vị trí">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập tiêu đề vị trí..."
            />
          </el-form-item>
          <el-form-item label="Nội dung vị trí">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập địa chỉ..."
            />
          </el-form-item>
          <el-form-item label="Tiện nghi">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập tiện nghi..."
            />
          </el-form-item>
          <el-form-item label="Giá">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập tiện nghi..."
            />
          </el-form-item>
          <el-form-item label="Thời gian">
            <el-input
              v-model="formArea.location"
              placeholder="Nhập tiện nghi..."
            />
          </el-form-item>
          <el-form-item label="Tải ảnh">
            <el-upload
              v-model:file-list="fileList"
              list-type="picture-card"
              :auto-upload="false"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-change="UploadFile"
            >
              <i class="fa-solid fa-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="mt-5" align="right">
          <el-button type="danger" @click="dialogTableVisible = false"
            >Hủy</el-button
          >
          <el-button type="primary">{{
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
      listImg: [],
      content: "",
      title: "",
      convenient: "",
    });
    const tableData = ref([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "John",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Morgan",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Jessy",
        address: "No. 189, Grove St, Los Angeles",
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
    function handlePictureCardPreview(uploadFile) {
      console.log("uploadFile", uploadFile);
    }
    function UploadFile(e) {
      console.log("dáhjgdas", e);
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
      handlePictureCardPreview,
      UploadFile,
    };
  },
};
</script>

<style></style>
