<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">START</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
    /* Personalizujemy linki nawigacyjne */
    .navbar-nav .nav-link {
      color: #fff;
    }

    .navbar-nav .nav-link:hover {
      color: #e1e1e1;
    }

    /* Personalizujemy tło menu */
    .navbar {
      background-color: #202020de;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Personalizujemy aktywny link */
    .navbar-nav .active > .nav-link {
      color: #fff;
    }

    /* Personalizujemy przycisk menu (na małych ekranach) */
    .navbar-toggler {
      border: none;
    }

    .navbar-toggler-icon {
      background-color: #fff;
    }

    /* Personalizujemy logo */
    .navbar-brand {
      color: #fff;
      font-weight: bold;
    }

    .navbar-brand:hover {
      color: #e1e1e1;
    }

    /* Wyśrodkowujemy menu na stronie */
    .navbar {
      display: flex;
      justify-content: center;
    }
</style>
