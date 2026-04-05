

// import { atom, selector } from "recoil";
// export const counterAtom = atom({
//     default: 0,
//     key: "counter"
// })
// export const evenSelector = selector({
//     key: "isEvenSelector",
//     get: function ({ get }) {
//         const currentCount = get(counterAtom);
//         const isEven = (currentCount % 2 == 0);
//         return isEven;
//     }
// })

import { atom, selector } from "recoil";

export const counterAtom = atom({
  key: "counterAtom",
  default: 0
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(counterAtom);
    return count % 2 === 0;
  }
});
