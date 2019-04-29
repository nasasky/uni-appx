<template>
  <div class="mpvue-picker">
    <div :class="{'pickerMask':$store.state.address}" @click="maskClick" catchtouchmove="true"></div>
    <div class="mpvue-picker-content " :class="{'mpvue-picker-view-show':$store.state.address}">
      <div class="mpvue-picker__hd" catchtouchmove="true">
        <div class="mpvue-picker__action" @click="pickerCancel">取消</div>
        <div class="mpvue-picker__action" :style="{color:themeColor}" @click="pickerConfirm">确定</div>
      </div>
      <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange">
        <block>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in provinceDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in cityDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in areaDataList" :key="index">{{item.label}}</div>
          </picker-view-column>
        </block>
      </picker-view>
    </div>
  </div>
</template>

<script>
import provinceData from './city-data/province.js';
import cityData from './city-data/city.js';
import areaData from './city-data/area.js';
export default {
  data() {
    return {
      pickerValue: [0, 0, 0],
      provinceDataList: [],
      cityDataList: [],
      areaDataList: [],
			/* 是否显示控件 */
			showPicker: true, //已经修改到store中控制
    };
  },
  created() {
    this.init1()
  },
  props: {
    /* 默认值 */
    pickerValueDefault: {
      type: [Array],
      default(){
				return [0, 0, 0]
			}
    },
		pickerValueString:{
			type:String,
			default:""
		},
    /* 主题色 */
    themeColor: String
  },
	watch:{
		pickerValueDefault(){
			this.init0();
		},
		pickerValueString(){
			this.init1();
		}
	},
  methods: {
		init0(){
			this.handPickValueDefault(); // 对 pickerValueDefault 做兼容处理
			this.provinceDataList = provinceData;
			this.cityDataList = cityData[this.pickerValueDefault[0]];
			this.areaDataList = areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]];
			this.pickerValue = this.pickerValueDefault;
		},
		init1() {
			if(this.pickerValueString.length>0){
				let arr = this.pickerValueString.split("-")
				let arr1 = []
				arr1[0]=provinceData.findIndex(val=>val.label.indexOf(arr[0])>-1)
				arr1[1]=cityData[arr1[0]].findIndex(val=>val.label.indexOf(arr[1])>-1)
				arr1[2]=areaData[arr1[0]][arr1[1]].findIndex(val=>val.label.indexOf(arr[2])>-1)
				this.pickerValueDefault[0]=arr1[0]
				this.pickerValueDefault[1]=arr1[1]
				this.pickerValueDefault[2]=arr1[2]
			}
			
			this.init0()
		},
    show() {
      setTimeout(() => {
				this.$store.commit("switch_address")
      }, 0);
    },
    maskClick() {
      this.pickerCancel();
    },
    pickerCancel() {
      this.$store.commit("switch_address")
      this._$emit('onCancel');
    },
    pickerConfirm(e) {
      this.$store.commit("switch_address",this.pickerValue)
      this._$emit('onConfirm');
    },
    showPickerView() {
      this.$store.commit("switch_address")
    },
    handPickValueDefault() {
      if (this.pickerValueDefault !== [0, 0, 0]) {
        if (this.pickerValueDefault[0] > provinceData.length - 1) {
          this.pickerValueDefault[0] = provinceData.length - 1;
        }
        if (this.pickerValueDefault[1] > cityData[this.pickerValueDefault[0]].length - 1) {
          this.pickerValueDefault[1] = cityData[this.pickerValueDefault[0]].length - 1;
        }
        if (this.pickerValueDefault[2] > areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1) {
          this.pickerValueDefault[2] = areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1;
        }
      }
    },
    pickerChange(e) {
      let changePickerValue = e.mp.detail.value;
      if (this.pickerValue[0] !== changePickerValue[0]) {
        // 第一级发生滚动
        this.cityDataList = cityData[changePickerValue[0]];
        this.areaDataList = areaData[changePickerValue[0]][0];
        changePickerValue[1] = 0;
        changePickerValue[2] = 0;
      } else if (this.pickerValue[1] !== changePickerValue[1]) {
        // 第二级滚动
        this.areaDataList =
          areaData[changePickerValue[0]][changePickerValue[1]];
        changePickerValue[2] = 0;
      }
      this.pickerValue = changePickerValue;
      this._$emit('onChange');
    },
    _$emit(emitName) {
      let pickObj = {
        label: this._getLabel(),
        value: this.pickerValue,
        cityCode: this._getCityCode()
      };
      this.$emit(emitName, pickObj);
    },
    _getLabel() {
      let pcikerLabel =
        this.provinceDataList[this.pickerValue[0]].label +
        '-' +
        this.cityDataList[this.pickerValue[1]].label +
        '-' +
        this.areaDataList[this.pickerValue[2]].label;
      return pcikerLabel;
    },
    _getCityCode() {
      return this.areaDataList[this.pickerValue[2]].value;
    }
  }
};
</script>

<style>
.pickerMask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mpvue-picker-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}
.mpvue-picker-view-show {
  transform: translateY(0);
}
.mpvue-picker__hd {
  display: flex;
  padding: 9px 15px;
  background-color: #fff;
  position: relative;
  text-align: center;
  font-size: 17px;
}
.mpvue-picker__hd:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.mpvue-picker__action {
  display: block;
  flex: 1;
  color: #1aad19;
}
.mpvue-picker__action:first-child {
  text-align: left;
  color: #888;
}
.mpvue-picker__action:last-child {
  text-align: right;
}
.picker-item {
  text-align: center;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.mpvue-picker-view {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 238px;
  background-color: rgba(255, 255, 255, 1);
}
</style>
