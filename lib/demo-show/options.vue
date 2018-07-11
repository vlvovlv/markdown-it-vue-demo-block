<template>
  <ul class="source-code-options">
    <li class="codepen" title="Open in CodePen"></li>
    <li class="codesandbox" title="Open in CodeSandBox"></li>
    <li class="copy" title="Copy to clipboard"></li>
  </ul>
</template>

<script>
import tippy from 'tippy.js';
import Clipboard from 'clipboard';

export default {
  name: 'SourceCodeOptions',
  mounted() {
    tippy('.source-code-options li');
    const clipboard = new Clipboard('.copy-button');
  },
};
</script>

<style lang="stylus">
  .source-code-options
    position: absolute
    display: flex
    margin: 0
    padding: 0
    bottom: 0.8rem
    right: 1rem
    z-index: 3
    opacity: 0
    transition: 0.2s
    li
      margin: 0
      padding: 0
      width: 20px
      height: 20px
      margin-left: 8px
      list-style: none
      cursor: pointer
      transition: 0.2s
      &:hover
        transform: scale(1.1)
      &.codepen
        background: url('./imgs/codepen.svg') no-repeat center
        background-size: contain
      &.codesandbox
        background: url('./imgs/codesandbox.svg') no-repeat center
        background-size: contain
</style>
