<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore";
import { db } from '@/firebase';
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
const todosCollectionRef = collection(db, "todo");
const todosCollectionQuery = query(todosCollectionRef, orderBy("date", "desc"));

onMounted(() => {
onSnapshot(todosCollectionQuery, (querySnapshot) => {
  const fbTodos = [];
  querySnapshot.forEach((doc) => {
    const todo={
    id: doc.id,
    content: doc.data().content,
    done:doc.data().done,
  };
  fbTodos.push(todo);
  });
  todos.value = fbTodos;
});
});


const newtodoContent = ref("");

const addToDo=()=>{
  addDoc(todosCollectionRef, {
  content: newtodoContent.value,
  done: false,
  date:Date.now(),
});
  newtodoContent.value = "";
};

const deleteToDo = (id) => {
   deleteDoc(doc(todosCollectionRef, id));
  };

const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);

 updateDoc(doc(todosCollectionRef, id),{
  done: !todos.value[index].done,
});

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
     
    <div v-for="todo in todos" :key="todo.id" class="card mb-5" :class="{'has-background-success-light' : todo.done}" >
        <div class="card-content">
          <div class="content">
            <div class="columns is-mobile is-vcentered">
              <div class="column" :class="{'has-text-success line-through': todo.done} ">{{ todo.content }}</div>
              <div class="column is-5 has-text-right">
                <button @click="toggleDone(todo.id)" class="button is-ligth" :class="todo.done ?  'is-success' : 'is-light'">&check;</button>
                <button
                @click="deleteToDo (todo.id)" 
                class="button is-danger ml-1">&cross;</button>
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
.line-through{
 text-decoration: line-through;
}
</style>
