import { useStore } from 'vuex';

export default function () {
  const store = useStore();

  return {
    store
  };
}
