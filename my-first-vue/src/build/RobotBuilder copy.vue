<template>
    <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
          <div class = "robot-name">
              {{selectedRobot.head.title}}
              <span v-if="selectedRobot.head.onSale" class="sale">!Sale</span>
          </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPreviousArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torsos.src" title="left arm"/>
        <button @click="selectPreviousTorsos()"  class="prev-selector">&#9668;</button>
        <button @click="selectNextTorsos()"  class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm"/>
        <button  @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button  @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm"/>
        <button @click="selectPreviousBase()"  class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()"  class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
        <h1>cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Robot</th>
                    <th class="cost">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot,index) in cart" :key="index">
                    <td>{{robot.head.title}}</td>
                    <td class="cost">{{robot.cost}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
function nextValidIndex(index , length)
{
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex; 
}
function previuosValidIndex(index , length)
{
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex; 
}
import  availableParts  from "../data/parts";
export default {
    name: 'RobotBuilder',
    data() {
        return {
                availableParts,
                cart: [],
                headIndex:0,
                armIndex:0,
                armRightIndex:0,
                torsosIndex:0,
                baseIndex:0
        };
    },
    computed: {
        selectedRobot() {
            return {
                head: availableParts.heads[this.headIndex],
                leftArm: availableParts.arms[this.armIndex],
                rightArm:availableParts.arms[this.armRightIndex],
                torsos:availableParts.torsos[this.torsosIndex],
                base: availableParts.bases[this.baseIndex]
            };
        },
    },
    methods: {
        addToCart(){
            const robot = this.selectedRobot;
            const cost = robot.head.cost + robot.leftArm.cost + robot.rightArm.cost + 
                            robot.torsos.cost + robot.base.cost;
            this.cart.push(Object.assign({},robot,{cost}));                            
        },
        selectNextHead() {
           this.headIndex = nextValidIndex(this.headIndex,availableParts.heads.length);
        },
        selectPreviousHead() {
           this.headIndex = previuosValidIndex(this.headIndex,availableParts.heads.length);
        },
        selectNextArm() {
           this.armIndex = nextValidIndex(this.armIndex,availableParts.arms.length);
        },
        selectPreviousArm() {
           this.armIndex = previuosValidIndex(this.armIndex,availableParts.arms.length);
        },
        selectNextRightArm() {
           this.armRightIndex = nextValidIndex(this.armRightIndex,availableParts.arms.length);
        },
        selectPreviousRightArm() {
           this.armRightIndex = previuosValidIndex(this.armRightIndex,availableParts.arms.length);
        },
        selectPreviousTorsos(){
           this.torsosIndex = nextValidIndex(this.torsosIndex,availableParts.arms.length);
        },
        selectNextTorsos() {
           this.torsosIndex = previuosValidIndex(this.torsosIndex,availableParts.arms.length);
        },
        selectPreviousBase() {
            this.baseIndex = nextValidIndex(this.baseIndex,availableParts.arms.length);
        },
        selectNextBase() {
           this.baseIndex = previuosValidIndex(this.baseIndex,availableParts.arms.length);
        }
    }
}
</script>

<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: relative;
    top:-25px;
    text-align: center;
    width:100%;
}
.sale {
    color:red;
}
.content {
    position: relative;
}
.add-to-cart {
    position: absolute;
    right:30px;
    width:220px;
    padding:3px;
    font-size: 16px;
}
td,  th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
}
.cost{
    text-align: right;
}
</style>