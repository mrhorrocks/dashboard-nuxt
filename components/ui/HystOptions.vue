<template>
  <div class="hys-options custom-select">
    <select name="custom-select" id="hys-options">
      <option value="all">All</option>
      <option value="benign">Benign</option>
      <option value="non_benign">Non Benign</option>
    </select>
  </div>
</template>

<style lang="scss">
.hys-options {
  position: relative;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
  }
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 40px;
    color: #333333;
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 0px;
    cursor: pointer;
    &:focus {
      outline: none;
      border-color: red;
    }
    @media (min-width: 1024px) {
      max-width: 210px;
    }
  }
  &::after {
    content: "\25BC";
    position: absolute;
    top: 10px;
    right: 10px;
    pointer-events: none;
  }
}

// .custom-select select

// .custom-select
</style>
