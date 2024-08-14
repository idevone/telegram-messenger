import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  createSelectorFunctions,
  createSelectorHooks,
} from "auto-zustand-selectors-hook";

const initialState = {
  user: {
    username: null,
    role: null,
  },
  accessToken: null,
  isLoggedIn: false,
};

const useUserStoreBase = create(
  persist(
    (set) => ({
      ...initialState,
      setCredentials: ({ user, accessToken }) =>
        set({
          user,
          accessToken,
          isLoggedIn: true,
        }),
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
