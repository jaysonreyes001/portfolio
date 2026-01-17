export default {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          const cls = binding.value?.class || '';
          cls.split(' ').map(item => {
              let cls2 = item.split(":");
              el.classList.remove(cls2[1]);
              el.classList.add(cls2[0])

          })

          if (entry.isIntersecting) {
            const cls = binding.value?.class || '';
            cls.split(' ').map(item => {
               let cls2 = item.split(":");
               el.classList.add(cls2[1]);
               el.classList.remove(cls2[0])
            })
            observer.unobserve(entry.target);
          }

        });
      },
      { threshold: binding.value?.threshold || 0.4 }
    );

    observer.observe(el);
  },
};
