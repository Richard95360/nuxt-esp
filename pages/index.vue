<template>
<div>
<h1>Home {{ $store.state.name}}</h1>

<span>{{name}}</span>

<input type="text" v-model="name">
<button @click="changeName">Click Me</button>

<span v-if="isLoading">Loading...</span>
<p v-else>
  {{comment.body}}
</p>
<ul>
    <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
</ul>
</div>
</template>

<script>
export default {
    data:() => {
        return {

            name:'',
            todos:[],
            comment:{},
            isLoading:false
        }
    },
  async  asyncData({$axios}){
     const todos = await $axios.$get('https://jsonplaceholder.typicode.com/todos')
     
     return {todos}
    },
   async created() {
       this.isLoading = true
       setTimeout(async() => {
           this.comment = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments/1')
           this.isLoading = false
       }, 3000);
    },

   methods:{
       changeName(){
           this.$store.dispatch('changeName',this.name)
       }
   }
}
</script>

<style scoped>
li{
text-align: center;
border: 1px solid black;
height: 30px;
margin:0 ;
list-style : none ;
box-shadow: 0 5px 0 gray;

}
@media screen and (max-width: 768px) {
			li {
				display:block;      
			} 
		}
</style>

