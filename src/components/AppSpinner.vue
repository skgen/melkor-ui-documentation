<template>
  <div class="pux-AppSpinner">
    <mk-icon icon="autorenew" />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-AppSpinner {
    --pux-spinner-color: currentcolor;

    display: flex;
    justify-content: center;

    .mk-AppIcon {
        --mk-icon-size: 40px;
        --mk-icon-color: var(--pux-spinner-color);

        animation: spin 1000ms linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
}
</style>
