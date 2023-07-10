# 自动创建 Excel

## 安装 Python 库

```powershell
# openpyxl 一个 Python 的第三方库，简单易用，功能广泛，单元格格式/图片/表格/公式/筛选/批注/文件保护等等功能应有尽有
pip install openpyxl -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## API Documentation

- [`openpyxl.workbook.workbook.Workbook`](https://openpyxl.readthedocs.io/en/stable/api/openpyxl.workbook.workbook.html#openpyxl.workbook.workbook.Workbook)
- [`openpyxl.worksheet.worksheet.Worksheet`](https://openpyxl.readthedocs.io/en/stable/api/openpyxl.worksheet.worksheet.html#openpyxl.worksheet.worksheet.Worksheet)
- [`openpyxl.cell.cell.Cell`](https://openpyxl.readthedocs.io/en/stable/api/openpyxl.cell.cell.html#openpyxl.cell.cell.Cell)

## 自动创建 Excel

### 创建效果

![创建的Excel](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20230710102840963.png?x-oss-process=image)

### 代码实现

```python
"""
@File    :   auto_create_excel.py
@Time    :   2023/07/10 10:03:02
@Author  :   pansf<pansfy@163.com>
@Myblog  :   pansfy.github.io
@Version :   1.0
@License :   Apache
@Desc    :   Excel 自动创建
"""
import openpyxl as xl

# 1. 创建一个工作簿
workbook = xl.Workbook()

# 2. 工作簿创建后，总是创建至少一个工作表，工作表名为 sheet，获取当前工作表
sheet1 = workbook.active

# 3. 工作表重命名
sheet1.title = "第一个工作表"

# 4. 创建更多的工作表，workbook.create_sheet(工作表名, 插入位置)
# 4.1 不提供插入位置，默认被新建到最后
sheet2 = workbook.create_sheet("第二个工作表")

# 4.2 不提供工作表名时为 Sheet
sheet3 = workbook.create_sheet()

# 4.3 在倒数第二个位置插入工作表
sheet_negative_2 = workbook.create_sheet("倒数第二个工作表", -1)

# 5. 获取所有工作表名
sheetnames = workbook.sheetnames
print(sheetnames)

# 6. 遍历所有工作表
for name in sheetnames:
    # 根据 工作表名 获取 sheet
    sheet = workbook[name]
    # 可进一步操作该 工作表
    print(sheet.title)

# 7. 保存工作簿到本地磁盘
workbook.save("工作簿.xlsx")
```