<script setup>
  import { ref } from 'vue';

  import SearchContacs from './components/SearchContacs.vue';
  import ListContacts from './components/ListContacts.vue';
  //
  import { getAllContacts } from './services/apiContacs';
  //
  const listContacts = ref(getAllContacts())

  const title = 'Mi Agenda - Lista de contactos'

  const clearList = (newList) => {
    listContacts.value = newList
  }

  const filterListContact = (kword) => {
    if (kword.trim() === '') {
      listContacts.value = getAllContacts()
    }
    listContacts.value = listContacts.value.filter(
      (contact) => {
        return contact.name.toLowerCase().includes(kword.toLowerCase())
      }
    )
  }

</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4"> {{ title }} </h1>
    <search-contacs 
      :listContact="listContacts"
      @filterContact="filterListContact"/>
    
    <list-contacts 
      title="Lista de Resultados"
      :listContact="listContacts" />

    <div>
      <button 
      class="bg-blue-500 py-1.5 px-5"
      @click="clearList()"
      >Limpiar</button>
    </div>
  </div>
</template>
