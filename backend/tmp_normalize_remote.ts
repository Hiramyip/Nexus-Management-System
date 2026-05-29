import fetch from 'node-fetch';
(async () => {
  try {
    const base = process.env.BACKEND_URL || 'https://nexus-backend-2pm4.onrender.com';
    const url = `${base}/api/sql/reportes/oficios`;
    console.log('Fetching remote raw rows from', url);
    const res = await fetch(url);
    const raw = await res.json();
    if (!Array.isArray(raw) || raw.length === 0) {
      console.log('No rows returned.');
      return;
    }

    const mod = await import('./src/services/sql/ReportesService.ts');
    const ReportesService = (mod as any).ReportesService;
    const svc = new ReportesService();

    const normalized = raw.slice(0, 10).map((r: any) => (svc as any).normalizeViewRow(r));
    console.log(JSON.stringify(normalized, null, 2));
  } catch (e) {
    console.error('Error', e);
  }
})();
