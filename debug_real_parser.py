import asyncio
import importlib.util
import io
from fastapi import UploadFile

spec = importlib.util.spec_from_file_location('excel_processor_main', 'excel-processor/main.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

async def main():
    path = r'C:\Users\gael1\Downloads\2-. Reportes Febrero 2026.xlsx'
    with open(path, 'rb') as f:
        data = f.read()
    file = UploadFile(filename='2-. Reportes Febrero 2026.xlsx', file=io.BytesIO(data))
    result = await module.process_excel(file)
    print('COUNT', len(result))
    for item in result[:5]:
        print(item)

asyncio.run(main())
