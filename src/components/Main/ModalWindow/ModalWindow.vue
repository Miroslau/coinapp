<template>
  <div class="modal-window">
    <div class="modal-window-wrapper" @click.stop
         :class="{
      'modal-window-wrapper_table': tableMode,
      'modal-window-wrapper_without-padding': paddingWithout
    }"
    >
      <span @click.stop="close" class="modal-window-wrapper__close">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve">
          <g class="st2" id="cross">
              <g class="st0">
                  <line class="st1" x1="112.5" x2="401" y1="112.5" y2="401"/>
                <line class="st1" x1="401" x2="112.5" y1="112.5" y2="401"/>
              </g>
          </g>
        <g id="cross_copy">
              <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436
              L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343
              c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593
               c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"/>
          </g>
        </svg>
      </span>
      <div class="modal-window-wrapper__title"
           v-if="title"
      >
        {{title}}
      </div>
      <div class="modal-window-child"
           :class="{
        'modal-window-child_without-padding': paddingWithout,
        'modal-window-child_table': tableMode
        }"
      >
        <slot></slot>
      </div>
      <div class="modal-window-wrapper__empty" v-if="tableMode"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: ['tableMode', 'title', 'paddingWithout'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-window {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(black, 0.56);

    &-wrapper {
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      padding: 30px;
      position: relative;
      background-color: white;
      border-radius: 8px;

      &__empty {
        height: 10px;
        background-color: white;
        border-radius: 0 0 8px 8px;
      }

      &__title {
        margin: 21px 40px 20px;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
      }

      &_table {
        padding: 0;

        .bb-modal-child {
          margin-right: 0;
          padding-right: 0;
        }
      }

      &_without-padding {
        padding: 0
      }

      &__close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 6px;
        right: 6px;
        font-size: 18px;
        cursor: pointer;
        color: #B9B9B9;
        z-index: 1;
        transition: 0.3s;

        &:hover {
          color: #AFAFAF;
        }
      }
    }

    &-child {
      max-height: 75vh;
      max-width: 99vw;
      margin-right: -38px;
      padding-right: 38px;
      overflow: hidden;

      &_without-padding {
        max-height: 90vh;
        margin-right: -8px;
        padding-right: 8px;
      }

      &_table {
        padding-bottom: 10px;
        margin-bottom: -10px;
      }
    }

    &_for-close {
      width: 0;
      height: 0;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
</style>