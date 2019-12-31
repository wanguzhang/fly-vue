<template>
    <div>
        <button class="burger-menu">
            <div class="line" />
            <div class="line" />
            <div class="line" />
        </button>
        <button class="burger-menu2">
            <div class="line" />
            <div class="line" />
            <div class="line" />
        </button>
    </div>
</template>
<script>
export default {
    name: 'Css2',
    data() {
        return { message: 'css2' };
    },
};
</script>
<style lang="scss" scoped>
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

.burger-menu2 {
  position: relative;
  z-index: 2;
  width: 10em;
  height: 10em;
  background: #222;
  border-radius: 50%;

  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: black;
    overflow: hidden;
    transition: all 0.5s ease;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(3) {
      bottom: 30%;
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: lightblue;
      transform: translateX(-100%);
      transition: all 0.25s ease;
    }
      @for $i from 2 through 3 {
      &:nth-child(#{$i})::after {
        transition-delay: 0.1s * ($i - 1);
      }
    }
  }
   &:hover {
    .line::after {
      transform: translateX(0);
    }
  }
}

.burger-menu {
  position: relative;
  z-index: 2;
  width: 10em;
  height: 10em;
  background: #222;
  border: solid 2px black;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: black;
    overflow: hidden;
    transition: all 0.5s ease;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(3) {
      bottom: 30%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: lightblue;
      transform: translateX(-100%);
      transition: all 0.25s ease;
    }

    @for $i from 2 through 3 {
      &:nth-child(#{$i})::after {
        transition-delay: 0.1s * ($i - 1);
      }
    }
  }

  &:hover {
    .line::after {
      transform: translateX(0);
    }
  }
}

</style>
