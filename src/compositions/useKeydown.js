import { onBeforeUnmount } from 'vue';

export const useKeydown = function(keyCombos) {
    let onKey = (event) => {
          let kc = keyCombos.find(kc => kc.key == event.key )
          if(kc) {
              kc.fn()
          }

      }
      window.addEventListener('keydown', onKey)

      onBeforeUnmount(()=> {
          window.removeEventListener('keydown', onKey)
      })
}

export default useKeydown;