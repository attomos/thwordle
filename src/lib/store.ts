import { writable } from "svelte/store"

interface Day {
  attempts: any[]
  win?: boolean
  lose?: boolean
}

const lsKey = "thwordle-attempts"

export const store = writable<{ modalViewed: boolean; data: Record<string, Day> }>(
  JSON.parse(window.localStorage.getItem(lsKey) || '{"data": {}}')
)

store.subscribe((value) => {
  window.localStorage[lsKey] = JSON.stringify(value)
})
