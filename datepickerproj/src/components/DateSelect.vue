<template>
    <div>
        <datepicker ref="dd" :shortcuts="shortcuts" v-model="value" show-week-number type="week" @select="onSelect"  :editable="true"
         @change="handleChange" format="Ww:dd.mm YYYY" placeholder="Select week"></datepicker>
    </div>
</template>

<script>
    import datepicker from "vue2-datepicker";
    import 'vue2-datepicker/index.css';

    export default {
        name: "DateSelect",
        components : {datepicker},
        data() {
            return {
                value: [],
                shortcuts: [
                    {
          text: 'Today',
          onClick() {
            const date = new Date();
            // return a Date
            return date;
          }
          
        }
                ] 
            }
        },
        methods:{
            handleChange(value,type) {
                console.log(this.$refs.dd.)
                console.log(value);
                console.log(type);
            },
            onSelect(name,type,source)
            {
                 console.log(name);
                console.log(type);
                console.log(source);
            }
        }
    }
</script>

<style  scoped>

</style>