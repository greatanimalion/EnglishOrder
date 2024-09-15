import { create } from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'
import ThemeStoreType from '@/types/themeStoreType'

const useThemeStore = create(
  persist<ThemeStoreType>(
    (set) => ({
      theme: true,
      setTheme: (option: boolean) => set(() => ({ theme: option })),
    }),{
      name: 'theme-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
export default useThemeStore