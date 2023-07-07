# 如何遍历某个目录下所有的 Excel 文件

```python
"""
@File    :   traverse_files.py
@Time    :   2023/07/07 13:49:38
@Author  :   pansf<pansfy@163.com>
@Myblog  :   pansfy.github.io
@Version :   1.0
@License :   Apache
@Desc    :   如何遍历某个目录下所有的 Excel 文件
"""
import os
import glob
# 安装Python下的Excel库: pip install openpyxl -i https://pypi.tuna.tsinghua.edu.cn/simple
from openpyxl import load_workbook

# 要遍历的目标目录
folder_path = r"./excels"
files = os.listdir(folder_path)

excel_files = glob.glob(os.path.join(folder_path, "*.xlsx"))

for file in excel_files:
    wb = load_workbook(filename=file)
    print(wb)
    # 处理 Excel 文件的代码
```