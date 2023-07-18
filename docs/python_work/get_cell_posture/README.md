# Excel 单元格的各种读姿势

## 1. Sheet 概念说明

![Sheet 概念说明](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/sheet分解.png?x-oss-process=image)

一个Excel工作簿（`workbook`）由一个或者多个工作表（`sheet`）组成。

一个工作表（`sheet`）由行列组成的工作表构成，行与列交叉形成的部分称为单元格，且是Excel中最基本的存储单位，可以存放数值、变量、字符、公式等数据。

其中顶部的`A`、`B`、`C`、`D`等称为工作表的列标，可以用于定位单元格。

## 2. 单元格的各种操作

### 2.0 公共代码段

```python
"""
@File    :   get_cell_posture.py
@Time    :   2023/07/09 19:04:39
@Author  :   pansf<pansfy@163.com>
@Myblog  :   pansfy.github.io
@Version :   1.0
@License :   Apache
@Desc    :   Excel 单元格的各种操作
"""
from openpyxl import load_workbook

# 加载 Excel 文件
workbook = load_workbook(r"./excels/按品牌统计分析销售收入.xlsx")

# 获取工作簿中所有的 sheet, 可通过 for 遍历 sheet
print(workbook.sheetnames)

# 获取工作簿中的具体一个 sheet
sheet_name = "销售记录表"
worksheet = workbook[sheet_name]
```

> 前置操作可参考前序教程
>
> 1. [如何遍历某个目录下所有的 Excel 文件](https://pansfy.github.io/python_work/traverse_files/)
>
> 2. [Excel 中如何获取遍历不同的工作簿](https://pansfy.github.io/python_work/traverse_sheets/)

### 2.1 获取表格内容所在的范围

```python
# 获取表格内容所在的范围
dimensions = worksheet.dimensions
print(dimensions)
```

![获取表格内容所在的范围](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20230709211845281.png?x-oss-process=image)

### 2.2 获取单个单元格信息

```python
# 方式一：指定列标 + 索引
cell = worksheet["I3"]
# 方式二：指定行、列
cell = worksheet.cell(row=3, column=9)

print("单元格所在行: ", cell.row)
print("单元格所在列: ", cell.column)
print("单元格内的值: ", cell.value)
print("单元格的超链接: ", cell.hyperlink)
print("单元格所在列索引: ", cell.col_idx)
print("单元格所在列的列标: ", cell.column_letter)
print("单元格所在坐标: ", cell.coordinate)
print("单元格的数字日期计算起始日期: ", cell.base_date)
print("单元格的数据类型: ", cell.data_type)
print("单元格的内容编码: ", cell.encoding)
print("单元格内的值: ", cell.internal_value)
print("单元格内容是否为日期: ", cell.is_date)
print("单元格所在的Sheet: ", cell.parent)
print("单元格的相对偏移量单元格: ", cell.offset(row=1, column=1))
```

> [Cell 的属性和行为参考](https://openpyxl.readthedocs.io/en/stable/api/openpyxl.cell.cell.html#openpyxl.cell.cell.Cell)

### 2.3 获取一个区域内的单元格

![区域单元格获取的各种姿势](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20230710113708242.png?x-oss-process=image)

#### 2.3.1 按列标整列获取

```python
# 遍历整个D类，即 D1:D20
cells_column = worksheet["D"]
for cell in cells_column:
    print(cell.value)
```

#### 2.3.2 按列标多个整列获取

```python
# 遍历整个E列、F列，先遍历出E列所有行，再遍历出F列所有行，要区别于 E1:F20，范围相同，但遍历方式不同
cells_two_column = worksheet["E:F"]
for col in cells_two_column:
    for cell in col:
        print(cell.value)
```

#### 2.3.3 按列标索引范围获取

```python
# 遍历整个E列、F列，逐行遍历所有列
cells_two_column = worksheet["E1:F20"]
for row in cells_two_column:
    for cell in row:
        print(cell.value)
```

#### 2.3.4 按行、列范围获取

```python
# 指定行、列范围，不指定时默认整个内容区即 min_row=1，max_row=max_row, min_col=1, max_col=max_col
cells_row_col = worksheet.iter_rows(min_row=2, max_row=20, min_col=7, max_col=9)
for row in cells_row_col:
    for cell in row:
        print(cell.value)
```

#### 2.3.5 所有行获取

```python
# 逐行遍历所有列，即第一行所有列、第二行所有列、第三行所有列...
cells_rows = worksheet.rows
for row in cells_rows:
    for cell in row:
        print(cell.value)
```

#### 2.3.6 所有列获取

```python
# 逐列遍历所有行，即第一列所有行、第二列所有行、第三列所有行...
cells_cols = worksheet.columns
for col in cells_cols:
    for cell in col:
        print(cell.value)
```

### 2.4 获取合并区域内的单元格

![获取合并区域内的单元格](https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20230709222227723.png?x-oss-process=image)

```python
# 封装一个用于获取合并区域内单元格的函数
def parser_merged_cell(sheet, row, col):
    """检查是否为合并单元格并获取对应行列单元格的值。
       如果是合并单元格，则取合并区域左上角单元格的值作为当前单元格的值,否则直接返回该单元格的值

    Args:
        sheet (Worksheet): 当前工作表对象
        row (row): 需要获取的单元格所在行
        col (col): 需要获取的单元格所在列

    Returns:
        Cell: 返回单元格
    """
    cell = sheet.cell(row=row, column=col)
    # 判断 单元格(cell) 是否属于一个 合并的单元格(MergedCell)
    if isinstance(cell, MergedCell):
        # 遍历合并单元格区域
        for merged_range in sheet.merged_cells.ranges:
            # 检查 单元格坐标 是否存在于 合并单元格区域
            if cell.coordinate in merged_range:
                # 返回 单元格 所在的合并区域的最顶部的单元格，以便获取内容
                cell = sheet.cell(row=merged_range.min_row, column=merged_range.min_col)
                break
    return cell

# 测试获取
title_cell = parser_merged_cell(worksheet, 1, 1)
print(title_cell.value)		# 6月份销售记录表
```

