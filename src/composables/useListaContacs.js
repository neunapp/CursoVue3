import { ref } from 'vue'

import { getAllContacts } from '../services/apiContacs'

const contactList = ref(getAllContacts())

export function useListaContacs() {

  const msjEmpy = ref('')
  // methds
  const showEmpy = (msj) => {
    if (contactList.value.length < 1) {
      msjEmpy.value = msj
    } else {
      msjEmpy.value = ''
    }
  }


  return {
    contactList,
    msjEmpy,
    showEmpy
  }
}