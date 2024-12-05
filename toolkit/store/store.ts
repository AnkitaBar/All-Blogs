import { Cookies } from 'react-cookie';
import { create } from 'zustand'

interface UserState {
  token: string | null; // Add token property
  setToken: (token: string | null) => void; // Add setToken function
}

export const useUserStore = create<UserState>((set) => (
  {
    token: '',
    setToken: () => {
      const cookie = new Cookies()
      set({ token: cookie.get("token") })
    },
  }
));