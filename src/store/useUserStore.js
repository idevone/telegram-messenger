import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createSelectorFunctions,
  createSelectorHooks,
} from "auto-zustand-selectors-hook";

const initialState = {
  user: {
    first_name: null,
    username: null,
  },
  accessToken: null,
  isLoggedIn: false,
};

const useUserStoreBase = create(
  persist(
    (set) => ({
      ...initialState,
      setCredentials: ({ user, access_token }) =>
        set((state) => ({
          user,
          accessToken: access_token || state.accessToken,
          isLoggedIn: true,
        })),
      removeCredentials: () =>
        set({
          ...initialState,
          isRefreshing: false,
        }),
    }),
    {
      name: "auth",
    }
  )
);

export const useUserStore = createSelectorFunctions(useUserStoreBase);
export const useUserStoreHook = createSelectorHooks(useUserStoreBase);
