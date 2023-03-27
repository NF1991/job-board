<template>
  <div class="h-max w-auto xl:w-[20vw] lg:w-[20vw] bg-white rounded-xl shadow-2xl m-5">
    <h3 class="text-center text-bold pt-4 text-xl">
      <span class="text-blue-500">{{
        filteredJobs.length === jobData.length ? jobData.length : filteredJobs.length
      }}</span>
      Jobs Found
    </h3>
    <button
      @click.prevent="reloadPage"
      class="flex justify-center content-center gap-3 text-sm pt-4 m-auto text-blue-500"
    >
      <font-awesome-icon icon="fa-solid fa-arrows-rotate" class="text-blue-500 pt-1" /> Reset Search
    </button>
    <button
      class="bg-blue-50 w-full flex justify-between p-2 mt-6 border-t-2 border-b-2 border-gray-400 text-blue-500"
      @click="showCategory = !showCategory"
    >
      Category <font-awesome-icon icon="fa-solid fa-circle-chevron-down" class="pt-1" />
    </button>
    <div class="p-3" v-show="showCategory">
      <ul>
        <li v-for="(job, index) in uniqueCategories" :key="job">
          <input
            type="checkbox"
            :value="job"
            v-model="selectedCategory"
            :id="job"
            @change="() => filterCategories(job)"
          />
          <label class="text-bold" :for="'category-' + index"> {{ job }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import jobData from '../jobs.json'

export default {
  props: ['filterCategories', 'search', 'filterItems'],
  data() {
    return {
      showCategory: true,
      jobData,
      selectedCategory: []
    }
  },
  computed: {
    uniqueCategories() {
      const categories = this.jobData.map((job) => job.category)
      return [...new Set(categories)]
    },
    filteredJobs() {
      if (this.selectedCategory.length === 0) {
        return this.jobData
      } else {
        return this.jobData.filter((job) => {
          return this.selectedCategory.includes(job.category)
        })
      }
    }
  },

  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>
