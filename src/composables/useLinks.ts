import { ref } from 'vue'

export const useLinks = () => {
  type Link = {
    to: string
    name: string
  }
  const links = ref<Link[]>([
    {
      to: '/',
      name: 'HOME'
    },
    {
      to: '/curriculum',
      name: '職務経歴書'
    },
    {
      to: '/samples',
      name: '制作実績'
    },
    {
      to: '/books',
      name: '参考書籍'
    }
  ])

  return {
    links
  }
}
