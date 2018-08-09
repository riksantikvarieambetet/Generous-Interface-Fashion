<template>
  <div>
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

fontawesome.library.add(faTimes);

export default {
  name: 'CloseBtn',
};
</script>

<style scoped>
div {
  float: right;
  margin-right: 5px;
  cursor: pointer;
}

div svg {
    margin-top: 5px;
}
</style>
