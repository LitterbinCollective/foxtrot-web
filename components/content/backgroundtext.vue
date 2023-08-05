<template>
  <span><slot></slot></span>
</template>

<style lang="scss" scoped>
span {
  display: inline;
  background: var(--color-primary-100);
  color: var(--docus-body-backgroundColor);
  border-radius: 4px;
  padding: 0 0.35em;
  -webkit-box-decoration-break: clone;
  -ms-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>