shop_list = [[]]

def add_item(shop_list):
    item = input("請輸入商品名稱：")
    money = input("請輸入商品價格：")
    ingredients = input("請輸入商品成分：")
    brief = input("請輸入商品簡介：")
    iD = input("請輸入商品ID：")
    png = input("請輸入商品照片位置：")
    print("A:翠峰甘露系列  B:期間限定系列  C:簡餐系列  D:咖啡甜點系列  E:文創商品專區")
    series = input("請輸入商品系列代碼：")
    shop_list.append([item, money, ingredients, brief, iD, png, series])
    print("✅ 商品已新增。\n")

def show_item(shop_list):
    if len(shop_list) <= 1:
        print("⚠️ 商品清單為空。\n")
        return
    print("📦 商品清單：")
    for i in range(1, len(shop_list)):
        print(f"{i}. 名稱:{shop_list[i][0]} 價格:{shop_list[i][1]} ID:{shop_list[i][4]} 系列:{shop_list[i][6]}")
    print()

def delete_item(shop_list):
    show_item(shop_list)
    if len(shop_list) <= 1:
        return
    try:
        idx = int(input("請輸入要刪除的商品編號（從上方列表中選）："))
        if 1 <= idx < len(shop_list):
            removed = shop_list.pop(idx)
            print(f"🗑️ 已刪除商品：{removed[0]}\n")
        else:
            print("⚠️ 無效的編號。\n")
    except ValueError:
        print("⚠️ 請輸入數字。\n")

def sort_item(shop_list):
    if len(shop_list) <= 1:
        print("⚠️ 沒有可排序的商品。\n")
        return
    print("排序依據：1.價格 2.名稱")
    option = input("請選擇排序方式：")
    if option == "1":
        try:
            shop_list[1:] = sorted(shop_list[1:], key=lambda x: float(x[1]))
            print("✅ 已依價格排序（由小至大）。\n")
        except ValueError:
            print("⚠️ 價格格式錯誤，無法排序。\n")
    elif option == "2":
        shop_list[1:] = sorted(shop_list[1:], key=lambda x: x[0])
        print("✅ 已依名稱排序（A-Z）。\n")
    else:
        print("⚠️ 無效的選項。\n")

def stat_item(shop_list):
    if len(shop_list) <= 1:
        print("⚠️ 商品清單為空，無法統計。\n")
        return
    total = len(shop_list) - 1
    price_list = []
    for i in range(1, len(shop_list)):
        try:
            price_list.append(float(shop_list[i][1]))
        except ValueError:
            continue
    if price_list:
        average_price = sum(price_list) / len(price_list)
        print(f"📊 商品總數：{total}")
        print(f"💰 平均價格：{average_price:.2f}\n")
    else:
        print("⚠️ 無法統計價格，格式錯誤。\n")

def main():
    while True:
        print("1.新增商品 2.顯示清單 3.刪除商品 4.排序 5.統計 0.離開 ")
        x = input("請選擇功能：")
        if x == "0":
            print("👋 已離開程式。")
            break
        elif x == "1":
            add_item(shop_list)
        elif x == "2":
            show_item(shop_list)
        elif x == "3":
            delete_item(shop_list)
        elif x == "4":
            sort_item(shop_list)
        elif x == "5":
            stat_item(shop_list)
        else:
            print("⚠️ 請輸入正確的選項（0-5）。\n")

main()
