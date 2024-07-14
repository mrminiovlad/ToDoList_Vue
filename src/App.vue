<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
const todos = ref([
//  { 
//     id:'id1',
//     content:'test content1',
//     done: false
//   },
//   { 
//     id:'id2',
//     content:'test content2',
//     done: false
//   },
]);

const newtodoContent = ref("");

const addToDo=()=>{
  const newToDo = {
    id: uuidv4(),
    content:newtodoContent.value,
    done: false
  };
  // console.log("Все работает", newToDo);
  todos.value.unshift(newToDo);
  newtodoContent.value = "";
};
</script>

<template>
  <div class="wrapper-todo">
   <div class="title has-text-centered">Лист ToDo</div>
    <form @submit.prevent="addToDo">
        <div class="field is-grouped mb-5">
          <p class="control is-expanded">
            <input 
            v-model="newtodoContent"
            class="input" type="text" placeholder="Добавить запись">
          </p>
          <p class="control">
            <button :disabled="!newtodoContent" class="button is-info">
             Добавить
            </button>
           </p>
        </div>
    </form>
     
    <div v-for="todo in todos" :key="todo.id" class="card">
        <div class="card-content">
          <div class="content">
            <div class="columns is-mobile is-vcentered">
              <div class="column">{{ todo.content }}</div>
              <div class="column is-5 has-text-right">
                <button class="button is-ligth">&check;</button>
                <button class="button is-danger ml-1">&cross;</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
@import '/node_modules/bulma/css/bulma.min.css';

.wrapper-todo{
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
};
</style>
