# 📊 Sales Performance Report Generator

This is a simple Node.js application that reads sales data from a JSON file, evaluates employee performance based on predefined sales targets, and prints a detailed sales performance report with bonus calculations.

---

## 🧩 Features

- Reads sales data from `data.json`
- Calculates total sales and quantity for each employee
- Compares actual sales with predefined targets
- Assigns performance ratings:
  - ✅ High Performer (≥90%)
  - ⚠️ Average Performer (70–89%)
  - ❌ Low Performer (<70%)
- Calculates bonus based on performance
- Prints a detailed report for each employee

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sales-report-generator.git
cd sales-report-generator
node salesreport.js

```
### 2. Output Pattern
---------------------------------
Sales Performance Report
---------------------------------
----------------------------
Alice
-----------------------------
Sales Target :$100
Actual Sale :$95
Sales Percentage :95 %
Performance :High Performer
Employee Bonus :$19.0

----------------------------
Bob
-----------------------------
Sales Target :$200
Actual Sale :$150
Sales Percentage :75 %
Performance :Average Performer
Employee Bonus :$15.0

----------------------------
Charlie
-----------------------------
Sales Target :$200
Actual Sale :$180
Sales Percentage :90 %
Performance :High Performer
Employee Bonus :$36.0