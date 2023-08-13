<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { NSwitch, NSpace } from 'naive-ui';
import { CSSProperties } from 'vue';
import { ref } from 'vue';

const defaultThemeSwitch = ref(JSON.parse(localStorage.getItem('theme') || 'false' ));

const setTheme = (currentTheme) => {
  if (currentTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

setTheme(defaultThemeSwitch.value);

const updateTheme = (value) => {
  localStorage.removeItem('theme');
  localStorage.setItem('theme', value);
  setTheme(value);
}

const switchStyle = ({ checked }: { checked: boolean }): CSSProperties => {
  return {
    backgroundColor: checked ? '#1d1d1d' : '#727272',
    boxShadow: checked ? '0 0 0 2px #00000040' : '0 0 0 2px #dfdfdf40',
  };
};

</script>
<template>
  <ul class="nav justify-content-center bg-dark">
    <nav class="navMenu monsterrat pt-3 pb-2">
      <a href="nav-link"><router-link to="/">CLASSIC</router-link></a>
      <a href="nav-link"><router-link to="/new">FUTURE</router-link></a>
      <a href="nav-link"><router-link to="/contact">CONTACT</router-link></a>
      <a href="nav-link"><router-link to="/register">SIGN UP</router-link></a>
      <div class="dot"></div>
    </nav>
    <n-space>
      <n-switch :rail-style="switchStyle" v-model:value="defaultThemeSwitch" @update:value="updateTheme" class="mt-3 switcher kanit medium">
        <template #checked>
          <span>Dark</span>
        </template>
        <template #unchecked>
          <span>Light</span>
        </template>
      </n-switch>
    </n-space>
  </ul>
</template>

<style scoped>
.colorPicker {
  background-color: 0 0 0 2px #dfdfdf40;
}

.switcher {
  position: absolute;
  right: 20px;
  text-decoration: none;
}

.monsterrat {
  font-family: "Montserrat", sans-serif;
}

.nav-item a {
  color: aliceblue;
  text-decoration: none;
}

.nav-item a:hover {
  color: rgb(182, 182, 182);
}

.navMenu a {
  color: #f6f4e6;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 80px;
  text-align: center;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
}

.navMenu a:hover {
  color: #fddb3a;
}

.navMenu .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:nth-child(1):hover~.dot {
  -webkit-transform: translateX(48px);
  transform: translateX(48px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(2):hover~.dot {
  -webkit-transform: translateX(135px);
  transform: translateX(135px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(3):hover~.dot {
  -webkit-transform: translateX(225px);
  transform: translateX(225px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.navMenu a:nth-child(4):hover~.dot {
  -webkit-transform: translateX(315px);
  transform: translateX(315px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}
</style>
