<template>
  <a v-bind:href="uri">
    <img v-bind:src="license.img" v-bind:alt="license.name" />
  </a>
</template>

<script>
import cc_by_nc_nd from '../assets/cc_by_nc_nd_88x31.png';
import cc_by from '../assets/cc_by_88x31.png';


export default {
  name: 'LicenseBtn',
  props: {
    uri: false
  },
  created() {
    const licenses = [
      {
        uri: 'http://creativecommons.org/licenses/by-nc-nd/2.5/',
        img: cc_by_nc_nd,
        name: 'Attribution-NonCommercial-NoDerivs 2.5 Generic'
      },
      {
        uri: 'http://creativecommons.org/licenses/by/2.5/',
        img: cc_by,
        name: 'Attribution 2.5 Generic',
      }
    ];

    const found = licenses.filter(license => {
      return license.uri == this.uri;
    });

    if (found) {
      this.license = found[0];
    } else {
      console.warn('Unknown license URI: ' + this.uri);
    }

  }
}
</script>

<style scoped>
</style>
