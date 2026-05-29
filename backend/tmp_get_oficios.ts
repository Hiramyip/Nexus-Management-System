(async () => {
  try {
    const base = process.env.BACKEND_URL || 'https://nexus-backend-2pm4.onrender.com';
    const url = `${base}/api/sql/reportes/oficios`;
    console.log('Requesting:', url);
    const res = await fetch(url);
    const txt = await res.text();
    try {
      const j = JSON.parse(txt);
      console.log(JSON.stringify(j, null, 2));
    } catch {
      console.log(txt);
    }
  } catch (e) {
    console.error('Error:', e);
    process.exit(1);
  }
})();
