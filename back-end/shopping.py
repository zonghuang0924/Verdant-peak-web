shop_list = [[]]

def add_item(shop_list):
    item = input("請輸入商品名稱")
    money = input("請輸入商品價格")
    ingredients = input("請輸入商品成分")
    brief = input("請輸入商品簡介")
    iD = input("請輸入商品ID")
    png = input("請輸入商品照片位置")
    print("A:翠峰甘露系列" , "B:期間限定系列" , "C:簡餐系列" , "D:咖啡甜點系列" , "E:文創商品專區")
    series = input("請輸入商品系列代碼")
    shop_list.append([item,money,ingredients,brief,id,png,series])

def show_item(shop_list):
    print(shop_list)
def delete_item(shop_list):
    pass

def sort_item(shop_list):
    pass

def stat_item(shop_list):
    pass

def main():
    
    while True:
        print("1.新增商品 2.顯示清單 3.刪除商品 4.排序 5.統計 0.離開 ")
        x = input("請選擇功能")
        if x == "0":
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


main()