<template>
  <button :class="['type__'+type,'size__'+size,'plain__'+plain,'round__'+round]" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: String,
      required: false,
      default: null
    },
    plain: {
      type: String,
      required: false,
      default: null
    },
    round: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
$white: #fff;
$black: #333;
$primaryMainColor: #409eff;
$successMainColor: #67c23a;
$infoMainColor: #909399;
$warningMainColor: #e6a23c;
$dangerMainColor: #f56c6c;
@mixin buttonSizeStyled($size, $fontSize) {
  padding: $size;
  font-size: $fontSize;
}
@mixin buttonColorStyled($color) {
  @if ($white != $color) {
    color: $white;
  }
  background-color: $color;
}
@mixin mixButtonStyled($color,$percent) {
  @if ($white != $color) {
    background-color: mix($white, $color, $percent);
  }
}
@mixin buttonStyled($type, $color) {
  &__#{$type} {
    @include buttonColorStyled($color);
    &:disabled {
      @include mixButtonStyled($color,50%);
    }
  }
}
@mixin plainButtonStyled($type,$color) {
  &__#{$type} {
    border: 1px solid $color;
    color: $color;
    @include mixButtonStyled($color,90%);
  }
}
button {
  border: 0 none;
}
.round {
  &__default {
    border-radius: 30px;
  }
}
.type {
  &__default {
    @include buttonColorStyled($white);
    border: 1px solid $black;
    &:disabled {
      opacity: 0.5;
    }
  }
  @include buttonStyled('primary', $primaryMainColor);
  @include buttonStyled('success', $successMainColor);
  @include buttonStyled('info', $infoMainColor);
  @include buttonStyled('warning', $warningMainColor);
  @include buttonStyled('danger', $dangerMainColor);
}
.size {
  &__default {
    @include buttonSizeStyled(12px 20px,14px);
  }
  &__small {
    @include buttonSizeStyled(9px 15px,12px);
  }
  &__medium {
    @include buttonSizeStyled(10px 20px,14px);
  }
}
.plain {
  @include plainButtonStyled('primary', $primaryMainColor);
  @include plainButtonStyled('success', $successMainColor);
  @include plainButtonStyled('info', $infoMainColor);
  @include plainButtonStyled('warning', $warningMainColor);
  @include plainButtonStyled('danger', $dangerMainColor);
}
</style>
