<template>
  <div
    class="flex justify-between content-center mt-20 mx-[13rem] max-sm:flex-col-reverse max-sm:justify-center"
  >
    <div><p class="text-xs font-bold mt-3">Page 1 of 1</p></div>
    <div class="">
      <label for="">Sort by: </label>
      <select
        :sortedItems="sortedItems"
        class="ml-2 rounded-xl shadow-md p-2 w-[10rem]"
        v-model="sortby"
      >
        <option value="date">Date</option>
        <option value="salary">Salary</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return
  },
  props: ['items', 'sortedItems']
}
</script>
