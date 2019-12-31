<template>
    <div class="divBody">
        <nav
            class="navtab"
            :style="{'--active-index':index}"
        >
            <ul>
                <li
                    class="navtab-item active"
                    @click="change(0)"
                >
                    <i class="fas fa-home" />
                    <span>Home</span>
                </li>
                <li
                    class="navtab-item"
                    @click="change(1)"
                >
                    <i class="fas fa-compass" />
                    <span>Explore</span>
                </li>
                <li
                    class="navtab-item"
                    @click="change(2)"
                >
                    <i class="fas fa-bell" />
                    <span>Notification</span>
                </li>
                <li
                    class="navtab-item"
                    @click="change(3)"
                >
                    <i class="fas fa-user" />
                    <span>Profile</span>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Css1',
    data() {
        return {
            message: 'css1',
            index: 0,
        };
    },
    mounted() {

    },
    methods: {
        change(index) {
            this.index = index;
            const navtabItems = document.querySelectorAll('li.navtab-item');
            navtabItems.forEach(navtabItem => navtabItem.classList.remove('active'));
            document.querySelector(`ul li:nth-child(${index + 1})`).classList.add('active');
        },
    },
};
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.divBody {
  @include center;

  height: 100vh;
  font-family: Lato, sans-serif;
  background-color: #03a9f4;
}

nav.navtab {
  --navtab-width: 600px;
  --navtab-item-width: calc(var(--navtab-width) / 4 - 20px);
  --navtab-overlay-width: calc(var(--navtab-item-width) + 80px);
  --active-index: 0;

  position: relative;
  width: var(--navtab-width);
  height: 150px;
  background: white;
  border: 1em solid white;
  border-radius: 5% 5% 15% 15% / 15% 15% 50% 50%;
  overflow: hidden;

  ul {
    @include center;

    width: 100%;
    height: 100%;
    list-style-type: none;

    li.navtab-item {
      @include center;

      z-index: 2;
      flex-direction: column;
      width: var(--navtab-item-width);
      height: 100%;
      color: #0288d1;
      cursor: pointer;
      transition: 0.5s ease;

      i {
        font-size: 2em;
        transition: 0.5s ease;
      }

      span {
        font-size: 20px;
        user-select: none;
        opacity: 0;
        transition: 0.5s ease;
      }

      &.active {
        width: var(--navtab-overlay-width);

        i {
          transform: translateY(-10px);
        }

        span {
          opacity: 1;
        }
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: var(--navtab-overlay-width);
    background: #b3e5fc;
    border-radius: 20px;
    transform: translateX(calc(var(--navtab-item-width) * var(--active-index)));
    transition: 0.5s ease;
  }
}

</style>
