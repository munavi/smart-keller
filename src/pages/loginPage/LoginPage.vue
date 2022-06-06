<template>
  <div class="login-page">
    <p class="title">
      Smart Keller
    </p>
    <div class="login-page-container">
      <p class="center-text">
        LOGIN
      </p>
      <p class="left-text">E-Mail</p>
      <va-input
          class="input"
          type="email"
          placeholder=" E-mail eingeben..."
      />
      <p class="left-text">Password</p>
      <va-input
          class="input"
          type="password"
          placeholder=" Passwort eingeben..."
      />

      <va-button color="primary"
                 class="login-button">
        Login
      </va-button>

    </div>
  </div>

</template>

<script setup lang="ts">

import {ref} from "vue";

const email = ref(""),
    password = ref(""),
    emailDirty = ref(false),
    passwordDirty = ref(false),
    emailError = ref("E-Mail darf nicht leer sein"),
    passwordError = ref("Passwort darf nicht leer sein"),
    formValid = ref(false);

const blurHandler = (event: any) => {
  switch (event.target.name) {
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
  const notCorrectEmail: string = "Bitte gib eine korrekte E-Mail ein";
  email.value = event.target.value;
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
  const passwordMin: string = "Dein Passwort muss aus mindestens 6 Symbolen bestehen";
  const passwordEmpty: string = "Passwort darf nicht leer sein";
  if (event.target.value.length < 6) {
    passwordError.value = passwordMin;
    if (!event.target.value) {
      passwordError.value = passwordEmpty;
    }
  } else {
    passwordError.value = "";
  }
}

</script>

<style scoped lang="scss">
@import "src/css/pages/loginPage/LoginPage.scss";
</style>