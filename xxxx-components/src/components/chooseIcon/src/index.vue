<template>
  <div>
    <el-button @click="handleClick">
      <slot>选择图标</slot>
    </el-button>

    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div class="item"
             v-for="(item,index) in Object.keys(ElIcons)"
             :key=index
             @click="handleClickItem(item)">
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ toLine(item) }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
import {toLine} from "../../../utils";
import {useCopy} from "../../../hooks/useCopy";

console.log(ElIcons)

const props = defineProps<{
  title: string,
  visible: boolean
}>()

let dialogVisible = ref<boolean>(props.visible)


const emits = defineEmits(['update:visible', 'click'])

const handleClick = () => {
  emits('update:visible', !props.visible)
}

watch(() => props.visible, (val) => {
  //监听父组件传递的值，改变自己的值
  dialogVisible.value = val
})
watch(() => dialogVisible.value, val => {
  //监听自己的值，改变父组件传递的值
  //也就是如果传入el-dialog的值dialogVisible改变了，
  // 那么父组件传递的值也会改变，通过emits出去一个事件
  emits('update:visible', val)
})
//大概意思这样的，父组件传入一个visible，子组件通过watch监听，
// 当visible改变时，子组件的dialogVisible也改变，
// 子组件通过watch监听dialogVisible，当dialogVisible改变时，
// 子组件通过emit触发父组件的update:visible事件，
// 父组件通过v-model:visible绑定visible，从而实现父子组件的通信


const handleClickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)}></el-icon-${toLine(item)}>`
  // console.log(text)
  useCopy(text)
  dialogVisible.value = false
}


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .item {
    //每五个一行所以20%
    width: 20%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    svg {
      width: 2em;
      height: 2em;
    }
  }
}

//.el-dialog__body
::v-deep .el-dialog__body {
  height: 500px;
  overflow-y: auto;
}

</style>
