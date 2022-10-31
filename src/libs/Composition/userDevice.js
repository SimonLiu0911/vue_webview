import { ref, onMounted } from 'vue';

export default function () {
  const u = navigator.userAgent;
  const isAdroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  const device = ref('');

  const currentDevice = () => {
    if (isAdroid) device.value = 'android';

    if (isiOS) device.value = 'ios';
  };

  onMounted(() => {
    currentDevice();
  })

  return {
    device,
    currentDevice
  }
}