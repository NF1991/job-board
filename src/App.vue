<template>
  <header>
    <div
      class="h-[25vh] lg:h-[30vh] w-full bg-[url('https://images.unsplash.com/photo-1485527691629-8e370684924c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')] bg-cover lg:bg-center lg:bg-[length:1600px_800px]"
    >
      <div
        class="w-full h-full flex justify-center items-center bg-black/20 backdrop-brightness-75"
      >
        <span class="text-white text-4xl w-1/2 text-center">Job Search</span>
      </div>
      <!-- Search Bar -->
      <div
        class="relative h-[7rem] w-[75%] m-auto flex flex-col justify-center align-middle only: bg-white rounded-xl shadow-lg -translate-y-14"
      >
        <label class="ml-6 font-bold" for="">Search</label>
        <form class="flex justify-start p-4 gap-8">
          <input
            class="w-[100%] h-[2.5rem] border-gray-200 rounded-3xl border-2 p-2"
            type="search"
            name=""
            v-model="search"
            placeholder="Job title"
          />
          <button class="w-[25%] h-[2.5rem] text-white bg-blue-400 rounded-3xl">
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="mr-2 text-white"
              @click.prevent="searchResult(search)"
            />
            Search
          </button>
        </form>
      </div>
    </div>
  </header>

  <main class="flex flex-col">
    <div><AppSelection></AppSelection></div>
    <div class="m-auto pt-5 flex justify-center flex-col lg:flex-row">
      <div><AppFilter :filterCategories="filterCategories"></AppFilter></div>
      <div class="flex flex-col lg:ml-5 mt-4">
        <div v-for="item in filteredJobs" :key="item">
          <AppCard :items="item" :searchResult="searchResult"></AppCard>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppCard from './components/AppCard.vue'
import AppFilter from './components/AppFilter.vue'
import AppSelection from './components/AppSelection.vue'
import jobData from './jobs.json'

export default {
  name: 'App',
  components: {
    AppCard,
    AppFilter,
    AppSelection
  },
  data() {
    return {
      items: jobData,
      search: '',
      sortby: 'date',
      selectedCategory: []
    }
  },
  computed: {
    sortedItems() {
      const key = this.sortby === 'date' ? 'date' : 'salary'
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      const sorted = this.items.sort((a, b) => {
        if (key === 'date') {
          return new Date(a.posted_date) - new Date(b.posted_date)
        } else if (key === 'salary') {
          return a.salary_from - b.salary_to
        }
      })
      return sorted
    },
    filteredJobs() {
      return this.items.filter((jobs) =>
        jobs.job_title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    filterCategories(categoryName) {
      this.resetPosts()
      if (categoryName !== 'All') {
        this.items = this.items.filter((items) => {
          return items.category === categoryName
        })
      }
    },
    searchResult(search) {
      this.items = this.items.filter((items) => {
        return items.job_title.toLowerCase().includes(search.toLowerCase())
      })
    },

    resetPosts() {
      this.items = jobData
    }
  }
}
</script>
