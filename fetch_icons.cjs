const urls = ['express', 'tailwindcss', 'postgresql', 'nextdotjs'];
Promise.all(urls.map(u => fetch('https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/'+u+'.svg').then(r=>r.text())))
.then(res => {
  res.forEach((svg, i) => {
    const match = svg.match(/<path d="([^"]+)"/);
    if(match) console.log(urls[i] + ':', match[1]);
  });
});
