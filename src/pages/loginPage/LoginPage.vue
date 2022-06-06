<template>
  <div class="login-page">
    <p class="title">Smart Keller</p>
    <form class="login-page-container">
      <p class="center-text">LOGIN</p>
      <p class="left-text">E-Mail</p>
      <va-input
          name="email"
          class="input"
          type="email"
          placeholder="E-mail eingeben..."
          v-model="email"
          @blur="(e) => blurHandler(e)"
          @change="(e) => {emailHandler(e)}"
          @keyup.enter="handleLoginClick()"
      />
      <div v-if="emailDirty && emailError" class="red">{{ emailError }}</div>
      <p class="left-text">Password</p>
      <va-input
          name="password"
          class="input"
          type="password"
          placeholder="Passwort eingeben..."
          @change="(e) => passwordHandler(e)"
          v-model="password"
          @blur="(e) => {blurHandler(e)}"
          @keyup.enter="handleLoginClick()"
      />
      <div v-if="passwordDirty && passwordError" class="red">{{ passwordError }}</div>
      <va-button color="primary" class="login-button" :disabled="!formValid">Login</va-button>
    </form>
  </div>

</template>

<script setup lang="ts">

import {ref, watchEffect} from "vue";

const email = ref(""),
    password = ref(""),
    emailDirty = ref(false),
    passwordDirty = ref(false),
    emailError = ref("E-Mail darf nicht leer sein"),
    passwordError = ref("Passwort darf nicht leer sein"),
    formValid = ref(false);

watchEffect(() => {
  formValid.value = !(emailError.value || passwordError.value);
})

const blurHandler = ($event: any) => {
  switch ($event.target.name) {
    case "email": {
      emailDirty.value = true;
      break;
    }
    case "password": {
      passwordDirty.value = true;
      break;
    }
  }
}

/*
* The regular expression was taken from this source
* https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
*/
const emailHandler = (event: any) => {
  email.value = event.target.value;
  const notCorrectEmail: string = "Bitte geben Sie eine korrekte E-Mail ein";
  const re: RegExp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (!re.test(String(event.target.value).toLowerCase())) {
    emailError.value = notCorrectEmail;
  } else {
    emailError.value = "";
  }
}

const passwordHandler = (event: any) => {
  password.value = event.target.value;
  const passwordMin: string = "Ihr Passwort muss aus mindestens 6 Symbolen bestehen";
  if (event.target.value.length < 6) {
    passwordError.value = passwordMin;
  } else {
    passwordError.value = "";
  }
}

const handleLoginClick = async () => {
  /**
   * Sobald Datenbank eingebunden wird, soll man Authorisierung Prozess durchführen
   */

  const falsePassword: string = "das Passwort ist falsch";
  const notUser: string = "Nutzer existiert nicht";
  const loginError: string = "Ein Fehler ist aufgetreten. Bitte versuche es spaeter erneut";
  console.log("HandleLoginclick");

};

</script>

<style scoped lang="scss">
@import "../../css/pages/loginPage/LoginPage";
</style>