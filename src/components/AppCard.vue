<template class="mb-3">
  <div class="h-[90%] lg:w-[50rem] md:w-[44.5rem] bg-white p-10 mx-5 rounded-lg shadow-2xl mb-6">
    <h2 class="font-bold text-2xl pb-7">{{ items.job_title }}</h2>

    <div class="flex flex-col justify-evenly gap-7">
      <ul>
        <li><font-awesome-icon icon="fa-solid fa-circle-info" class="text-blue/80" /> Job ID</li>
        <li>
          <font-awesome-icon icon="fa-solid fa-solid fa-location-dot" class="text-blue/80" />
          {{ items.location }}
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-solid fa-sterling-sign" class="text-blue/80" />
          {{ items.salary_from }}
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-clock" class="text-blue/80" />
          {{ items.posted_date }}
        </li>
      </ul>

      <div class="w-min flex text-center rounded-2xl p-2 border-2 border-blue-400">
        <font-awesome-icon
          icon="fa-solid fa-square"
          class="text-blue-400 flex justify-center gap-1 align-middle pt-1 mr-1"
        />
        {{ items.category }}
      </div>

      <button class="w-full h-[2rem] bg-blue-900 rounded-xl text-white">View</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['items', 'filterCategories', 'sortedItems']
}
</script>
