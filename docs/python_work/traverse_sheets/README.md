# Excel 中如何获取遍历不同的工作簿

## Excel 结构

![Excel 结构](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20230707141908732.png?x-oss-process=image)

## 代码实现

```python
"""
@File    :   traverse_sheets.py
@Time    :   2023/07/07 14:09:33
@Author  :   pansf<pansfy@163.com>
@Myblog  :   pansfy.github.io
@Version :   1.0
@License :   Apache
@Desc    :   Excel 中如何获取遍历不同的工作簿
"""
from openpyxl import load_workbook

# 打开 Excel 文件
workbook = load_workbook(r"./excels/book1.xlsx")

# 获取所有工作簿的名称
sheet_names = workbook.sheetnames

# 遍历每个工作簿
for sheet_name in sheet_names:
    # 选择当前工作簿
    worksheet = workbook[sheet_name]

    # 遍历工作簿中的每一行
    for row in worksheet.iter_rows():
        # 遍历行中的每个单元格
        for cell in row:
            # 打印单元格的值
            print(cell.value)
```

