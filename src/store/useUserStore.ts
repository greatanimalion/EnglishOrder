import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import userStoreType,{UserType} from '@/types/userStoreType'

const useUserStore = create(
    persist<userStoreType>(
        (set) => ({
            userInfor: {
                id: '',
                account: '',
                major: '',
                name:'',
                school: '',
                
            },
            setUserInfor(state:UserType){
                set(() => ({
                    userInfor: {
                        ...state
                    }
                }))
            }
        }), {
        name: 'userInfor-storage',
        storage: createJSONStorage(() => sessionStorage),
    }
    )
)
export default useUserStore