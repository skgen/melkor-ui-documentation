<template>
  <h1 class="pux-AppPageTitle">
    <span>
      <slot />
    </span>
  </h1>
</template>

<style lang="scss">
.pux-AppPageTitle {
    position: relative;
    margin: 0 0 var(--app-m-6) 0;
    font-size: 38px;
    font-weight: 700;

    span {
        position: relative;

        &::before {
            position: absolute;
            right: 0;
            bottom: -10px;
            width: 40%;
            height: 4px;
            content: "";
            background-color: currentcolor;
        }
    }
}
</style>
